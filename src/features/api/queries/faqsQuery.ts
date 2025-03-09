export const faqsQuery = /* GraphQL */ `
	query Faqs {
		faqCollection(limit: 50) {
			items {
				_id
				title
				content {
					json
					__typename
				}
			}
		}
	}
`
