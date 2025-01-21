const Hero = ({}) => {
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
          <button className='p-4 z-10 rounded-lg border-primary border-2 w-fit font-extrabold font-primary text-white duration-300 transition-all hover:shadow-btn-fill'>
            Add to My Calendar
          </button>
        </div>
      </div>
      <div className='absolute -bottom-8 left-0 right-0'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#2C95A9'
            fillOpacity='1'
            d='M0,192L40,186.7C80,181,160,171,240,176C320,181,400,203,480,213.3C560,224,640,224,720,202.7C800,181,880,139,960,144C1040,149,1120,203,1200,218.7C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
