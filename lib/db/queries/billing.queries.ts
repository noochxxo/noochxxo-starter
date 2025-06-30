import { and, eq, isNull, desc } from 'drizzle-orm';
import { db } from '../drizzle';
import { users, userTokens, tokenTransactions, userSubscriptions, userPurchases } from '../schemas';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth/session';

export async function getUserWithTokens() {
  const sessionCookie = (await cookies()).get('session');
  if (!sessionCookie || !sessionCookie.value) {
    return null;
  }

  const sessionData = await verifyToken(sessionCookie.value);
  if (!sessionData || !sessionData.user || typeof sessionData.user.id !== 'number') {
    return null;
  }

  if (new Date(sessionData.expires) < new Date()) {
    return null;
  }

  const result = await db
    .select({
      user: users,
      tokens: userTokens
    })
    .from(users)
    .leftJoin(userTokens, eq(users.id, userTokens.userId))
    .where(and(eq(users.id, sessionData.user.id), isNull(users.deletedAt)))
    .limit(1);
  
  if (result.length === 0) {
    return null;
  }

  return {
    ...result[0].user,
    tokens: result[0].tokens
  };
}

export async function getUserTokenBalance() {
  const sessionCookie = (await cookies()).get('session');
  if (!sessionCookie || !sessionCookie.value) {
    return null;
  }

  const sessionData = await verifyToken(sessionCookie.value);
  if (!sessionData || !sessionData.user || typeof sessionData.user.id !== 'number') {
    return null;
  }

  const tokens = await db
    .select()
    .from(userTokens)
    .where(eq(userTokens.userId, sessionData.user.id))
    .limit(1);
  
  return tokens.length > 0 ? tokens[0] : null;
}

// Get user's token transactions - with pagination
export async function getUserTokenTransactions(limit: number = 50, offset: number = 0) {
  const sessionCookie = (await cookies()).get('session');
  if (!sessionCookie || !sessionCookie.value) {
    return [];
  }

  const sessionData = await verifyToken(sessionCookie.value);
  if (!sessionData || !sessionData.user || typeof sessionData.user.id !== 'number') {
    return [];
  }

  const transactions = await db
    .select()
    .from(tokenTransactions)
    .where(eq(tokenTransactions.userId, sessionData.user.id))
    .orderBy(desc(tokenTransactions.createdAt))
    .limit(limit)
    .offset(offset);
  
  return transactions;
}

export async function getUserRecentTransactions() {
  return getUserTokenTransactions(10, 0);
}

export async function getUserCurrentSubscription() {
  const sessionCookie = (await cookies()).get('session');
  if (!sessionCookie || !sessionCookie.value) {
    return null;
  }

  const sessionData = await verifyToken(sessionCookie.value);
  if (!sessionData || !sessionData.user || typeof sessionData.user.id !== 'number') {
    return null;
  }

  const subscription = await db
    .select()
    .from(userSubscriptions)
    .where(
      and(
        eq(userSubscriptions.userId, sessionData.user.id),
        eq(userSubscriptions.status, 'active')
      )
    ).limit(1);
  
  return subscription.length > 0 ? subscription[0] : null;
}

export async function getUserPurchaseHistory(limit: number = 20, offset: number = 0) {
  const sessionCookie = (await cookies()).get('session');
  if (!sessionCookie || !sessionCookie.value) {
    return [];
  }

  const sessionData = await verifyToken(sessionCookie.value);
  if (!sessionData || !sessionData.user || typeof sessionData.user.id !== 'number') {
    return [];
  }

  const purchases = await db
    .select()
    .from(userPurchases)
    .where(eq(userPurchases.userId, sessionData.user.id))
    .orderBy(desc(userPurchases.purchasedAt))
    .limit(limit)
    .offset(offset);
  
  return purchases;
}

export async function getUserBillingOverview() {
  const sessionCookie = (await cookies()).get('session');
  if (!sessionCookie || !sessionCookie.value) {
    return null;
  }

  const sessionData = await verifyToken(sessionCookie.value);
  if (!sessionData || !sessionData.user || typeof sessionData.user.id !== 'number') {
    return null;
  }

  const userId = sessionData.user.id;

  // Get all data in parallel
  const [
    user,
    tokens,
    subscription,
    recentTransactions,
    recentPurchases
  ] = await Promise.all([
    db.select().from(users).where(and(eq(users.id, userId), isNull(users.deletedAt))).limit(1),
    db.select().from(userTokens).where(eq(userTokens.userId, userId)).limit(1),
    db.select().from(userSubscriptions).where(
      and(eq(userSubscriptions.userId, userId), eq(userSubscriptions.status, 'active'))
    ).limit(1),
    db.select().from(tokenTransactions).where(eq(tokenTransactions.userId, userId))
      .orderBy(desc(tokenTransactions.createdAt)).limit(10),
    db.select().from(userPurchases).where(eq(userPurchases.userId, userId))
      .orderBy(desc(userPurchases.purchasedAt)).limit(5)
  ]);

  if (user.length === 0) {
    return null;
  }

  return {
    user: user[0],
    tokens: tokens.length > 0 ? tokens[0] : null,
    currentSubscription: subscription.length > 0 ? subscription[0] : null,
    recentTransactions,
    recentPurchases
  };
}