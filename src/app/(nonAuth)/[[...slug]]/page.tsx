import { PageCollection } from '@/api/gql/graphql'
import { fetchGraphQL } from '@/features/api/api'
import { getPageBySlugQuery } from '@/features/api/queries'

import FaqItem from '@/features/Faqs/FaqItem'
import Home from '@/features/Home/Home'
import { Content, Markdown } from '@/utils/contentful/markdown'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
	params?: Promise<{ slug: string[] }>
	searchParams?: Promise<unknown>
}

// Catch-all page generation using ISR
export const dynamicParams = true // attempt to build a page if it is not already cached
export const revalidate = false // only rebuild cache on manual revalidations

// generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const requestParams = await params
	const slug = requestParams?.slug?.join('/')
	const { data } = await fetchGraphQL<PageCollection>(getPageBySlugQuery, {
		slug,
	})
	const page = data?.items?.shift()
	if (!page && slug) notFound()

	const plainContent = documentToPlainTextString(page?.subtitle?.json) // -> Hello world!

	const metaData: Metadata = {
		title: page.title,
		description: plainContent || 'Liquid Miles',
	}
	return metaData
}

// control build-time page generation
// returning an empty array will build pages on request, if not already cached
export async function generateStaticParams(): Promise<unknown[]> {
	return []
}

export default async function Page({ params }: Props) {
	const requestParams = await params
	const slug = requestParams?.slug?.join('/')
	if (!slug) return <Home />

	const { data } = await fetchGraphQL<PageCollection>(getPageBySlugQuery, {
		slug,
	})
	const page = data?.items?.shift()
	if (!page) notFound()
	const faqs = page?.faqsCollection?.items

	return (
		<div className='flex flex-col w-full gap-8'>
			<header className='px-6 py-10'>
				<h1 className='w-full mb-12 text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-white border-b-4 border-white lg:leading-[5rem] pb-3 '>
					{page.title}
				</h1>
				{page?.subtitle && (
					<h2 className='text-2xl'>
						<Markdown content={page.subtitle as Content} />
					</h2>
				)}
			</header>
			<div>
				<Markdown content={page.content as Content} />
			</div>
			{faqs?.length > 0 && (
				<section className='bg-gray-200 p-6'>
					<h2>FAQs</h2>
					<ol className='w-full text-xl text-white flex flex-col justify-center pl-12 pr-10 gap-12 h-full'>
						{faqs.map((faq) => (
							<FaqItem key={faq?._id} item={faq} />
						))}
					</ol>
				</section>
			)}
		</div>
	)
}
