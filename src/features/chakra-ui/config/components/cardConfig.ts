import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    shadow: 'none',
    transition: 'all .3s ease',
    _groupHover: { shadow: 'lg' },
  },
  // header: {
  //   display: 'flex',
  //   justifyContent: 'center',
  // },
})
const variants = {
  pintCard: {
    container: {
      border: '2px solid #1c606d',
      borderRadius: 'xl',
    },
    header: {
      textTransform: 'uppercase',
      color: '#1c606d',
      fontSize: '2xl',
      fontWeight: 'semibold',
      paddingBottom: '1rem',
    },
  },
}

const cardConfig = defineMultiStyleConfig({
  baseStyle,
  variants,
})

export { cardConfig }
