'use client'

import { textRecipes } from '@/features/chakra-ui/config/recipes/textRecipes'
import { useUser } from '@/features/users/utils/hooks/useUser'
import { Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AdminPageLayout } from './AdminPageLayout'

const AdminDashboard: React.FC = () => {
  const { user } = useUser()
  return (
    <AdminPageLayout title='Dashboard'>
      <VStack
        rounded='lg'
        bg='white'
        p={{ base: 4, md: 6 }}
        alignItems='start'
        gap={2}
      >
        <Text {...textRecipes.Lead} fontWeight='semibold'>
          Welcome back, {user?.clerk?.firstName || 'Tasty Human'}!
        </Text>
        <Text {...textRecipes.Body}>
          This admin provides basic tools for managing content and viewing data.
        </Text>
      </VStack>
    </AdminPageLayout>
  )
}

export { AdminDashboard }
