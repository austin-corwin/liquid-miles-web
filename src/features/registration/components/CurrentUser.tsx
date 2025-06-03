'use client'

import { textRecipes } from '@/features/chakra-ui/config/recipes/textRecipes'
import { useUser } from '@/features/users/utils/hooks/useUser'
import {
  Avatar,
  HStack,
  IconButton,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from '@chakra-ui/react'
import { SignOutButton } from '@clerk/nextjs'
import React from 'react'
import { TbEdit, TbEditOff } from 'react-icons/tb'

interface CurrentUserProps {
  locked?: boolean
}

const CurrentUser: React.FC<CurrentUserProps> = ({ locked }) => {
  const { user, isLoading } = useUser()
  return (
    <VStack alignItems='start' justifyContent='space-between' w='full' gap={2}>
      <Text {...textRecipes.Compact} fontWeight='bold'>
        Registering as
      </Text>
      <HStack w='full' gap={3}>
        <SkeletonCircle isLoaded={!isLoading} w={12} h={12}>
          <Avatar
            size='md'
            src={user?.clerk?.imageUrl}
            name={user?.clerk?.fullName}
          />
        </SkeletonCircle>
        <VStack alignItems='flex-start' gap={1} w='full'>
          <Skeleton isLoaded={!isLoading}>
            <Text {...textRecipes.Compact} lineHeight={1}>
              {user?.clerk?.fullName || 'User name...'}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <Text {...textRecipes.FinePrint} lineHeight={1}>
              {user?.clerk?.primaryEmailAddress?.emailAddress ||
                'exampleemail@gmail.com'}
            </Text>
          </Skeleton>
        </VStack>
        <SignOutButton redirectUrl='/register'>
          <IconButton
            aria-label='Change User'
            variant='ghost'
            size='sm'
            icon={locked ? <TbEditOff /> : <TbEdit />}
            isDisabled={locked || isLoading}
          />
        </SignOutButton>
      </HStack>
    </VStack>
  )
}

export { CurrentUser }
