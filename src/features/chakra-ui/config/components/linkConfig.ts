import type { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { CSSTransition } from '../transitions'

const linkConfig: ComponentSingleStyleConfig = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    fontFamily: 'poppins',
    display: 'flex',
    alignItems: 'baseline',
  },
  variants: {
    nav: defineStyle({
      fontFamily: 'poppins',
      fontWeight: 'extrabold',
      color: 'black',
      transition: CSSTransition.EaseIn200,
      _hover: {
        textDecoration: 'inherit',
        color: 'white',
      },
    }),
  },
  defaultProps: {},
})

export { linkConfig }
