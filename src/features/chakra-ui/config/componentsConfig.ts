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
  radioConfig,
  selectConfig,
  skeletonConfig,
} from './components'
import { alertConfig } from './components/alertConfig'

const componentsConfig: Record<string, ComponentStyleConfig> = {
  Accordion: accordionConfig,
  Alert: alertConfig,
  Badge: badgeConfig,
  Button: buttonConfig,
  Card: cardConfig,
  Checkbox: checkBoxConfig,
  FormLabel: formLabelConfig,
  Heading: headingConfig,
  Input: inputConfig,
  Radio: radioConfig,
  Select: selectConfig,
  Skeleton: skeletonConfig,
}

export { componentsConfig }
