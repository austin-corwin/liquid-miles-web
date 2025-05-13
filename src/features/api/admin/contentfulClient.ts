import { createClient } from 'contentful-management'

/** Contentful REST API client for content CRUD
 * https://www.contentful.com/developers/docs/references/content-management-api
 */
const contentfulClient = createClient(
  {
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  },
  {
    type: 'plain',
    defaults: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environmentId: process.env.CONTENTFUL_ENVIRONMENT,
    },
  }
)

export { contentfulClient }
