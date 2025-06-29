import type { Config } from 'drizzle-kit';

export default {
  schema: './lib/db/schemas',
  out: './lib/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;