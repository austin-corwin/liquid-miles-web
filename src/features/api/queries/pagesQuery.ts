import { pageFragment } from './fragments/pageFragment'

export const pagesQuery = /* GraphQL */ `
	${pageFragment}
	query pageCollectionQuery {
		pageCollection {
			items {
				...PageFragment
			}
		}
	}
`
