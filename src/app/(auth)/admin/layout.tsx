import { UserRole } from '@/features/users/types/UserRole'
import { getUserByClerkId } from '@/features/users/utils/getUserByClerkId'
import { auth } from '@clerk/nextjs/server'

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const clerk = await auth()
  const user = await getUserByClerkId(clerk.userId)
  if (user.role !== UserRole.Admin) {
    clerk.redirectToSignIn()
  }

  return <div>{children}</div>
}
