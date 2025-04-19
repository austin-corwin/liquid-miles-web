import { type ComponentStyleConfig } from '@chakra-ui/react'
import {
  accordionConfig,
  badgeConfig,
  buttonConfig,
  cardConfig,
  checkBoxConfig,
  formLabelConfig,
  headingConfig,
  inputConfig,
  linkConfig,
  radioConfig,
  selectConfig,
  skeletonConfig,
} from './components'

const componentsConfig: Record<string, ComponentStyleConfig> = {
  Accordion: accordionConfig,
  Badge: badgeConfig,
  Button: buttonConfig,
  Card: cardConfig,
  Checkbox: checkBoxConfig,
  FormLabel: formLabelConfig,
  Heading: headingConfig,
  Input: inputConfig,
  Link: linkConfig,
  Radio: radioConfig,
  Select: selectConfig,
  Skeleton: skeletonConfig,
}

export { componentsConfig }
