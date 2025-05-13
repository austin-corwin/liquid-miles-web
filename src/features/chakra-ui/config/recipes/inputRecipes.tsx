import { InputProps, TextareaProps } from '@chakra-ui/react'

export enum InputRecipe {
  Default = 'Default',
}
const inputRecipes: Record<InputRecipe, InputProps & TextareaProps> = {
  Default: {
    errorBorderColor: 'error',
    focusBorderColor: 'black',
  },
}

export { inputRecipes }
