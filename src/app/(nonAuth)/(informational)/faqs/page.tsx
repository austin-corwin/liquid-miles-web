import { FaqCollection } from '@/api/gql/graphql'
import { fetchGraphQL } from '@/features/api/api'
import { faqsQuery } from '@/features/api/queries/faqsQuery'
import Faqs from '@/features/Faqs/Faqs'

export default async function FaqsPage() {
	const { data } = await fetchGraphQL<FaqCollection>(faqsQuery)
	return <Faqs faqs={data?.items} />
}
