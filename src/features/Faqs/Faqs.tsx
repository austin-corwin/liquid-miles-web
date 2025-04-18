import { Faq } from '@/api/gql/graphql'
import { Divider } from '@chakra-ui/react'
import { PageHeader } from '../Pages/components/PageHeader'
import { PageLayout } from '../Pages/components/PageLayout'
import FaqItem from './FaqItem'

interface FaqsProps {
  faqs: Faq[]
}

const Faqs: React.FC<FaqsProps> = ({ faqs = [] }) => {
  return (
    <PageLayout bg='secondary'>
      <PageHeader title='FAQs' color='white'>
        <Divider borderTopColor='white' borderTopWidth={2} opacity={1} />
      </PageHeader>
      <ol className='w-full text-xl text-white flex flex-col justify-center pl-12 pr-10 gap-12 h-full'>
        {faqs.map((faq) => (
          <FaqItem key={faq?._id} item={faq} />
        ))}
      </ol>
    </PageLayout>
  )
}

export default Faqs
