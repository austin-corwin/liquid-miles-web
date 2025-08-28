// import { Card } from '@/components/molecules/Card'
import { StandardCard } from '@/components/molecules/StandardCard'
import Wave from '@/components/Wave'
import getStripe from '@/utils/getStripe'
import { Button, Heading, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import { HiArrowRight } from 'react-icons/hi2'

import fullPint from '../../../public/images/fullpint.png'
import halfPint from '../../../public/images/halfpint.png'

const Tickets = () => {
  const stripePromise = getStripe()
  const handleCheckout = async (priceId: string) => {
    if (!priceId) {
      throw 'Missing priceId'
    } else {
      const stripe = await stripePromise
      const response = await fetch(
        `/api/checkout?priceId=${encodeURIComponent(priceId)}`,
        { method: 'GET' }
      )
      const data = await response.json()
      console.log('session is', data)
      if (data && data.sessionId) {
        console.log('redirect to checkout', data)
        await stripe.redirectToCheckout({ sessionId: data.sessionId })
      }
    }
  }

  return (
    <div className='relative'>
      <div className='flex w-full flex-col min-h-screen gap-4 bg-tertiary pt-8 px-4 lg:px-8'>
        <h1 className='w-full text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-secondary border-b-4 border-secondary lg:leading-[5rem] pb-3'>
          Tickets
        </h1>
        <div className='relative bg-tertiary pb-48'>
          <div className='w-full bg-tertiary flex flex-col items-center z-10 pb-48'>
            <div className='lg:h-[43rem] h-full flex p-4 flex-col items-center lg:flex-row gap-2 lg:gap-16 mt-8'>
              {/* <div className='flex flex-col gap-4 w-full p-4 h-80 border-2 rounded-xl border-secondary'>
          <h4 className='uppercase font-primary text-secondary font-semibold text-2xl'>
            Full Pint
          </h4>
          <div>A test card here</div>
        </div> */}

              <StandardCard
                header={
                  <div className='flex flex-col items-center'>
                    <p className='text-white  lg:text-2xl font-bold'>
                      Half Pint
                    </p>
                    <div className='w-32 h-32 lg:w-60 lg:h-60 relative'>
                      <Image fill src={halfPint} alt='Full pint' />
                    </div>
                  </div>
                }
                subheader='5 Beers - 5 Miles'
                body={`For those of you who aren't quite prepared enough to do the full pint, we've come up with a non-competitive alternative so that you can still participate and get a t-shirt. You'll be expected to do 5 1-mile laps and drink 5 crispy boys in under 5 hours. Since this is non-competitive, feel free to go at your own pace. Think of it like a Sunday stroll, but with beer.`}
                footer={
                  <Button
                    onClick={() =>
                      handleCheckout(process.env.NEXT_PUBLIC_HALFPINT)
                    }
                    colorScheme='teal'
                    className='flex items-center gap-'
                  >
                    Buy Tickets
                    <Icon className='flex items-center text-2xl' boxSize={4}>
                      <HiArrowRight />
                    </Icon>
                  </Button>
                }
                variant='pintCard'
              />
              <Heading className='h-full text-secondary flex items-center'>
                or
              </Heading>
              <StandardCard
                header={
                  <div className='flex flex-col items-center'>
                    <p className='text-white font-bold'>Full Pint</p>
                    <div className='w-32 h-32 lg:w-60 lg:h-60 relative'>
                      <Image fill src={fullPint} alt='Full pint' />
                    </div>
                  </div>
                }
                subheader='10 Miles - 10 Beers'
                body={`The big cheese. Are you ready for it? We are. You'll be running a total of 10 1-mile laps around downtown Fort Collins, CO and consuming consuming 10 crispy boys in the process. All of this must be completed within 10 hours or you will not rank on the leaderboards or potentially be crowned King or Queen for this years race. Hope you've been training.`}
                footer={
                  <Button
                    onClick={() =>
                      handleCheckout(process.env.NEXT_PUBLIC_FULLPINT)
                    }
                    colorScheme='teal'
                    className='flex items-center gap-2'
                  >
                    Buy Tickets
                    <Icon className='flex items-center text-2xl' boxSize={4}>
                      <HiArrowRight />
                    </Icon>
                  </Button>
                }
                variant='pintCard'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='z-0 absolute bottom-0 left-0 right-0'>
        <Wave fill='#1C606D' />
      </div>
    </div>
  )
}

export default Tickets
