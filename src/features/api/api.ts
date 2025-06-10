'use server'

import { ApiResponse } from './types'

/** Make GraphQL requests to Contentful API */
export const fetchGraphQL = async <D = unknown>(
  query: string,
  variables?: { [key: string]: unknown },
  preview = false
): Promise<ApiResponse<D>> => {
  const response: ApiResponse<D> = {
    data: null as D,
    errors: null,
    success: false,
  }
  if (
    !process.env.CONTENTFUL_ACCESS_TOKEN ||
    !process.env.CONTENTFUL_SPACE_ID
  ) {
    console.error('Contentful Environment variables not found. ')
    response.errors = new Error('Contentful Environment variables not found.')
    return response
  }

  try {
    const request = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${
            preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query, variables }),
        next: { tags: ['posts'] },
      }
    )
    const res = await request.json()
    const { data } = res

    if (!!data) {
      response.data = Object.values(data)?.[0] as D
      response.success = true
    }
  } catch (error: unknown) {
    console.warn('GraphQL API Request failed', error)
    response.errors = error
  } finally {
    return response
  }
}
