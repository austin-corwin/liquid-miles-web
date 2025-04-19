'use client'

import { Link } from '@/api/gql/graphql'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import React from 'react'

interface NavLinkProps extends LinkProps {
  link?: Link
}

const NavLink: React.FC<NavLinkProps> = ({ link, ...linkProps }) => {
  return (
    <ChakraLink
      href={link?.url}
      target={link?.target || '_self'}
      itemprop='url'
      variant='nav'
      //   fontSize={{ base: 'sm', md: 'xs' }}
      className='font-primary font-extrabold hover:text-white duration-300 transition-all ease-in-out'
      {...linkProps}
    >
      {link?.label}
    </ChakraLink>
  )
}

export { NavLink }
