import { AdminDashboard } from '@/features/admin/components/AdminDashboard'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dashboard - Admin | Liquid Miles',
}

const AdminPage: React.FC = () => {
  return <AdminDashboard />
}

export default AdminPage
