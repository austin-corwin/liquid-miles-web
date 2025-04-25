# Contact Forms

> Render forms that users can fill and submit without authentication.

Form state management and validation using [Formik](https://formik.org/) and [yup](https://github.com/jquense/yup)

## Usage

Create a FormConfig and pass it to the RenderForm component.

Basic Example:

```typescript
// ./components/SomeComponent.tsx
interface MyFormValues {
  name: string
  email: string
}
const formConfig: FormConfig<MyFormValues> = {
	id: 'my-form',
	fields: [
		{
			id: 'name',
			label: 'Name',
			fieldType: 'text',
			isRequired: true,
			helperText: 'What should we call you?',
			schema: yup.string().min(2, 'Too short').required(),
			initialValue: '',
		},
		// ... more fields
	],
	successMessage: (values: MyFormValues) => `Welcome, ${name}!`,
	onSubmit: async (values: MyFormValues) => {
		console.log('My Form was Submitted', values)
		// ... do something with the data
	},
}
export const SomeComponent: FC = () => <RenderForm formConfig={formConfig} />

```
