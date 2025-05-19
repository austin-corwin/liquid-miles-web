'use client'

import { UserCollection } from '@/api/gql/graphql'
import { fetchGraphQL } from '@/features/api/api'
import { getUserByClerkIdQuery } from '@/features/api/queries/getUserByClerkIdQuery'
import { useClerk } from '@clerk/nextjs'
import useSWR from 'swr'
import { UserComposite } from '../../types/UserComposite'

interface UseUser {
  user: UserComposite
  isLoading: boolean
  isError: boolean
}

const useUser = (): UseUser => {
  const { user, isSignedIn } = useClerk()
  const { data, error, isLoading } = useSWR(`user_${user?.id}`, async () => {
    if (!isSignedIn) return null
    const { data } = await fetchGraphQL<UserCollection>(getUserByClerkIdQuery, {
      clerkId: user?.id,
    })
    return {
      ...data?.items?.shift(),
      clerk: user,
    }
  })

  return {
    user: data,
    isLoading,
    isError: error,
  }
}

export { useUser }
