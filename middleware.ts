import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { signToken, verifyToken } from "@/lib/auth/session";

const protectedPaths = [/\/user/];
const protectedAdminPaths = [/\/admin/];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get("session");
  const isProtectedUserRoute = protectedPaths.some((p) => p.test(pathname));
  const isProtectedAdminRoute = protectedAdminPaths.some((p) =>
    p.test(pathname)
  );

  if (isProtectedAdminRoute && !sessionCookie) {
    return NextResponse.redirect(new URL("/unauthorized/401", request.url));
  }

  if (isProtectedUserRoute && !sessionCookie) {
    return NextResponse.redirect(new URL("/unauthorized/401", request.url));
  }

  let res = NextResponse.next();

  if (sessionCookie && request.method === "GET") {
    try {
      const parsed = await verifyToken(sessionCookie.value);
      const expiresInOneDay = new Date(Date.now() + 24 * 60 * 60 * 1000);

      res.cookies.set({
        name: "session",
        value: await signToken({
          ...parsed,
          expires: expiresInOneDay.toISOString(),
        }),
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        expires: expiresInOneDay,
      });

      // TODO: Figure out if this belongs here or somewhere else
      if (isProtectedAdminRoute && !parsed.admin) {
        return NextResponse.redirect(new URL("/unauthorized/403", request.url));
      }

      if (isProtectedUserRoute && parsed.admin) {
        return NextResponse.redirect(new URL("/unauthorized/403", request.url));
      }

    } catch (error) {
      console.error("Error updating session:", error);
      res.cookies.delete("session");

      if (isProtectedUserRoute) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
      }
      if (isProtectedAdminRoute) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  }

  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  runtime: "nodejs",
};
