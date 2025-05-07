'use client'

import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { PageHeader } from '@/features/Pages/components/PageHeader'
import { PageLayout } from '@/features/Pages/components/PageLayout'
import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { TestEmail } from './TestEmail'

const AdminEmail: React.FC = () => {
  return (
    <PageLayout background='transparent'>
      <PageHeader
        title='Emails'
        // color='white'
        flexDirection='column-reverse'
        gap={2}
        py={0}
      >
        <Heading {...headingRecipes.H6}>Admin</Heading>
      </PageHeader>
      <VStack w='full' gap={8} py={8}>
        <TestEmail />
      </VStack>
    </PageLayout>
  )
}

export { AdminEmail }
