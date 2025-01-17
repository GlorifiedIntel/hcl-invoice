import { SignUp } from '@clerk/nextjs';
import Container from '@/components/Container';

export default function SignupPage() {

return (
     <Container className="flex justify-center mt-8">
        <SignUp/>
     </Container>
);

}