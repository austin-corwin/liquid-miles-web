import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import { fonts } from "@/config/fonts";

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
    <html lang='en'>
      <body className={`${poppins.variable} antialiased`}>
        <Navigation />
        <h1 className='text-white text-2xl font-bold'>fuck you</h1>
        {children}
      </body>
    </html>
  );
}
