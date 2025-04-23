import { HeadingProps } from '@chakra-ui/react'
import { copyToClipboard } from '../../utils/copyToClipboard'
import { CSSTransition } from '../transitions'

export enum HeadingRecipe {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  Anchor = 'Anchor',
}
const headingRecipes: Record<HeadingRecipe, HeadingProps> = {
  H1: {
    as: 'h1',
    size: '5xl',
    textTransform: 'capitalize',
  },
  H2: {
    as: 'h2',
    size: '2xl',
    textTransform: 'capitalize',
  },
  H3: {
    as: 'h3',
    size: 'xl',
    textTransform: 'capitalize',
  },
  H4: {
    as: 'h4',
    size: 'lg',
    textTransform: 'uppercase',
  },
  H5: {
    as: 'h5',
    size: 'md',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    mb: 2,
    textTransform: 'capitalize',
  },
  H6: {
    as: 'h6',
    size: 'sm',
    textTransform: 'uppercase',
  },
  Anchor: {
    role: 'group',
    cursor: 'pointer',
    position: 'relative',
    pr: 6,
    onClick: async (e: React.MouseEvent<HTMLHeadingElement>) => {
      await copyToClipboard(
        `${window.location.href}#${e.currentTarget.id}`,
        'Link Coppied'
      )
    },
    _after: {
      content: '"#"',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      h: 'full',
      fontSize: 'xl',
      right: 0,
      opacity: 0,
      trasition: CSSTransition.EaseIn200,
    },
    _hover: {
      _after: {
        opacity: 0.8,
      },
    },
  },
}

export { headingRecipes }
