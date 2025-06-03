'use client'

import { textRecipes } from '@/features/chakra-ui/config/recipes/textRecipes'
import { useUser } from '@/features/users/utils/hooks/useUser'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { AccountPageLayout } from './AccountPageLayout'

const AccountDashboard: React.FC = () => {
  const { user, isLoading } = useUser()
  return (
    <AccountPageLayout title='Dashboard'>
      <VStack alignItems={'flex-start'}>
        <Skeleton isLoaded={!isLoading}>
          <Text {...textRecipes.Lead}>
            👋 Welcome back, {user?.clerk?.firstName || 'Racer'}!
          </Text>
        </Skeleton>
      </VStack>
      <Skeleton isLoaded={!isLoading}>
        <Alert alignItems={'flex-start'} colorScheme='gray'>
          <AlertIcon />
          <VStack alignItems={'start'}>
            <AlertTitle>No upcoming Races</AlertTitle>
            <AlertDescription>
              Registration for Liquid Miles 2025 is not yet open. Check back
              soon!
            </AlertDescription>
          </VStack>
        </Alert>
      </Skeleton>
    </AccountPageLayout>
  )
}

export { AccountDashboard }
