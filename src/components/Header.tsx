
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs';
  import Container from '@/components/Container';
  import Link from 'next/link';

const Header = () => {
    return (
      <Container>
      <header className="mt-6 mb-8">
        <div className="flex justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">
          <Link href="/dashboard">Happiness Computer</Link>
        </h1>
        <div>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        </div>
    </header>
    </Container>
    );
  };
  
  export default Header;