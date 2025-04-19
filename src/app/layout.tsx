import { fonts } from '@/config/fonts'
import { ChakraUiProvider } from '@/features/chakra-ui/components/ChakraUiProvider'
import Navigation from '@/features/Navigation/components/Navigation'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Liquid Miles',
  description: 'That crazy event',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { poppins } = fonts
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${poppins.variable} antialiased`}>
          <ChakraUiProvider>
            <Navigation />
            <main>{children}</main>
          </ChakraUiProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
