import { AdminEmail } from '@/features/emails/components/admin/AdminEmail'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emails - Admin | Liquid Miles',
}

export default function AdminEmailPage() {
  return <AdminEmail />
}
