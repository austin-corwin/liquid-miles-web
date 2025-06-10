export const getAllUsersQuery = /* GraphQL */ `
  query GetAllUsers {
    userCollection {
      items {
        _id
        email
        role
        clerkId
      }
    }
  }
`
