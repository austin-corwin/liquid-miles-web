import { Divider } from '@chakra-ui/react'
import { PageHeader } from './Pages/components/PageHeader'
import { PageLayout } from './Pages/components/PageLayout'

const Contact = () => {
  return (
    <PageLayout bg='secondary'>
      <PageHeader title='Contact' color='white'>
        <Divider borderTopColor='white' borderTopWidth={2} opacity={1} />
      </PageHeader>
      <p className='text-white font-primary w-full'>
        Contact us at{' '}
        <a className='underline' href='mailto:liquidmilesrace@gmail.com'>
          liquidmilesrace@gmail.com
        </a>
      </p>
    </PageLayout>
  )
}

export default Contact
