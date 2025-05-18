import { UsersAdmin } from '@/features/users/components/admin/UsersAdmin'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Users - Admin | Liquid Miles',
}

export default function AdminEmailPage() {
  return <UsersAdmin />
}
