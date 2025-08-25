export const pageFragment = /* GraphQL */ `
	fragment PageFragment on Page {
		__typename
		_id
		title
		slug
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
`
