import * as yup from 'yup'
import { TextFieldProps } from '../components/fields'
import { FormControlsProps } from '../components/partials/FormControls'

interface FormField extends TextFieldProps {
  inactive?: boolean
  schema?: yup.AnySchema
  initialValue?: string | number
}

export interface FormConfig<D> {
  id: string
  successMessage: (data: D) => React.ReactNode
  fields: FormField[]
  validationSchema?: yup.ObjectSchema<D>
  formControlsProps?: FormControlsProps
}
