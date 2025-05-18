import { VStack } from '@chakra-ui/react'
import React from 'react'
import { adminNavigationConfig } from '../config/adminNavigationConfig'
import { NavMenu } from './NavMenu'

const AdminNavigation: React.FC = () => {
  return (
    <VStack
      w={{ base: 'full' }}
      maxW={{ base: 'full', md: 64, xl: 72 }}
      minW={64}
      position='sticky'
      top={0}
      py={16}
      px={{ base: 4 }}
    >
      <NavMenu
        links={adminNavigationConfig}
        flexDirection={{ base: 'column' }}
        alignItems='start'
        justifyContent='flex-start'
        bg='gray.100'
        rounded='lg'
        w='full'
        p={4}
        linkProps={{
          textAlign: 'left',
          fontSize: 'sm',
          _hover: {
            color: 'secondary',
          },
        }}
      />
    </VStack>
  )
}

export { AdminNavigation }
