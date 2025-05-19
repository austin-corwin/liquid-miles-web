'use server'

import { createClerkClient, UserJSON } from '@clerk/backend'

const getClerkUsers = async (): Promise<UserJSON[]> => {
  const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  })
  const users = await clerkClient.users.getUserList({
    limit: 100,
  })

  return users.data?.map((u) => u.raw)
}

export { getClerkUsers }
