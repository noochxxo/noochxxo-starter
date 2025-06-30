import { relations } from "drizzle-orm";
import { activityLogs, productFeatures, products, tokenTransactions, userPurchases, users, userSubscriptions, userTokens } from ".";


export const activityLogsRelations = relations(activityLogs, ({ one }) => ({
  user: one(users, {
    fields: [activityLogs.userId],
    references: [users.id],
  }),
}));

export const productsRelations = relations(products, ({ many }) => ({
  features: many(productFeatures),
  purchases: many(userPurchases),
  subscriptions: many(userSubscriptions),
}));

export const productFeaturesRelations = relations(productFeatures, ({ one }) => ({
  product: one(products, {
    fields: [productFeatures.productId],
    references: [products.id],
  }),
}));

export const userSubscriptionsRelations = relations(userSubscriptions, ({ one }) => ({
  user: one(users, {
    fields: [userSubscriptions.userId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [userSubscriptions.productId],
    references: [products.id],
  }),
}));

export const userPurchasesRelations = relations(userPurchases, ({ one }) => ({
  user: one(users, {
    fields: [userPurchases.userId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [userPurchases.productId],
    references: [products.id],
  }),
}));

export const userTokensRelations = relations(userTokens, ({ one, many }) => ({
  user: one(users, {
    fields: [userTokens.userId],
    references: [users.id],
  }),
  transactions: many(tokenTransactions),
}));

export const tokenTransactionsRelations = relations(tokenTransactions, ({ one }) => ({
  user: one(users, {
    fields: [tokenTransactions.userId],
    references: [users.id],
  }),
}));

// Update your existing users relations to include the new relationships
export const usersRelations = relations(users, ({ many, one }) => ({
  subscription: one(userSubscriptions), // Current active subscription
  purchases: many(userPurchases),
  tokens: one(userTokens),
  tokenTransactions: many(tokenTransactions),
}));