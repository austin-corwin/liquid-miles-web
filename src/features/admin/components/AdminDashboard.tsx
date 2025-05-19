'use client'

import { textRecipes } from '@/features/chakra-ui/config/recipes/textRecipes'
import { useUser } from '@/features/users/utils/hooks/useUser'
import { Text } from '@chakra-ui/react'
import React from 'react'
import { AdminPageLayout } from './AdminPageLayout'

const AdminDashboard: React.FC = () => {
  const { user } = useUser()
  return (
    <AdminPageLayout title='Dashboard'>
      <Text {...textRecipes.Lead} fontWeight='semibold'>
        Welcome back, {user?.clerk?.firstName || 'Tasty Human'}!
      </Text>
      <Text {...textRecipes.Body}>
        This admin provides basic tools for managing content and viewing data.
      </Text>
    </AdminPageLayout>
  )
}

export { AdminDashboard }
