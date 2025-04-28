import { createClient } from 'contentful-management'

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
