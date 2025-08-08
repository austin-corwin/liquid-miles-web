import Wave from '@/components/Wave'

const Hero = () => {
  return (
    <section
      className={`w-full flex justify-center items-center relative h-[500px] md:h-[650px] lg:h-[795px] xl:h-[calc(100vh-4rem)]`}
      style={{
        background: `url("../../images/bg-beers.png") center bottom / cover no-repeat`,
      }}
    >
      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center pb-24'>
          <h1 className='text-white font-primary font-extrabold text-lg lg:text-hero lg:leading-none lg:mb-8'>
            Welcome to Liquid Miles
          </h1>
          <a
            href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M21udWRrY3JnaDFwazRmMDhybzFpYjFia3IgbGlxdWlkbWlsZXNyYWNlQG0&tmsrc=liquidmilesrace%40gmail.com'
            className='p-4 z-10 rounded-lg border-primary border-2 w-fit font-extrabold font-primary text-white duration-300 transition-all hover:shadow-btn-fill'
          >
            Add to My Calendar
          </a>
        </div>
      </div>
      <div className='absolute -bottom-4 lg:-bottom-8 left-0 right-0'>
        <Wave fill='#1C606D' />
      </div>
    </section>
  )
}

export default Hero
