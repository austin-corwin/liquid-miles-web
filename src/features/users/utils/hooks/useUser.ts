'use client'

import { UserCollection } from '@/api/gql/graphql'
import { fetchGraphQL } from '@/features/api/api'
import { getUserByClerkIdQuery } from '@/features/api/queries/getUserByClerkIdQuery'
import { useClerk } from '@clerk/nextjs'
import useSWR from 'swr'

const useUser = () => {
  const { user, isSignedIn } = useClerk()
  const { data, error, isLoading } = useSWR(`user_${user?.id}`, async () => {
    if (!isSignedIn) return null
    const { data } = await fetchGraphQL<UserCollection>(getUserByClerkIdQuery, {
      clerkId: user?.id,
    })
    return data?.items?.shift()
  })

  return {
    user: data,
    isLoading,
    isError: error,
  }
}

export { useUser }
