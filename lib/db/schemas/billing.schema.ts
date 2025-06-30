import { boolean, integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { products, users } from ".";

export const userSubscriptions = pgTable('user_subscriptions', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  productId: integer('product_id')
    .notNull()
    .references(() => products.id),
  stripeCustomerId: text('stripe_customer_id').notNull(),
  stripeSubscriptionId: text('stripe_subscription_id').unique(),
  status: varchar('status', { length: 20 }).notNull(), // active, canceled, past_due, ect...
  currentPeriodStart: timestamp('current_period_start').notNull(),
  currentPeriodEnd: timestamp('current_period_end').notNull(),
  cancelAtPeriodEnd: boolean('cancel_at_period_end').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
});

export const userPurchases = pgTable('user_purchases', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  productId: integer('product_id')
    .notNull()
    .references(() => products.id),
  stripePaymentIntentId: text('stripe_payment_intent_id').unique(),
  tokensGranted: integer('tokens_granted').notNull(),
  purchasedAt: timestamp('purchased_at').notNull().defaultNow(),
  status: varchar('status', { length: 20 }).notNull().default('completed')
});

export const userTokens = pgTable('user_tokens', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id)
    .unique(),
  availableTokens: integer('available_tokens').notNull().default(0), // can be changed for free tokens on signup/ updated each month
  totalTokensEarned: integer('total_tokens_earned').notNull().default(0),
  totalTokensUsed: integer('total_tokens_used').notNull().default(0),
  lastUpdated: timestamp('last_updated').notNull().defaultNow()
});

export const tokenTransactions = pgTable('token_transactions', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  type: varchar('type', { length: 20 }).notNull(), // earned, used, expire
  amount: integer('amount').notNull(),
  source: varchar('source', { length: 50 }).notNull(), // purchase, subscription, usage, ect...
  sourceId: integer('source_id'), // regerence to purchase/subscription/ect...
  description: text('description'),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

export type UserSubscription = typeof userSubscriptions.$inferSelect;
export type NewUserSubscription = typeof userSubscriptions.$inferInsert;
export type UserPurchase = typeof userPurchases.$inferSelect;
export type NewUserPurchase = typeof userPurchases.$inferInsert;
export type UserTokens = typeof userTokens.$inferSelect;
export type NewUserTokens = typeof userTokens.$inferInsert;
export type TokenTransaction = typeof tokenTransactions.$inferSelect;
export type NewTokenTransaction = typeof tokenTransactions.$inferInsert;

export enum SubscriptionStatus {
  ACTIVE = 'active',
  CANCELED = 'canceled',
  INCOMPLETE = 'incomplete',
  INCOMPLETE_EXPIRED = 'incomplete_expired',
  PAST_DUE = 'past_due',
  TRIALING = 'trialing',
  UNPAID = 'unpaid',
}

export enum TokenTransactionType {
  EARNED = 'earned',
  USED = 'used',
  EXPIRED = 'expired',
}

export enum TokenSource {
  PURCHASE = 'purchase',
  SUBSCRIPTION = 'subscription',
  USAGE = 'usage',
  ADMIN_GRANT = 'admin_grant',
}