'use server'
import { ContactFormEntry } from '@/api/gql/graphql'
import { contentfulClient } from '@/features/api/admin/contentfulClient'
import { ApiResponse } from '@/features/api/types'

const locale = 'en-US'

const toLocalizedField = (value: unknown) => {
  if (value === undefined || value === null || value === '') {
    return undefined
  }
  return { [locale]: value }
}

const parseContentfulError = (error: unknown) => {
  if (!(error instanceof Error)) {
    return { message: 'Unknown Contentful error' }
  }

  try {
    const jsonStart = error.message.indexOf('{')
    if (jsonStart >= 0) {
      return JSON.parse(error.message.slice(jsonStart))
    }
  } catch {
    // fall through to the raw message
  }

  return { message: error.message }
}

/** Create a contactFormEntry in Contentful and publish it immediately */
const createContactEntry = async (
  formData: Partial<ContactFormEntry>
): Promise<ApiResponse> => {
  const response: ApiResponse = {
    success: false,
    errors: null,
    data: null,
  }

  if (!process.env.CONTENTFUL_MANAGEMENT_TOKEN) {
    response.errors = {
      message:
        'Missing CONTENTFUL_MANAGEMENT_TOKEN. Create a Contentful personal access token and add it to .env.local.',
    }
    return response
  }

  try {
    const fields = Object.fromEntries(
      Object.entries({
        title: toLocalizedField(formData?.title),
        channel: toLocalizedField(formData?.channel),
        name: toLocalizedField(formData?.name),
        email: toLocalizedField(formData?.email),
        message: toLocalizedField(formData?.message),
        data: toLocalizedField(formData?.data),
      }).filter(([, value]) => value !== undefined)
    )

    const createRequest = await contentfulClient.entry.create(
      { contentTypeId: 'contactFormEntry' },
      { fields }
    )

    if (createRequest) {
      const entry = await contentfulClient.entry.get({
        entryId: createRequest.sys?.id,
      })
      const publishedEntry = await contentfulClient.entry.publish(
        {
          entryId: entry.sys.id,
        },
        { ...entry }
      )
      if (publishedEntry) {
        response.success = true
        response.data = publishedEntry
      }
    }
  } catch (error) {
    const contentfulError = parseContentfulError(error)
    console.error('Error creating form entry', contentfulError)
    response.errors = contentfulError
  }

  return response
}
export { createContactEntry }
