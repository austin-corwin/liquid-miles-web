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
  stepperConfig,
} from './components'
import { alertConfig } from './components/alertConfig'
import { textareaConfig } from './components/textareaConfig'

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
  Link: linkConfig,
  Radio: radioConfig,
  Select: selectConfig,
  Skeleton: skeletonConfig,
  Textarea: textareaConfig,
  Stepper: stepperConfig,
}

export { componentsConfig }
