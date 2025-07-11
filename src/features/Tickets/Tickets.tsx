import { Card } from '@/components/molecules/Card'
import getStripe from '@/utils/getStripe'

const Tickets = () => {
  const stripePromise = getStripe()
  const handleCheckout = async () => {
    const stripe = await stripePromise
    const response = await fetch('/api/checkout', {
      method: 'GET',
    })
    const data = await response.json()
    console.log('session is', data)
    if (data && data.sessionId) {
      console.log('redirect to checkout', data)
      await stripe.redirectToCheckout({ sessionId: data.sessionId })
    }
  }

  return (
    <div className='flex w-full flex-col min-h-screen gap-4'>
      <h1 className='w-full text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-white border-b-4 border-white lg:leading-[5rem] pb-3'>
        Tickets
      </h1>
      <Card
        header='Full Pint'
        body=' Body here for more information about the full pint, including
                  information of what the ticket includes - t shirt. Probably also
                  include a cool illustration or some custom image for each of the
                  pints'
        onClick={{ label: 'Buy Full Pint Tix', action: handleCheckout }}
      />
      <Card
        header='Half Pint'
        body=' Body here for more information about the half pint, including
                  information of what the ticket includes - t shirt. Probably also
                  include a cool illustration or some custom image for each of the
                  pints'
        onClick={{ label: 'Buy Half Pint Tix', action: handleCheckout }}
      />
    </div>
  )
}

export default Tickets
