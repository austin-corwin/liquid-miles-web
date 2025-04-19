import { Link as ChakraLink, HStack, Image, Text } from '@chakra-ui/react'
import { mainNavigationConfig } from '../config/mainNavigationConfig'
import { AuthLinks } from './AuthLinks'
import { NavMenu } from './NavMenu'

const Navigation: React.FC<{ children?: React.ReactNode }> = () => {
  return (
    <HStack
      id='main-navigation'
      w='full'
      bg='primary'
      justifyContent='space-between'
      alignItems='center'
      px={{ base: 4, md: 8 }}
      py={1}
    >
      <HStack alignItems='center'>
        <ChakraLink
          variant='nav'
          href='/'
          display='flex'
          alignItems='center'
          justifyContent='flex-start'
          aria-label='Homepage'
          gap={1}
        >
          <Image
            src='/logos/lm-logo.png'
            alt='Logo showing white ribbon with checkered background and cartoon beer'
            height={48}
            width={48}
            h={14}
            w={14}
          />
          <Text as='span' itemProp='name' whiteSpace='nowrap'>
            Liquid Miles
          </Text>
        </ChakraLink>
      </HStack>
      <NavMenu links={mainNavigationConfig}>
        <AuthLinks />
      </NavMenu>
    </HStack>
  )
}

export default Navigation
