'use server'

import { createClerkClient, User } from '@clerk/backend'

const getClerkUser = async (id: string): Promise<User> => {
  const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  })
  const user = await clerkClient.users.getUser(id)

  return user
}

export { getClerkUser }
