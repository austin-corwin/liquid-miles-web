'use client'

import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Icon,
  IconButton,
  UseDisclosureProps,
} from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import React from 'react'
import { HiXMark } from 'react-icons/hi2'
import { mainNavigationConfig } from '../../config/mainNavigationConfig'
import { AuthLinks } from '../AuthLinks'
import { NavMenu } from '../NavMenu'

interface NavDrawerProps extends UseDisclosureProps {
  drawerProps?: DrawerProps
}

const NavDrawer: React.FC<NavDrawerProps> = ({
  isOpen,
  onClose,
  drawerProps,
}) => {
  const pathName = usePathname()

  React.useEffect(() => {
    onClose()
  }, [pathName, onClose])

  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      {...drawerProps}
    >
      <DrawerOverlay />
      <DrawerContent bg='tertiary'>
        <DrawerHeader
          display='flex'
          justifyContent='flex-end'
          w='full'
          py={3}
          px={4}
        >
          <IconButton
            onClick={onClose}
            variant='ghost'
            icon={<Icon as={HiXMark} boxSize={7} />}
            aria-label='Close Navigation'
            display={{ base: 'flex', md: 'none' }}
          />
        </DrawerHeader>

        <DrawerBody>
          <NavMenu
            links={mainNavigationConfig}
            linkProps={{
              fontSize: 'lg',
            }}
            flexDirection={'column'}
            gap={4}
          >
            <Divider w={24} my={8} />
            <AuthLinks size='md' />
          </NavMenu>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export { NavDrawer }
