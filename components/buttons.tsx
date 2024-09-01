"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <>
        <Link href={"/dashboard"}>
          <Image
            src={
              session.user?.image ??
              "https://media.discordapp.net/attachments/978346129504739439/985781242417012756/unknown_2.png?ex=66d55053&is=66d3fed3&hm=725caca34b1a4a74633583ab2c909c9cbab1de9b1a80154f46a35bdac47dbd48&=&format=webp&quality=lossless&width=237&height=239"
            }
            width={32}
            height={32}
            alt="Your name"
          />
        </Link>
        <SignOutButton />
      </>
    );
  }

  return <button onClick={() => signIn()}>Sign in</button>;
}
export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
