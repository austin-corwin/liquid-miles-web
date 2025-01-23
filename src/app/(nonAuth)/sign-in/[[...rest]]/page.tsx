// import Image from "next/image";
import { SignedOut, SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='w-full flex h-screen justify-center items-center'>
      {/* <SignIn /> */}
      <SignedOut>
        <SignIn />
      </SignedOut>
      You are now visiting a page that only logged in users can see
      {/* <SignedIn>
        <UserButton />
      </SignedIn> */}
    </div>
  );
}
