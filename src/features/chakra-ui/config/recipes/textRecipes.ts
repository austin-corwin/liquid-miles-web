import { TextProps } from '@chakra-ui/react'

export enum TextRecipe {
  Lead = 'Lead',
  Body = 'Body',
  Compact = 'Compact',
  FinePrint = 'FinePrint',
}
const textRecipes: Record<TextRecipe, TextProps> = {
  Lead: {
    as: 'p',
    fontSize: 'xl',
    fontWeight: 'medium',
  },
  Body: {
    as: 'p',
    fontSize: 'lg',
    fontWeight: 'normal',
    mb: 2,
    sx: {
      '> a': {
        color: 'secondary',
        textDecoration: 'underline',
        _hover: {
          color: 'tertiary',
        },
      },
    },
  },
  Compact: {
    fontSize: 'md',
    fontWeight: 'normal',
  },
  FinePrint: {
    fontSize: 'sm',
    fontWeight: 'normal',
  },
}

export { textRecipes }
