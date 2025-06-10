'use server'

import { contentfulClient } from '@/features/api/admin/contentfulClient'
import { ApiResponse, ConfentfulError } from '@/features/api/types'
import { UserRole } from '../types/UserRole'

/** Create a contactFormEntry in Contentful and publish it immediately */
const createUser = async (
  clerkId: string,
  role: UserRole = UserRole.Racer,
  email: string
): Promise<ApiResponse> => {
  console.log('createUser', clerkId)

  const response: ApiResponse = {
    success: false,
    errors: null,
    data: null,
  }

  try {
    const createRequest = await contentfulClient.entry.create(
      { contentTypeId: 'user' },
      {
        fields: {
          email: { 'en-US': email },
          clerkId: { 'en-US': clerkId },
          role: { 'en-US': role },
        },
      }
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
    console.error('Error creating user', error)
    const errorObject = error as Error
    const contentfulError: ConfentfulError = JSON.parse(errorObject?.message)
    response.errors = contentfulError
  } finally {
    return response
  }
}
export { createUser }
