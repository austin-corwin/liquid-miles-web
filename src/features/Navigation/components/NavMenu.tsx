import { Link } from '@/api/gql/graphql'
import { HStack, StackProps } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from './NavLink'

interface NavMenuProps extends StackProps {
  links: Link[]
}

const NavMenu: React.FC<NavMenuProps> = ({ links, ...stackProps }) => {
  return (
    <HStack as='nav' role='navigation' gap={{ base: 3, lg: 4 }} {...stackProps}>
      {links.map((link) => (
        <NavLink link={link} key={link._id} />
      ))}
    </HStack>
  )
}

export { NavMenu }
