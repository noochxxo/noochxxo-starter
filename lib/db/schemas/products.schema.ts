import { boolean, integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
  type: varchar('type', { length: 20 }).notNull(), // token_pack, subscription
  stripeProductId: text('stripe_product_id').unique(),
  stripePriceId: text('stripe_price_id').unique(),
  isActive: boolean('is_active').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
});

export const productFeatures = pgTable('product_features', {
  id: serial('id').primaryKey(),
  productId: integer('product_id')
    .notNull()
    .references(() => products.id),
  featureType: varchar('feature_type', { length: 50 }).notNull(), // tokens, storage, api_calls, etc
  featureValue: integer('feature_value').notNull(), // quantity/limit
  isInlimited: boolean('is_unlimited').notNull().default(false),
});

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
export type ProductFeature = typeof productFeatures.$inferSelect;
export type NewProductFeature = typeof productFeatures.$inferInsert;

export type ProductWithFeatures = Product & {
  features: ProductFeature[];
};

export enum ProductType {
  TOKEN_PACK = 'token_pack',
  SUBSCRIPTION = 'subscription',
}

export enum FeatureType {
  TOKENS = 'tokens',
  STORAGE = 'storage',
  API_CALLS = 'api_calls',
}
