import * as yup from 'yup'
import { TextFieldProps } from '../components/fields'
import { FormControlsProps } from '../components/partials/FormControls'

interface FormField extends TextFieldProps {
  inactive?: boolean
  initialValue: string | number
  schema: yup.AnySchema
}

export interface FormConfig<D> {
  id: string
  fields: FormField[]
  formControlsProps?: FormControlsProps
  onSubmit: (values: D) => Promise<void>
  successMessage: (data: D) => React.ReactNode
}
