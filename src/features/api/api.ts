'use server'

interface ApiResponse<D = unknown> {
	data: D
	success: boolean
	errors?: unknown | null
}

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
		const { data } = await request.json()
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
