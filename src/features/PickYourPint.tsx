import { StandardCard } from '@/components/molecules/StandardCard'
import { Button, Heading, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import { HiArrowRight } from 'react-icons/hi2'
import fullPint from '../../public/images/fullpint.png'
import halfPint from '../../public/images/halfpint.png'
import Wave from '@/components/Wave'

const PickYourPint = () => {
  return (
    <div className='relative bg-tertiary pb-48'>
      <div className='w-full bg-tertiary flex flex-col items-center py-12 lg:py-24 z-10 pb-48'>
        <h3 className='text-secondary font-primary uppercase font-extrabold text-[1.5rem] lg:text-[4rem]'>
          Pick Your Pint
        </h3>
        <div className='h-full lg:h-[43rem] flex p-4 flex-col items-stretch lg:flex-row gap-4 lg:gap-16 mt-8'>
          {/* <div className='flex flex-col gap-4 w-full p-4 h-80 border-2 rounded-xl border-secondary'>
          <h4 className='uppercase font-primary text-secondary font-semibold text-2xl'>
            Full Pint
          </h4>
          <div>A test card here</div>
        </div> */}

          <StandardCard
            header={
              <div className='flex flex-col items-center'>
                <p className='text-white  lg:text-[2.5rem] font-bold'>
                  Half Pint
                </p>
                <div className='w-32 h-32 lg:w-60 lg:h-60 relative'>
                  <Image fill src={halfPint} alt='Full pint' />
                </div>
              </div>
            }
            subheader='5 Beers - 5 Miles'
            body={`For those of you who aren't quite prepared enough to do the full pint, we've come up with an alternative so that you can still participate and get a t-shirt. You'll be expected to do 5 1-mile laps and drink 5 crispy boys in under 5 hours. Feel free to go at your own pace.`}
            footer={
              <Button
                as='a'
                href='/tickets'
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
          <div className='flex flex-1 self-stretch items-center justify-center'>
            <Heading className='text-secondary flex items-center'>or</Heading>
          </div>
          <StandardCard
            header={
              <div className='flex flex-col items-center'>
                <p className='text-white font-bold lg:text-[2.5rem]'>
                  Full Pint
                </p>
                <div className='w-32 h-32 lg:w-60 lg:h-60 relative'>
                  <Image fill src={fullPint} alt='Full pint' />
                </div>
              </div>
            }
            subheader='10 Miles - 10 Beers'
            body={`The big cheese. Are you ready for it? We are. You'll be running a total of 10 1-mile laps around Fort Collins, CO and consuming consuming 10 crispy boys in the process. All of this must be completed within 10 hours or you will not rank on the leaderboards or potentially be crowned King or Queen for this years race. Hope you've been training.`}
            footer={
              <Button
                as='a'
                href='/tickets'
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
      <div className='z-0 absolute -top-[5rem] md:-top-[10rem] lg:-top-[15rem] left-0 right-0'>
        <Wave fill='#adcad6' />
      </div>
      <div className='z-0 absolute bottom-0 left-0 right-0'>
        <Wave fill='#1C606D' />
      </div>
    </div>
  )
}

export default PickYourPint
