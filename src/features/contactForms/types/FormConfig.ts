import * as yup from 'yup'
import { FormControlsProps } from '../components/partials/FormControls'
import { RadioOption } from '../components/fields/RadioField'
import { TextFieldProps } from '../components/fields'

interface FormFieldBase {
  id: string
  label?: string
  isRequired?: boolean
  helperText?: React.ReactNode
  inactive?: boolean
  initialValue: string | number
  schema: yup.AnySchema
  labelColor?: string
  helperTextColor?: string
}

export type FormField =
  | (FormFieldBase & {
      fieldType: TextFieldProps['fieldType']
      options?: never
    })
  | (FormFieldBase & {
      fieldType: 'radio'
      options: RadioOption[]
    })

export interface FormConfig<D> {
  id: string
  fields: FormField[]
  formControlsProps?: FormControlsProps
  onSubmit: (values: D) => Promise<boolean>
  successTitle?: string
  successMessage: (data: D) => React.ReactNode
  /** Runs after a successful submit and after the success toast is shown */
  onSuccess?: (values: D) => void | Promise<void>
}
