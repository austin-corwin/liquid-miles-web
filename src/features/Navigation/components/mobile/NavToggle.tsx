'use client'

import { Icon, IconButton, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { HiBars3 } from 'react-icons/hi2'
import { NavDrawer } from './NavDrawer'

const NavToggle: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const buttonRef = React.useRef(null)

  return (
    <>
      <IconButton
        ref={buttonRef}
        onClick={onOpen}
        variant='ghost'
        size='lg'
        icon={<Icon as={HiBars3} boxSize={7} />}
        aria-label='Toggle Navigation'
        display={{ base: 'flex', md: 'none' }}
      />
      <NavDrawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export { NavToggle }
