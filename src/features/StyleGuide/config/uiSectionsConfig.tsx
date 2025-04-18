import { StackProps } from '@chakra-ui/react'
import { ElementType } from 'react'
import {
  TbChecklist,
  TbColorSwatch,
  TbFavicon,
  TbInputCheck,
  TbTypography,
} from 'react-icons/tb'
import * as previews from '../components/previews'
import { IconsDescription } from '../components/snippets/IconsDescription'
import { RecipesDescription } from '../components/snippets/RecipesDescription'

export interface UiSectionProps extends StackProps {
  id: string
  title?: string
  description?: React.ReactNode
  previews?: UiComponentPreview[]
  icon?: ElementType
  tags?: string[]
}

export interface UiComponentPreview extends UiSectionProps {
  children?: React.ReactNode
}

const uiSectionConfig: UiSectionProps[] = [
  {
    id: 'typography',
    title: 'Typography',
    description: 'Fonts etc.',
    previews: [previews.headingsPreviewConfig, previews.TextPreviewConfig],
    icon: TbTypography,
  },
  {
    id: 'colors',
    title: 'Colors',
    description: 'The colors, Duke, the colors!',
    previews: [previews.colorsPreviewConfig],
    icon: TbColorSwatch,
  },
  {
    id: 'icons',
    title: 'Icons',
    description: <IconsDescription />,
    previews: [previews.iconsPreviewConfig],
    icon: TbFavicon,
  },
  {
    id: 'controls',
    title: 'Controls',
    description: 'User inputs, controls and form components.',
    previews: [previews.buttonsPreviewConfig, previews.formPreviewConfig],
    icon: TbInputCheck,
  },
  {
    id: 'recipes',
    title: 'Recipes',
    description: <RecipesDescription />,
    previews: [previews.recipeExamplesPreviewConfig],
    icon: TbChecklist,
    tags: ['new'],
  },
]

export { uiSectionConfig }
