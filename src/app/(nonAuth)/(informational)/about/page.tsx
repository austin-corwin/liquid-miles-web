import { Faq, FaqCollection } from '@/api/gql/graphql'
import About from '@/features/About/About'
import { fetchGraphQL } from '@/features/api/api'
import { faqsQuery } from '@/features/api/queries/faqsQuery'

export default async function AboutPage() {
	const { data } = await fetchGraphQL<FaqCollection>(faqsQuery)

	return <About apiFaqs={data.items as Faq[]} />
}
