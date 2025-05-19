import { User } from '@/api/gql/graphql'
import { UserResource } from '@clerk/types'

interface UserComposite extends User {
  clerk?: UserResource
}

export type { UserComposite }
