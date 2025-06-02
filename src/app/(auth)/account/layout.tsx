import { AccountNavigation } from '@/features/users/components/admin/account/AccountNavigation'
import { Stack } from '@chakra-ui/react'

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Stack
        alignItems='flex-start'
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'row' }}
        w='full'
        bg='white'
      >
        <AccountNavigation />
        <div>{children}</div>
      </Stack>
    </>
  )
}
