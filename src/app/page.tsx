import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


export default async function Home() {
    return (
     <main className=" flex flex-col justify-center h-full text-center max-w-5xl mx-auto my-60">
        <h1 className="text-3xl font-bold gap-6">Happiness Computers</h1>
        <h3 className="text-5xl font-bold">Sales Invoice</h3>
        <p className="mb-5">App Version: 1.0</p>
        <p>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        <Button className="hapi-button" asChild>
          <Link href="/dashboard">
            Sign In
          </Link>
          </Button>
        </p>
      </main>
  );
}
