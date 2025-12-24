import Link from "next/link";
import SignUpForm from "./sign-up-form";
import { Suspense } from "react";

export default function Page() {
  
  return (
    <>
      <Suspense>
        <SignUpForm />
      </Suspense>

      <p className="mt-8 text-center text-sm text-gray-500">
        Already have an account? {' '}
        <Link
          href="/sign-in"
          className="font-semibold leading-6 text-brand hover:text-destructive-foreground"
        >
          Sign in
        </Link>
      </p>
    </>
  );
}