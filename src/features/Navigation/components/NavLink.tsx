'use client'

import { Link } from '@/api/gql/graphql'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/next-js'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavLinkProps extends Omit<LinkProps, 'href'> {
  link?: Link
}

const NavLink: React.FC<NavLinkProps> = ({ link, ...linkProps }) => {
  const pathname = usePathname()
  return (
    <ChakraLink
      href={link?.url}
      target={link?.target || '_self'}
      itemProp='url'
      variant='nav'
      textDecoration={pathname === link?.url && 'underline'}
      pointerEvents={pathname === link?.url ? 'none' : 'auto'}
      textUnderlineOffset={2}
      {...linkProps}
    >
      {link?.label}
    </ChakraLink>
  )
}

export { NavLink }
