'use server'
import { ContactFormEntry } from '@/api/gql/graphql'
import { contentfulClient } from '@/features/api/admin/contentfulClient'
import { ApiResponse } from '@/features/api/types'

interface ConfentfulError {
  status: number
  statusText: string
  message: string
  request: unknown
  details: { errors: Record<string, string> }
}

const createContactEntry = async (
  formData: Partial<ContactFormEntry>
): Promise<ApiResponse> => {
  console.log('createContactEntry', formData)

  const response: ApiResponse = {
    success: false,
    errors: null,
    data: null,
  }

  try {
    // create a draft entry
    const createRequest = await contentfulClient.entry.create(
      { contentTypeId: 'contactFormEntry' },
      {
        fields: {
          title: { 'en-US': formData?.title },
          channel: { 'en-US': formData?.channel },
          name: { 'en-US': formData?.name },
          email: { 'en-US': formData?.email },
          message: { 'en-US': formData?.message },
        },
      }
    )
    // if successful, publish the draft
    if (createRequest) {
      // console.log('Draft Entry created')
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
      // console.log('Entry Published: ', publishedEntry)
    }
  } catch (error) {
    console.error('Error creating form entry', error)
    const errorObject = error as Error
    const contentfulError: ConfentfulError = JSON.parse(errorObject?.message)
    response.errors = contentfulError
  } finally {
    return response
  }
}
export { createContactEntry }
