# Contact Forms

> Render forms that users can fill and submit to Contentful, without authentication.

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
		// Send entry to Contentful
		const entryData: Partial<ContactFormEntry> = {
			name: values?.name,
			// ... rest of fields
		}
		const { success } = await createContactEntry(entryData)
		return success
	},
}
export const SomeComponent: FC = () => <RenderForm formConfig={formConfig} />

```

## Form Submissions

Form submissions are stored in Contentful as a `Contact Form Entry`
