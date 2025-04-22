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
import { textareaConfig } from './components/textareaConfig'

const componentsConfig: Record<string, ComponentStyleConfig> = {
  Accordion: accordionConfig,
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
  Textarea: textareaConfig,
}

export { componentsConfig }
