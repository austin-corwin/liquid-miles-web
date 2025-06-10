'use client'

import { User } from '@/api/gql/graphql'
import { useUsers } from '@/features/users/utils/hooks/useUsers'
import { Td, Text, Tr } from '@chakra-ui/react'
import { UserJSON } from '@clerk/backend'
import React from 'react'

interface UserRowProps {
  user: User
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  const { clerkUsers } = useUsers()
  const [clerkUser, setClerkUser] = React.useState<UserJSON>()
  const [email, setEmail] = React.useState<string>()

  React.useEffect(() => {
    if (clerkUsers?.length > 0) {
      const clerkUserData = clerkUsers?.find((item) => item.id === user.clerkId)
      setClerkUser(clerkUserData)
      const primaryEmail = clerkUser?.email_addresses?.find(
        (e) => e.id === clerkUser?.primary_email_address_id
      )
      setEmail(primaryEmail?.email_address || user.email)
    }
  }, [clerkUsers])

  return (
    <Tr>
      <Td>
        <Text
          textOverflow='ellipsis'
          maxWidth='12ch'
          overflow='clip'
          fontFamily='monospace'
        >
          {user._id}
        </Text>
      </Td>
      <Td>
        {clerkUser?.first_name} {clerkUser?.last_name}
      </Td>
      <Td>{email || user?.email}</Td>
      <Td>{user.role}</Td>
      <Td>
        <Text
          textOverflow='ellipsis'
          maxWidth='12ch'
          overflow='clip'
          fontFamily='monospace'
        >
          {user.clerkId}
        </Text>
      </Td>
    </Tr>
  )
}

export { UserRow }
