import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import { fonts } from "@/config/fonts";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Liquid Miles",
  description: "That crazy event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { poppins } = fonts;
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${poppins.variable} antialiased`}>
          <Navigation>
            <SignedIn>
              <Link
                href='/auth/tickets'
                className='font-primary font-extrabold hover:text-white duration-300 transition-all ease-in-out'
              >
                Tickets
              </Link>
            </SignedIn>
            <div className='font-primary font-bold border-2 border-black p-2 rounded-xl hover:text-white hover:border-white'>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Navigation>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
