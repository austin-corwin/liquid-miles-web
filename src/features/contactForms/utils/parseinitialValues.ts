import { FormConfig } from '../types/FormConfig'

/** Create a Formik initiaValues object from fields within a FormConfig. */
const parseinitialValues = <V>(fields: FormConfig<V>['fields']): V => {
  const schemaShape: Record<keyof V, string | number> = Object.fromEntries(
    fields.map((field): [keyof V, string | number] => [
      field.id as keyof V,
      field?.initialValue,
    ])
  ) as Record<keyof V, string | number>
  return schemaShape as V
}

export { parseinitialValues }
