'use client'

import {
  Box,
  Heading,
  HStack,
  Icon,
  StackProps,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { GoBookmarkFill } from 'react-icons/go'
import { UiSectionProps } from '../config/uiSectionsConfig'

const UiSection: React.FC<UiSectionProps> = ({
  title,
  description,
  children,
  icon = GoBookmarkFill,
  ...props
}) => {
  const shallowProps: Partial<UiSectionProps> = props
  delete shallowProps.icon
  const stackProps: StackProps = shallowProps
  return (
    <VStack
      as='section'
      alignItems={'start'}
      justifyContent={'flex-start'}
      gap={{ base: 4, md: 8 }}
      w='full'
      {...stackProps}
    >
      <VStack
        alignItems={'start'}
        justifyContent={'flex-start'}
        w='full'
        gap={6}
        pb={4}
      >
        <Heading as='h2' size='2xl' gap={4}>
          <Box
            w='fit-content'
            aspectRatio='1/1'
            bg='gray.200'
            rounded='lg'
            p={2}
          >
            <Icon as={icon} color='black' boxSize={12} />
          </Box>
          {title}
        </Heading>
        {description && (
          <Box fontFamily={'mono'} w='full' maxW='prose'>
            {description}
          </Box>
        )}
      </VStack>
      <HStack
        w='full'
        gap={{ base: 6, md: 12 }}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        {children}
      </HStack>
    </VStack>
  )
}

export { UiSection }
