import * as yup from 'yup'
import { FormConfig } from '../types/FormConfig'

/** Create a yup validation object from a FormConfig. */
const parseValidationSchema = <D>(
  config: FormConfig<D>
): yup.ObjectSchema<D> => {
  const schemaShape: Record<keyof D, yup.AnySchema> = Object.fromEntries(
    config.fields.map((field): [keyof D, yup.AnySchema] => [
      field.id as keyof D,
      field.schema,
    ])
  ) as Record<keyof D, yup.AnySchema>
  return yup.object().shape(schemaShape) as unknown as yup.ObjectSchema<D>
}

export { parseValidationSchema }
