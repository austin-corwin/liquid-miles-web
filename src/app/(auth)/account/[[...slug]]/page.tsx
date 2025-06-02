'use client'
import { AccountDashboard } from '@/features/users/components/admin/account/AccountDashboard'
import { AccountSignOut } from '@/features/users/components/admin/account/AccountSignOut'
import { clerkComponentsTheme } from '@/features/users/config/clerkComponentsTheme'
import { UserProfile } from '@clerk/nextjs'
import React from 'react'
import { GoSignOut } from 'react-icons/go'
import { HiMiniHome } from 'react-icons/hi2'

const AccountPage: React.FC = () => {
  return (
    <UserProfile appearance={clerkComponentsTheme.userProfile}>
      <UserProfile.Page
        label='Dashboard'
        url='/dashboard'
        labelIcon={<HiMiniHome />}
      >
        <AccountDashboard />
      </UserProfile.Page>
      <UserProfile.Page label='account' />
      <UserProfile.Page label='security' />
      <UserProfile.Page
        label='Sign Out'
        url='/sign-out'
        labelIcon={<GoSignOut className='text-red-600' />}
      >
        <AccountSignOut />
      </UserProfile.Page>
    </UserProfile>
  )
}

export default AccountPage
