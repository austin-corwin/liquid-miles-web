'use server'

import { User, UserCollection } from '@/api/gql/graphql'
import { fetchGraphQL } from '@/features/api/api'
import { getUserByClerkIdQuery } from '@/features/api/queries/getUserByClerkIdQuery'

/** Get a user from Contentful */
const getUserByClerkId = async (clerkId: string): Promise<User> => {
  console.log('getUser', clerkId)
  const { data } = await fetchGraphQL<UserCollection>(getUserByClerkIdQuery, {
    clerkId,
  })
  return data?.items?.shift()
}
export { getUserByClerkId }
