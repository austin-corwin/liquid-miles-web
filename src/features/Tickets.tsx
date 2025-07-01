import Link from 'next/link'
import { PageHeader } from './Pages/components/PageHeader'
import { PageLayout } from './Pages/components/PageLayout'

const Tickets = () => {
  return (
    <PageLayout>
      <PageHeader title='Tickets' color='white' />
      <Link href='#' className='text-white'>
        Buy tix
      </Link>
    </PageLayout>
  )
}

export default Tickets
