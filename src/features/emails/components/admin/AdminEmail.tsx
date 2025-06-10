'use client'

import { AdminPageLayout } from '@/features/admin/components/AdminPageLayout'
import React from 'react'
import { TestEmail } from './TestEmail'

const AdminEmail: React.FC = () => {
  return (
    <AdminPageLayout title='Emails'>
      <TestEmail />
    </AdminPageLayout>
  )
}

export { AdminEmail }
