import { Link } from '@/api/gql/graphql'
import { HStack, LinkProps, StackProps } from '@chakra-ui/react'
import { SignedIn } from '@clerk/nextjs'
import React from 'react'
import { NavLink } from './NavLink'

interface NavMenuProps extends StackProps {
  links: Link[]
  linkProps?: LinkProps
}

const NavMenu: React.FC<NavMenuProps> = ({
  links,
  linkProps,
  ...stackProps
}) => {
  return (
    <HStack as='nav' role='navigation' gap={{ base: 3, lg: 4 }} {...stackProps}>
      {links.map((link) => (
        <React.Fragment key={link._id}>
          {link?.requiresAuthentication ? (
            <SignedIn>
              <NavLink link={link} {...linkProps} />
            </SignedIn>
          ) : (
            <NavLink link={link} {...linkProps} />
          )}
        </React.Fragment>
      ))}
      {stackProps?.children}
    </HStack>
  )
}

export { NavMenu }
