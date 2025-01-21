const Location = () => {
  return (
    <div className='bg-white w-full flex justify-center py-12 pb-24'>
      <div className='container w-full flex gap-12'>
        <div className='w-full max-w-[500px]'>
          <svg
            id='10015.io'
            viewBox='0 0 480 480'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <defs>
              <clipPath id='blob'>
                <path
                  fill='#474bff'
                  d='M460,280Q447,320,427.5,356.5Q408,393,375,418.5Q342,444,302,459Q262,474,218.5,472Q175,470,139.5,445Q104,420,79,387.5Q54,355,32.5,319Q11,283,10,240Q9,197,31.5,161Q54,125,78.5,91.5Q103,58,139,35.5Q175,13,218,15.5Q261,18,301,27.5Q341,37,374,62.5Q407,88,430.5,122.5Q454,157,463.5,198.5Q473,240,460,280Z'
                />
              </clipPath>
            </defs>
            <image
              x='0'
              y='0'
              width='100%'
              height='100%'
              clipPath='url(#blob)'
              xlinkHref={"../../images/neighborhoodRoute.jpg"}
              preserveAspectRatio='xMidYMid slice'
            ></image>
          </svg>
        </div>
        <section className='gap-4 flex flex-col text-secondary max-w-[700px] justify-center'>
          <div>
            <p className='uppercase font-bold pb-2'>Location</p>
            <h2 className='text-secondary font-extrabold text-[4rem] font-primary leading-none'>
              Fort Collins, CO
            </h2>
          </div>
          <p>
            The race is 10 1-mile laps around Fort Collins, CO. Although we’re
            on the front range and the altitude will be noticeable (if you’re
            not used to it), there won’t be any significant elevation gain on
            the run itself so no need to worry about having to scale mountain
            sides. We’re crazy, but not that crazy….yet.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Location;
