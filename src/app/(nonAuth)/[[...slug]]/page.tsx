import { PageCollection } from '@/api/gql/graphql'
import Wave from '@/components/Wave'
import { fetchGraphQL } from '@/features/api/api'
import { getPageBySlugQuery } from '@/features/api/queries'

import { Content, Markdown } from '@/components/atoms/Markdown'
import FaqItem from '@/features/Faqs/FaqItem'
import Home from '@/features/Home/Home'
import { parsePageTitle } from '@/features/seo/utils'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
	params?: Promise<{ slug: string[] }>
}

// Catch-all page generation using ISR
export const dynamicParams = true // try to build a page before 404ing if it is not in build cache
export const revalidate = 3600 // 1 hour cache lifetime

const getPagebySlug = async (slug: string = 'home') => {
	const { data } = await fetchGraphQL<PageCollection>(getPageBySlugQuery, {
		slug,
	})
	return data?.items?.shift()
}

// generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const requestParams = await params
	const slug = requestParams?.slug?.join('/')
	const page = await getPagebySlug(slug)
	if (!page) {
		// Handle 404 metadata here since Next does not yet support it in not-found.tsx
		return {
			title: parsePageTitle('404'),
			description: 'Unable to find the page you were looking for',
			robots: 'noindex,nofollow',
		}
	}

	const metaData: Metadata = {
		title: parsePageTitle(page?.title),
		description: documentToPlainTextString(page?.subtitle?.json),
	}

	return metaData
}

// control build-time page generation
export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
	return [
		{
			slug: ['home'],
		},
	]
}

export default async function Page({ params }: Props) {
	const requestParams = await params
	const slug = requestParams?.slug?.join('/')
	const page = await getPagebySlug(slug)
	const faqs = page?.faqsCollection?.items
	if (!page) notFound()

	return page?.slug === 'home' ? (
		<Home />
	) : (
		<div className='flex flex-col w-full gap-16'>
			<header className='px-6 py-16 bg-secondary'>
				<div className='flex flex-col gap-8 mx-auto container'>
					<h1 className='w-full mb-12 text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-white border-b-4 border-white lg:leading-[5rem] pb-3 container'>
						{page?.title}
					</h1>
					{page?.subtitle && (
						<h2 className='text-2xl'>
							<Markdown content={page.subtitle as Content} />
						</h2>
					)}
				</div>
			</header>
			<div className='container mx-auto text-lg'>
				{page?.content?.json && (
					<Markdown content={page?.content as Content} />
				)}
			</div>
			{faqs?.length > 0 && (
				<section className='p-6'>
					<div className='flex flex-col container mx-auto'>
						<h2 className='text-3xl text-secondary font-bold pb-4'>
							FAQs
						</h2>
						<ol className='w-full text-xl text-secondary flex flex-col justify-center pl-12 pr-10 gap-12 h-full'>
							{faqs.map((faq) => (
								<FaqItem key={faq?._id} item={faq} />
							))}
						</ol>
					</div>
				</section>
			)}
			<Wave fill='#ffc800' />
		</div>
	)
}
