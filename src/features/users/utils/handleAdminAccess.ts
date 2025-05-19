import { auth } from '@clerk/nextjs/server'
import { notFound } from 'next/navigation'
import { UserRole } from '../types/UserRole'
import { getUserByClerkId } from './getUserByClerkId'

const handleAdminAccess = async (): Promise<boolean> => {
  const clerk = await auth()
  const user = await getUserByClerkId(clerk.userId)
  if (user.role !== UserRole.Admin) {
    notFound()
  }
  return user.role === UserRole.Admin
}

export { handleAdminAccess }
