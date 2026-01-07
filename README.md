# Noochxxo Starter

An opinionated Next.js 16 starter template with Supabase authentication, Drizzle ORM, and a server-first architecture.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Auth & Backend:** Supabase (with `@supabase/ssr`)
- **Database ORM:** Drizzle ORM + `drizzle-zod`
- **Validation:** Zod v4
- **Styling:** Tailwind CSS v4
- **Package Manager:** pnpm

## Architecture

This template follows a **server-first** approach with clear separation of concerns:

```
User Action → Server Action → Service Class → Database
```

| Layer | Location | Purpose |
|-------|----------|---------|
| **UI Components** | `app/`, `components/` | React Server & Client Components |
| **Server Actions** | `lib/actions/` | Form handling, data mutations |
| **Services** | `lib/services/` | Business logic, reusable operations |
| **Queries** | `lib/queries/` | Complex database reads |
| **Validations** | `lib/validations/` | Zod schemas (re-exported from Drizzle schemas) |

### Why This Pattern?

- **Server Actions** handle all form submissions and mutations from the client
- **Service Classes** encapsulate business logic and can be reused across actions
- **API Routes** are reserved for external webhooks (Stripe, cron jobs, etc.)

## Project Structure

```
├── app/
│   ├── (auth)/                 # Auth routes (sign-in, sign-up)
│   ├── (protected)/            # Authenticated routes
│   │   ├── admin/              # Admin-only routes
│   │   └── dashboard/          # User dashboard
│   ├── (root)/                 # Public routes
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
│
├── components/
│   └── ui/                     # Shared UI components (shadcn/ui)
│
├── db/
│   ├── index.ts                # Drizzle client export
│   ├── schema.ts               # Barrel export for all schemas
│   ├── schemas/                # Individual table schemas
│   │   └── users.schema.ts     # Example: User table + Zod schemas
│   └── supabase/
│       └── migrations/         # Drizzle-generated migrations
│
├── lib/
│   ├── actions/                # Server Actions
│   ├── constants/              # App constants, permissions
│   ├── queries/                # Database query functions
│   ├── services/               # Business logic classes
│   ├── supabase/               # Supabase client helpers
│   │   ├── client.ts           # Browser client
│   │   ├── server.ts           # Server client
│   │   └── middleware.ts       # Session management
│   ├── types/                  # TypeScript types
│   ├── validations/            # Re-exported Zod schemas
│   └── utils.ts                # Utility functions
│
├── proxy.ts                    # Next.js 16 middleware entry
└── drizzle.config.ts           # Drizzle Kit configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- Supabase project (or local Supabase instance)

### 1. Clone and Install

```bash
git clone https://github.com/noochxxo/noochxxo-starter.git
cd noochxxo-starter
pnpm install
```

### 2. Environment Variables

Create a `.env.local` file in the root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Database (Direct connection for Drizzle)
DATABASE_URL=your_postgres_connection_string
```

### 3. Database Setup

Generate and run migrations:

```bash
# Generate migration files from your schema
pnpm drizzle-kit generate

# Apply migrations to your database
pnpm drizzle-kit migrate
```

### 4. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Key Patterns

### Drizzle Schema + Zod Validation

Schemas are defined with Drizzle and automatically generate Zod validators using `drizzle-zod`:

```typescript
// db/schemas/users.schema.ts
import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  // ...
});

// Auto-generated Zod schemas with custom refinements
export const insertUserSchema = createInsertSchema(users, {
  email: z.email("Invalid email address"),
  name: z.string().min(2).max(100),
});

export const selectUserSchema = createSelectSchema(users);

// Derived schemas for specific use cases
export const updateUserProfileSchema = insertUserSchema
  .pick({ name: true, bio: true })
  .partial();

// Type exports
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
```

### Server Actions

Server Actions handle all form submissions and call service classes:

```typescript
// lib/actions/auth.actions.ts
"use server";

import { signUpFormSchema } from "@/lib/validations/auth";
import { AuthService } from "@/lib/services/auth/auth.service";

export async function signUpUser(prevState: unknown, formData: FormData) {
  const validation = signUpFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validation.success) {
    return { success: false, error: { message: formatError(validation.error) } };
  }

  const supabase = await createClient();
  const authService = new AuthService(supabase, db);
  
  const result = await authService.signUpUser(validation.data);
  
  if (!result.success) {
    return { success: false, error: result.error };
  }

  redirect("/dashboard");
}
```

### Service Classes

Business logic is encapsulated in service classes:

```typescript
// lib/services/auth/auth.service.ts
export class AuthService {
  constructor(
    private supabase: SupabaseClient,
    private db: DrizzleClient
  ) {}

  async signUpUser(input: SignUpInput): Promise<ServiceResponse<AuthUser>> {
    // 1. Create auth user in Supabase
    // 2. Create profile in database (with rollback on failure)
    // 3. Return typed response
  }
}
```

### Role-Based Access Control

Middleware handles authentication and role-based routing:

```typescript
// lib/supabase/middleware.ts
const userRole = user?.user_metadata?.role as UserRole;

// Admin routes require admin or moderator role
if (isAdminRoute && userRole !== "admin" && userRole !== "moderator") {
  return NextResponse.redirect(new URL("/dashboard", request.url));
}
```

Roles are defined in the user schema:

```typescript
role: text("role", { enum: ["user", "moderator", "admin", "none"] })
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm drizzle-kit generate` | Generate migrations from schema |
| `pnpm drizzle-kit migrate` | Apply migrations |
| `pnpm drizzle-kit studio` | Open Drizzle Studio GUI |

## Extending the Template

### Adding a New Table

1. Create schema in `db/schemas/`
2. Export from `db/schemas/index.ts`
3. Generate and run migration

### Adding a New Feature

1. Create validation schema in `lib/validations/`
2. Create service class in `lib/services/`
3. Create server action in `lib/actions/`
4. Build your UI components

### Adding API Routes

Reserve API routes for external integrations:

```typescript
// app/api/webhooks/stripe/route.ts
export async function POST(request: Request) {
  // Handle Stripe webhook
}
```

## Notes

- **Middleware:** Next.js 16 uses `proxy.ts` instead of `middleware.ts`
- **Supabase SSR:** Always create a new client per request (required for Fluid compute)
- **Tailwind v4:** Uses the codegen-based approach (no `tailwind.config.js`)

## License

MIT