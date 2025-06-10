'use client'

import { User, UserCollection } from '@/api/gql/graphql'
import { fetchGraphQL } from '@/features/api/api'
import { getAllUsersQuery } from '@/features/api/queries/getAllUsersQuery'
import { UserJSON } from '@clerk/backend'
import useSWR from 'swr'
import { getClerkUsers } from '../getClerkUsers'

export interface AdminCompositeUser extends User {
  clerk?: UserJSON
}

interface UseUsers {
  users: User[]
  clerkUsers: UserJSON[]
  isLoading: boolean
  isError: boolean
}

const useUsers = (): UseUsers => {
  const { data, error, isLoading } = useSWR(`users`, async () => {
    const { data } = await fetchGraphQL<UserCollection>(getAllUsersQuery)
    return data?.items
  })

  const { data: clerkData } = useSWR(`clerkUsers`, async () => {
    const clerkUsers = await getClerkUsers()
    return clerkUsers
  })

  return {
    users: data,
    clerkUsers: clerkData,
    isLoading,
    isError: error,
  }
}

export { useUsers }
