'use client'

import { AdminPageLayout } from '@/features/admin/components/AdminPageLayout'
import React from 'react'
import { UserList } from './UserList/UserList'

const UsersAdmin: React.FC = () => {
  return (
    <AdminPageLayout title='Users'>
      <UserList />
    </AdminPageLayout>
  )
}

export { UsersAdmin }
