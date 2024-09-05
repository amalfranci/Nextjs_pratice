"use client";

import type { NextRequest } from "next/server";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    redirect("/");
  }

  return (
    <div>
      <p>Login with github</p>
      <button onClick={() => signIn("github")}>Sign in with github</button>
     
    </div>
  );
}