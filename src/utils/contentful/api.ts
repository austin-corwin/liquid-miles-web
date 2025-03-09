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
		const data = await request.json()
		if (data) {
			console.log(data)
			response.data = data
			response.success = true
			// return response
		}
	} catch (error: unknown) {
		console.warn('GraphQL API Request failed', error)
		response.errors = error
	} finally {
		return response
	}
}

// function extractPost(fetchResponse: any): any {
//   return fetchResponse?.data?.postCollection?.items?.[0];
// }

// function extractPostEntries(fetchResponse: any): any[] {
//   return fetchResponse?.data?.postCollection?.items;
// }

// export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
//   const entry = await fetchGraphQL(
//     `query {
//       postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
//         items {
//           ${POST_GRAPHQL_FIELDS}
//         }
//       }
//     }`,
//     true,
//   );
//   return extractPost(entry);
// }

// export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
//   const entries = await fetchGraphQL(
//     `query {
//       postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
//         isDraftMode ? "true" : "false"
//       }) {
//         items {
//           ${POST_GRAPHQL_FIELDS}
//         }
//       }
//     }`,
//     isDraftMode,
//   );
//   return extractPostEntries(entries);
// }

// export async function getPostAndMorePosts(
//   slug: string,
//   preview: boolean,
// ): Promise<any> {
//   const entry = await fetchGraphQL(
//     `query {
//       postCollection(where: { slug: "${slug}" }, preview: ${
//         preview ? "true" : "false"
//       }, limit: 1) {
//         items {
//           ${POST_GRAPHQL_FIELDS}
//         }
//       }
//     }`,
//     preview,
//   );
//   const entries = await fetchGraphQL(
//     `query {
//       postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
//         preview ? "true" : "false"
//       }, limit: 2) {
//         items {
//           ${POST_GRAPHQL_FIELDS}
//         }
//       }
//     }`,
//     preview,
//   );
//   return {
//     post: extractPost(entry),
//     morePosts: extractPostEntries(entries),
//   };
// }
