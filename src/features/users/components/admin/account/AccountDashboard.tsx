'use client'

import { useUser } from '@/features/users/utils/hooks/useUser'
import { Text } from '@chakra-ui/react'
import React from 'react'
import { AccountPageLayout } from './AccountPageLayout'

const AccountDashboard: React.FC = () => {
  const { user } = useUser()

  return (
    <AccountPageLayout title='Dashboard'>
      <Text>Hi There!</Text>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </AccountPageLayout>
  )
}

export { AccountDashboard }
