import { Link } from '@/api/gql/graphql'

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
    url: '/auth/tickets',
    requiresAuthentication: true,
  },
] as Link[]

export { mainNavigationConfig }
