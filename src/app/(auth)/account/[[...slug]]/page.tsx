'use client'
import { AccountDashboard } from '@/features/users/components/admin/account/AccountDashboard'
import { clerkComponentsTheme } from '@/features/users/config/clerkComponentsTheme'
import { Icon } from '@chakra-ui/react'
import { UserProfile } from '@clerk/nextjs'
import React from 'react'
import { HiMiniSquare3Stack3D } from 'react-icons/hi2'

const AccountPage: React.FC = () => {
  return (
    <UserProfile appearance={clerkComponentsTheme.userProfile}>
      <UserProfile.Page
        label='Dashboard'
        url='/dashboard'
        labelIcon={<Icon as={HiMiniSquare3Stack3D} />}
      >
        <AccountDashboard />
      </UserProfile.Page>
      <UserProfile.Page label='account' />
      <UserProfile.Page label='security' />
    </UserProfile>
  )
}

export default AccountPage
