import { Faq } from '@/api/gql/graphql'
import FaqItem from './FaqItem'

interface FaqsProps {
	faqs: Faq[]
}

const Faqs: React.FC<FaqsProps> = ({ faqs = [] }) => {
	return (
		<>
			<h1 className='w-full mb-12 text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-white border-b-4 border-white lg:leading-[5rem] pb-3 '>
				Faqs
			</h1>
			<ol className='w-full text-xl text-white flex flex-col justify-center pl-12 pr-10 gap-12 h-full'>
				{faqs.map((faq) => (
					<FaqItem key={faq?._id} item={faq} />
				))}
			</ol>
		</>
	)
}

export default Faqs
