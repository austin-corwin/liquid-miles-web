import { handleAdminAccess } from '@/features/users/utils/handleAdminAccess'

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  await handleAdminAccess()
  return <>{children}</>
}
