export const getUserByClerkIdQuery = /* GraphQL */ `
  query GetUserByClerkId($clerkId: String) {
    userCollection(limit: 1, where: { clerkId: $clerkId }) {
      items {
        _id
        email
        role
        clerkId
      }
    }
  }
`
