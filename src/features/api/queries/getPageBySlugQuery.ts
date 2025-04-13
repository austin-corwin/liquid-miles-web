import { pageFragment } from './fragments/pageFragment'

export const getPageBySlugQuery = /* GraphQL */ `
	${pageFragment}
	query GetPageBySlug($slug: String!) {
		pageCollection(where: { slug: $slug }, limit: 1) {
			items {
				...PageFragment
			}
		}
	}
`
