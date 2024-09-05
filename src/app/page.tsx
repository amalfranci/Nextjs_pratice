
"use client";

import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>This is home page - public route</h1>
      {session ? (
        <div>
          <p>Welcome, {session.user?.name || "User"}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        redirect('/auth')
      )}
    </div>
  );
}
