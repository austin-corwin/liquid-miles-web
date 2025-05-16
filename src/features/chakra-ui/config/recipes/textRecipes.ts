import { TextProps } from '@chakra-ui/react'

export enum TextRecipe {
  Lead = 'Lead',
  Body = 'Body',
  Compact = 'Compact',
  FinePrint = 'FinePrint',
  Light = 'Light',
}
const textRecipes: Record<TextRecipe, TextProps> = {
  Lead: {
    as: 'p',
    fontSize: 'xl',
    fontWeight: 'medium',
    sx: {
      '> a': {
        display: 'inline-block',
        color: 'secondary',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  Body: {
    as: 'p',
    fontSize: 'lg',
    fontWeight: 'normal',
    mb: 2,
    sx: {
      '> a': {
        display: 'inline-block',
        color: 'secondary',
        textDecoration: 'underline',
        _hover: {
          color: 'black',
        },
      },
    },
  },
  Compact: {
    fontSize: 'md',
    fontWeight: 'normal',
    sx: {
      '> a': {
        display: 'inline-block',
        textDecoration: 'underline',
      },
    },
  },
  FinePrint: {
    fontSize: 'sm',
    fontWeight: 'normal',
    sx: {
      '> a': {
        display: 'inline-block',
        textDecoration: 'underline',
      },
    },
  },
  Light: {
    color: 'white',
    sx: {
      '> a': {
        display: 'inline-block',
        color: 'primary',
      },
    },
  },
}

export { textRecipes }
