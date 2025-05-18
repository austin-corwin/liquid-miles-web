import { auth } from '@clerk/nextjs/server'
import { UserRole } from '../types/UserRole'
import { getUserByClerkId } from './getUserByClerkId'

const handleAdminAccess = async (): Promise<boolean> => {
  const clerk = await auth()
  const user = await getUserByClerkId(clerk.userId)
  if (user.role !== UserRole.Admin) {
    clerk.redirectToSignIn()
  }
  return user.role === UserRole.Admin
}

export { handleAdminAccess }
