import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { PageHeader } from '@/features/Pages/components/PageHeader'
import { PageLayout } from '@/features/Pages/components/PageLayout'
import { BoxProps, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

interface AccountPageLayoutProps extends BoxProps {
  title: string
}

const AccountPageLayout: React.FC<AccountPageLayoutProps> = ({
  title,
  children,
  ...boxProps
}) => {
  return (
    <PageLayout
      background='white'
      minH='100vh'
      pl={{ base: 0, md: 8 }}
      {...boxProps}
    >
      <PageHeader title={title} flexDirection='column-reverse' gap={2} py={0}>
        <Heading {...headingRecipes.H6}>Account</Heading>
      </PageHeader>
      <VStack
        w='full'
        gap={8}
        py={8}
        alignItems='start'
        pb={16}
        overflow='hidden'
      >
        {children}
      </VStack>
    </PageLayout>
  )
}

export { AccountPageLayout }
