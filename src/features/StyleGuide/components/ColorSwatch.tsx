'use client'
import {
  Box,
  BoxProps,
  HStack,
  Text,
  TextProps,
  useToken,
} from '@chakra-ui/react'

const ColorSwatch: React.FC<{
  color: string
  size?: 'sm' | 'lg'
}> = ({ color, size = 'sm' }) => {
  const [hex] = useToken('colors', [color])
  const labelProps: TextProps = {
    fontSize: size === 'lg' ? 'xl' : 'base',
    fontFamily: 'mono',
    fontWeight: 'medium',
  }
  const containerProps: BoxProps = {
    background: color,
    // aspectRatio: size === 'lg' ? '16/9' : '1/1',
    aspectRatio: '1/1',
    h: size === 'lg' ? 24 : 12,
    w: 'auto',
  }

  return (
    <HStack
      w='full'
      alignItems='center'
      gap={4}
      p={4}
      maxWidth={size === 'lg' ? 72 : 56}
    >
      <Box rounded='md' shadow={'lg'} {...containerProps}></Box>
      <Box w='full'>
        <Text {...labelProps} as='div'>
          {color}
          <br />
          <Text as='span' fontSize={'md'} color='gray.500'>
            {hex}
          </Text>
        </Text>
      </Box>
    </HStack>
  )
}

export { ColorSwatch }
