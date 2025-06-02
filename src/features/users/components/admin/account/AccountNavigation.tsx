import { NavMenu } from '@/features/Navigation/components/NavMenu'
import { accountNavigationConfig } from '@/features/users/config/accountNavigationConfig'
import { VStack } from '@chakra-ui/react'
import React from 'react'

const AccountNavigation: React.FC = () => {
  return (
    <VStack
      w={{ base: 'full' }}
      maxW={{ base: 'full', md: 64, xl: 72 }}
      minW={64}
      position='sticky'
      top={0}
      py={8}
    >
      <NavMenu
        links={accountNavigationConfig}
        flexDirection={{ base: 'column' }}
        alignItems='start'
        justifyContent='flex-start'
        w='full'
        p={4}
        linkProps={{
          textAlign: 'left',
          w: 'full',
          rounded: 'md',
          px: { base: 4, md: 6 },
          py: { base: 2, md: 3 },
          color: 'gray.700',
          _hover: {
            color: 'black',
            textDecoration: 'underline',
          },
        }}
      />
    </VStack>
  )
}

export { AccountNavigation }
