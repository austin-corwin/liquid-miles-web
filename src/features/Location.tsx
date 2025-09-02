import BlobMask from '@/components/BlobMask'

const Location = () => {
  return (
    <div className='bg-white w-full flex justify-center py-24 pb-18 lg:py-48 lg:pb-24 p-4'>
      <div className='container w-full flex flex-col items-center lg:flex-row gap-12'>
        <div className='w-full max-w-[300px] lg:max-w-[500px]'>
          <BlobMask
            path='/images/neighborhoodRoute.jpg'
            id='neighborhoodRoute'
          />
        </div>
        <section className='gap-4 text-center lg:text-left flex flex-col text-secondary max-w-[700px] justify-center'>
          <div>
            <p className='uppercase font-bold lg:pb-2'>Location</p>
            <h2 className='text-secondary font-extrabold text-[1.5rem] lg:text-[4rem] font-primary leading-none'>
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
  )
}

export default Location
