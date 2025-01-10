import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
     <main className=" flex flex-col justify-center h-full text-center max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold gap-6">Happiness Computers</h1>
        <h3 className="text-5xl font-bold">Sales Invoice</h3>
        <p>
        <Button asChild>
          <Link href="/dashboard">
            Sign In
          </Link>
          </Button>
        </p>
      </main>
  );
}
