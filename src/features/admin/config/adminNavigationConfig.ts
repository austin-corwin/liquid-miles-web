import { Link } from '@/api/gql/graphql'

const adminNavigationConfig: Link[] = [
  {
    _id: 'dashboard',
    label: 'Dashboard',
    url: '/admin',
    target: '_self',
  },
  {
    _id: 'users',
    label: 'Users',
    url: '/admin/users',
    target: '_self',
  },
  {
    _id: 'emails',
    label: 'Emails',
    url: '/admin/emails',
    target: '_self',
  },
  {
    _id: 'cms',
    label: 'Contentful CMS',
    url: 'https://app.contentful.com/',
    target: '_blank',
  },
] as Link[]

export { adminNavigationConfig }
