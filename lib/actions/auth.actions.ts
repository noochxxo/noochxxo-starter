'use server';

import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db/drizzle';
import {
  User,
  users,
  activityLogs,
  type NewUser,
  type NewActivityLog,
  ActivityType,
} from '@/lib/db/schemas';
import { comparePasswords, hashPassword, setSession } from '@/lib/auth/session';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
// import { createCheckoutSession } from '@/lib/payments/stripe';
import { getUser } from '@/lib/db/queries';
import {
  validatedAction,
} from '@/lib/auth/middleware';

async function logActivity(
  userId: number,
  type: ActivityType,
  ipAddress?: string
) {
  const newActivity: NewActivityLog = {
    userId,
    action: type,
    ipAddress: ipAddress || ''
  };
  await db.insert(activityLogs).values(newActivity);
}

const signInSchema = z.object({
  email: z.string().email().min(3).max(255),
  password: z.string().min(8).max(100)
});

export const signIn = validatedAction(signInSchema, async (data, formData) => {
  const { email, password } = data;

  const userSignIn = await db
    .select({
      user: users
    })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (userSignIn.length === 0) {
    return {
      error: 'Invalid email or password. Please try again.',
      email,
      password
    };
  }

  const { user: foundUser} = userSignIn[0];

  const isPasswordValid = await comparePasswords(
    password,
    foundUser.passwordHash
  );

  if (!isPasswordValid) {
    return {
      error: 'Invalid email or password. Please try again.',
      email,
      password
    };
  }

  await Promise.all([
    setSession(foundUser),
    logActivity(foundUser.id, ActivityType.SIGN_IN)
  ]);

  // const redirectTo = formData.get('redirect') as string | null;

  if (foundUser.role === 'admin') {
    redirect('/admin/dashboard');
  }

  redirect('/user/dashboard');
});

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const signUp = validatedAction(signUpSchema, async (data) => {
  const { email, password } = data;

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return {
      error: 'Failed to create user. Please try again.',
      email,
      password
    };
  }

  const passwordHash = await hashPassword(password);

  const newUser: NewUser = {
    email,
    passwordHash,
    role: 'member' // Default role, will be overridden if there's an invitation
  };

  const [createdUser] = await db.insert(users).values(newUser).returning();

  if (!createdUser) {
    return {
      error: 'Failed to create user. Please try again.',
      email,
      password
    };
  }

  await Promise.all([
    setSession(createdUser),
    logActivity( createdUser.id, ActivityType.SIGN_UP)
  ]);

  // await logActivity( createdUser.id, ActivityType.SIGN_UP);

  if (createdUser.role === 'admin') {
    redirect('/admin/dashboard');
  }
  
  redirect('/user/dashboard');
});

export async function signOut() {
  const user = (await getUser()) as User;
  await logActivity(user.id, ActivityType.SIGN_OUT);
  (await cookies()).delete('session');
}

