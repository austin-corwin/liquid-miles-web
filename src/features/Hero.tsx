import Wave from '@/components/Wave'
import { Button, Icon } from '@chakra-ui/react'
import { HiArrowRight } from 'react-icons/hi2'

const Hero = () => {
  return (
    <section
      className={`w-full flex justify-center items-center relative h-[500px] md:h-[650px] lg:h-[795px] xl:h-[calc(100vh-4rem)]`}
      style={{
        background: `url("../../images/beer-pool.JPG") center bottom / cover no-repeat`,
      }}
    >
      <div className='absolute inset-0 bg-black/25 pointer-events-none'></div>
      <div className='flex justify-center items-center relative z-50'>
        <div className='flex flex-col justify-center items-center pb-24'>
          <div>
            <h1 className='text-white pb-0 font-primary font-extrabold text-[2.5rem] p-4 md:p-0 text-center lg:text-[6rem] lg:leading-none lg:mb-4'>
              Welcome to Liquid Miles
            </h1>
            <p className='text-white font-primary font-extrabold text-xl p-4 md:p-0 text-center lg:text-3xl lg:leading-none lg:mb-8'>
              9/27/2025
            </p>
          </div>

          {/* <Button
            variant='solid'
            colorScheme='teal'
            className='flex items-center gap-2 mt-4'
            as='a'
            href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MTh1cWhvZ2puY2xoMThtc3ZhZ2w2NTRlOGkgbGlxdWlkbWlsZXNyYWNlQG0&tmsrc=liquidmilesrace%40gmail.com'
          >
            Add to My Calendar
            <Icon className='flex items-center text-2xl' boxSize={4}>
              <HiCalendarDays />
            </Icon>
          </Button> */}
          <Button
            variant='solid'
            colorScheme='teal'
            className='flex items-center gap-2 mt-4 z-50 relative'
            as='a'
            href='/tickets'
          >
            Buy Tickets
            <Icon className='flex items-center text-2xl' boxSize={4}>
              <HiArrowRight />
            </Icon>
          </Button>
        </div>
      </div>
      <div className='absolute -bottom-4 lg:-bottom-8 left-0 right-0 z-10'>
        <Wave fill='#1C606D' />
      </div>
    </section>
  )
}

export default Hero
