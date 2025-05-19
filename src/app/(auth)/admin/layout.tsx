import { AdminNavigation } from '@/features/admin/components/AdminNavigation'
import { handleAdminAccess } from '@/features/users/utils/handleAdminAccess'
import { Stack } from '@chakra-ui/react'

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  await handleAdminAccess()

  return (
    <>
      <Stack
        alignItems='flex-start'
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'row' }}
        w='full'
      >
        <AdminNavigation />
        {children}
      </Stack>
    </>
  )
}
