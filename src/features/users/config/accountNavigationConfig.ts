import { Link } from '@/api/gql/graphql'

const accountNavigationConfig: Link[] = [
  {
    _id: 'dashboard',
    label: 'Dashboard',
    url: '/account',
    target: '_self',
  },
  {
    _id: 'sign-out',
    label: 'Sign Out',
    url: '#',
    target: '_self',
  },
  {
    _id: 'cms',
    label: 'Contentful CMS 🔗',
    url: 'https://app.contentful.com/',
    target: '_blank',
  },
] as Link[]

export { accountNavigationConfig }
