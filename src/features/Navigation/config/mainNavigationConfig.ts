import { Link } from '@/api/gql/graphql'
import { UserRole } from '@/features/users/types/UserRole'

const mainNavigationConfig: Link[] = [
  {
    _id: 'about',
    label: 'About',
    url: '/about',
    target: '_self',
  },
  {
    _id: 'rules',
    label: 'Rules',
    url: '/rules',
    target: '_self',
  },
  {
    _id: 'faqs',
    label: 'FAQs',
    url: '/faqs',
  },
  {
    _id: 'contact',
    label: 'Contact',
    url: '/contact',
  },
  {
    _id: 'tickets',
    label: 'Tickets',
    url: '/tickets',
    requiresAuthentication: true,
  },
  {
    _id: 'admin',
    label: 'Admin',
    url: '/admin',
    // requiresAuthentication: true,
    requiresRole: [UserRole.Admin],
  },
] as Link[]

export { mainNavigationConfig }
