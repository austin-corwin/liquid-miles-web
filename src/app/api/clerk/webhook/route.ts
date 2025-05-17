import { UserRole } from '@/features/users/types/UserRole'
import { createUser } from '@/features/users/utils/createUser'
import { UserJSON } from '@clerk/nextjs/server'
import { verifyWebhook, WebhookEventType } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'

/** Handle webhooks sent by Clerk
 *  Requires CLERK_WEBHOOK_SIGNING_SECRET for validation
 */
export async function POST(req: NextRequest) {
  try {
    const webhook = await verifyWebhook(req)
    const eventType: WebhookEventType = webhook.type

    switch (eventType) {
      case 'user.created':
        console.log(`Received create user Webhook`)
        const payload: UserJSON = webhook.data as UserJSON
        const { id, primary_email_address_id, email_addresses } = payload
        const email = email_addresses.find(
          (address) => address.id === primary_email_address_id
        )?.email_address

        const createUserRequest = await createUser(id, UserRole.Racer, email)
        if (!createUserRequest.success) {
          throw new Error(
            `Error creating user via Clerk webhook. \n${JSON.stringify(createUserRequest, null, 2)}`
          )
        } else console.log('Created User via Clerk Webhook', createUserRequest)
        break
      default:
        console.warn('This event is not supported.')
        break
    }

    return new Response('Webhook processed', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}
