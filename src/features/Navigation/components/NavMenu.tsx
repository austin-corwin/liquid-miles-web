'use client'

import { Link } from '@/api/gql/graphql'
import { useUser } from '@/features/users/utils/hooks/useUser'
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
  const { user } = useUser()
  return (
    <HStack as='nav' role='navigation' gap={{ base: 3, lg: 4 }} {...stackProps}>
      {links.map((link) => (
        <React.Fragment key={link._id}>
          {link?.requiresAuthentication || link?.requiresRole ? (
            <SignedIn>
              <NavLink
                link={link}
                {...linkProps}
                hidden={
                  link?.requiresRole && !link?.requiresRole.includes(user?.role)
                }
              />
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
