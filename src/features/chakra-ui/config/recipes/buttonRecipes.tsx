import { ButtonProps } from '@chakra-ui/react'

export enum ButtonRecipe {
  OutlineBlack = 'OutlineBlack',
}
const buttonRecipes: Record<ButtonRecipe, ButtonProps> = {
  OutlineBlack: {
    colorScheme: 'blackAlpha',
    variant: 'outline',
    color: 'black',
    borderColor: 'black',
  },
}

export { buttonRecipes }
