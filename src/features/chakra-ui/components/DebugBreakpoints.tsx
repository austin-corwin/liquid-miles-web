'use client'

import {
  Badge,
  HStack,
  Icon,
  Portal,
  useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'
import {
  HiComputerDesktop,
  HiDevicePhoneMobile,
  HiDeviceTablet,
} from 'react-icons/hi2'

const DebugBreakpoints: React.FC = () => {
  const currentScreenSize = useBreakpointValue({
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
    '3xl': '3xl',
  })
  return (
    process.env.NODE_ENV !== 'production' && (
      <Portal>
        <HStack
          position={'fixed'}
          opacity={0.8}
          bottom={0}
          left={0}
          p={1}
          zIndex={999}
        >
          <Badge display='flex' alignItems='center' gap={2} size='lg'>
            <Icon
              as={HiDevicePhoneMobile}
              boxSize={4}
              display={{ base: 'block', md: 'none' }}
            />
            <Icon
              as={HiDeviceTablet}
              boxSize={4}
              display={{ base: 'none', md: 'block', lg: 'none' }}
            />
            <Icon
              as={HiComputerDesktop}
              boxSize={4}
              display={{ base: 'none', lg: 'block' }}
            />
            {currentScreenSize || 'base'}
          </Badge>
        </HStack>
      </Portal>
    )
  )
}

export { DebugBreakpoints }
