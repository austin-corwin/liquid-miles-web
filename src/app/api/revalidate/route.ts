import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

interface IWebhookPayload {
	metadata?: {
		tags?: string[]
		concepts?: string[]
	}
	fields: Record<'slug', Record<'en-US', string>>
	sys: Record<'contentType', Record<'sys', { id: string }>>
}

/**
 * Webhook handler for revalidating ISR paths
 * - Edit entry: invalidates cache by path and triggers build of page
 * - Create: triggers page build for new content
 *
 * @param request - Contentful webhook entry action
 * @returns - Response data, logged in Contentful > Settings > Webhooks > Revalidate on Publish: Activity Log
 */
export async function POST(request: NextRequest) {
	const requestHeaders = new Headers(request.headers)
	const requestSecret = requestHeaders.get('x-vercel-reval-key')

	// @TODO: Replace once env vars are added to Vercel
	const secret = process.env.CONTENTFUL_REVALIDATE_SECRET || 'for_demo_only'

	if (secret !== requestSecret) {
		return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
	}
	const body: IWebhookPayload = await request.json()
	if (!body?.fields) {
		return NextResponse.json(
			{ message: 'Content not found' },
			{ status: 404 }
		)
	}
	const slug =
		body?.fields.slug['en-US'] === 'home' ? '' : body?.fields.slug['en-US']
	const pathRoot =
		body?.sys.contentType.sys.id === 'page'
			? ''
			: `${body?.sys.contentType.sys.id}/`
	const path = `/${pathRoot}${slug}`

	revalidatePath(path)

	return NextResponse.json({ revalidated: true, now: Date.now(), path })
}
