import Link from "next/link";
import SignInForm from "./sign-in-form";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Suspense>
        <SignInForm />
      </Suspense>

      <p className="mt-8 text-center text-sm text-gray-500">
        Don&apos;t have an account? {' '}
        <Link
          href="/sign-up"
          className="font-semibold leading-6 text-brand hover:text-destructive-foreground"
        >
          Sign up
        </Link>
      </p>
    </>
  );
}