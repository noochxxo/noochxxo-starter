"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail, Rocket, Lock, UserPlus } from "lucide-react";
import { signIn, signUp } from "@/lib/actions";
import { ActionState } from "@/lib/auth/middleware";
import { Card } from "@/components/ui/card";

export function Login({ mode = "signin" }: { mode?: "signin" | "signup" }) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === "signin" ? signIn : signUp,
    { error: "" }
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 group">
            <div className="p-3 rounded-xl bg-gradient-to-r from-cosmic-600 to-nebula-600 group-hover:from-cosmic-500 group-hover:to-nebula-500 transition-all duration-300">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cosmic-400 to-nebula-400 bg-clip-text text-transparent">
              CosmicApp
            </span>
          </Link>
        </div>

        <Card className="card p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {mode === "signin" ? "Welcome Back" : "Join Us"}
            </h1>
            <p className="text-gray-300">
              {mode === "signin"
                ? "Sign in to your account"
                : "Create your account"}
            </p>
          </div>

          <form className="space-y-6" action={formAction}>
            <input type="hidden" name="redirect" value={redirect || ""} />
            {state?.error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-red-400 text-sm">{state?.error}</p>
              </div>
            )}

            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue={state.email}
                  required
                  maxLength={50}
                  className="pl-11 input py-6"
                  placeholder="Enter your email"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={
                    mode === "signin" ? "current-password" : "new-password"
                  }
                  defaultValue={state.password}
                  required
                  minLength={8}
                  maxLength={100}
                  className="pl-11 input py-6"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {mode === 'signup' && (
              <div className="flex items-start">
              <Input
                type="checkbox"
                className="w-4 h-4 text-cosmic-600 bg-transparent border-gray-300 rounded focus:ring-cosmic-500 mt-1 input"
                required
              />
              <label className="ml-2 text-sm text-gray-300">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-cosmic-400 hover:text-cosmic-300"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-cosmic-400 hover:text-cosmic-300"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full primary-btn"
              disabled={pending}
            >
              <UserPlus className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              {pending ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Loading...
                </>
              ) : mode === "signin" ? (
                "Sign in"
              ) : (
                "Sign up"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-300">
              {mode === "signin"
                ? "New to our platform?"
                : "Already have an account?"}
                {' '}
              <Link
                href={mode === "signin" ? "/sign-up" : "/sign-in"}
                className="text-cosmic-400 hover:text-cosmic-300 font-medium transition-colors"
              >
                {mode === "signin" ? "Create an account" : "Sign in"}
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
