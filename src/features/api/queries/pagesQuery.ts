export const pagesQuery = /* GraphQL */ `
	query pageCollectionQuery {
		pageCollection {
			items {
				sys {
					id
				}
				# add the fields you want to query
			}
		}
	}
`
