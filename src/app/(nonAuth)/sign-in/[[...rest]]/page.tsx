import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className='w-full flex flex-col h-full justify-center items-center p-8 bg-secondary min-h-screen'>
      {/* TODO: Save this feature for later to implement request account */}
      <p className='mb-8 text-white'>
        Don&apos;t have an account? Check your email for an invite from
        invitations@liquidmiles.com. Reach out to a founder if you have
        questions.
      </p>

      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}
