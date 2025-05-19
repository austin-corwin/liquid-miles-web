import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { PageHeader } from '@/features/Pages/components/PageHeader'
import { PageLayout } from '@/features/Pages/components/PageLayout'
import { BoxProps, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

interface AdminPageLayoutProps extends BoxProps {
  title: string
}

const AdminPageLayout: React.FC<AdminPageLayoutProps> = ({
  title,
  children,
  ...boxProps
}) => {
  return (
    <PageLayout background='transparent' {...boxProps}>
      <PageHeader title={title} flexDirection='column-reverse' gap={2} py={0}>
        <Heading {...headingRecipes.H6}>Admin</Heading>
      </PageHeader>
      <VStack w='full' gap={8} py={8} alignItems='start'>
        {children}
      </VStack>
    </PageLayout>
  )
}

export { AdminPageLayout }
