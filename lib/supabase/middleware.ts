import { createServerClient } from "@supabase/ssr";
import { UserRole } from "@/lib/validations/users";
import { NextRequest, NextResponse } from "next/server";
import { hasEnvVars } from "../utils";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  // If the env vars are not set, skip middleware check. You can remove this
  // once you setup the project.
  if (!hasEnvVars) {
    return supabaseResponse;
  }

  // With Fluid compute, don't put this client in a global environment
  // variable. Always create a new one on each request.
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data } = await supabase.auth.getUser();
  const user = data.user;
  const pathname = request.nextUrl.pathname;

  const isAuthenticated = !!user;
  const userRole = user?.user_metadata?.role as UserRole | undefined;

  const publicPrefixes = ["/sign-in", "/sign-up"];
  const adminPrefixes = ["/admin"];

  const isPublicRoute =
    pathname === "/" ||
    publicPrefixes.some((prefix) => pathname.startsWith(prefix));

  const isAdminRoute = adminPrefixes.some((prefix) =>
    pathname.startsWith(prefix)
  );

  // Not authenticated → redirect to sign-in
  if (!isPublicRoute && !isAuthenticated) {
    const signInUrl = new URL("/sign-in", request.url);
    return NextResponse.redirect(signInUrl);
  }

  // Authenticated but wrong role for admin routes → redirect to dashboard
  if (isAdminRoute && userRole !== "admin" && userRole !== "moderator") {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return supabaseResponse;
}
