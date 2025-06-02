import { fonts } from '@/config/fonts'
import { ChakraUiProvider } from '@/features/chakra-ui/components/ChakraUiProvider'
import { DebugBreakpoints } from '@/features/chakra-ui/components/DebugBreakpoints'
import Navigation from '@/features/Navigation/components/Navigation'
import { clerkComponentsTheme } from '@/features/users/config/clerkComponentsTheme'
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
    <ClerkProvider appearance={clerkComponentsTheme.clerkProvider}>
      <html lang='en'>
        <body className={`${poppins.variable} antialiased`}>
          <ChakraUiProvider>
            <Navigation />
            <main>{children}</main>
            <DebugBreakpoints />
          </ChakraUiProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
