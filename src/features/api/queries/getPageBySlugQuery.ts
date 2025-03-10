export const getPageBySlugQuery = /* GraphQL */ `
	query GetPageBySlug($slug: String!) {
		pageCollection(where: { slug: $slug }, limit: 1) {
			items {
				__typename
				_id
				title
				content {
					json
					__typename
				}
				subtitle {
					json
					__typename
				}
				faqsCollection {
					items {
						__typename
						_id
						title
						content {
							json
							__typename
						}
					}
				}
			}
		}
	}
`
