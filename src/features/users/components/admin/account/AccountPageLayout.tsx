import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { Box, BoxProps, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

interface AccountPageLayoutProps extends BoxProps {
  title: string
  subtitle?: React.ReactNode
}

const AccountPageLayout: React.FC<AccountPageLayoutProps> = ({
  title,
  children,
  subtitle,
  ...boxProps
}) => {
  return (
    <Box w='full' bg='white' {...boxProps}>
      <VStack
        w='full'
        maxWidth='container.xl'
        alignItems='center'
        pb={12}
        mx='auto'
      >
        <VStack
          as='header'
          w='full'
          gap={{ base: 4 }}
          position={'relative'}
          pb={6}
        >
          <Heading w='full' color='inherit' {...headingRecipes.H3} as='h1'>
            {title}
          </Heading>
          {subtitle && <Box w='full'>{subtitle}</Box>}
        </VStack>
        <VStack w='full' gap={8} alignItems='start' pb={16} overflow='hidden'>
          {children}
        </VStack>
      </VStack>
    </Box>
  )
}

export { AccountPageLayout }
