import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='w-full flex flex-col h-full justify-center items-center mt-24'>
      {/* TODO: Save this feature for later to implement request account */}
      {/* <p className='mb-8'>
        Don&apos;t have an account? Fill out our{" "}
        <Link href='#'>interest form here</Link> to request an account.
      </p> */}

      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
