import BlobMask from '@/components/BlobMask'

const Location = () => {
  return (
    <div className='bg-white w-full flex justify-center py-48 pb-24'>
      <div className='container w-full flex gap-12'>
        <div className='w-full max-w-[500px]'>
          <BlobMask
            path='../../images/neighborhoodRoute.jpg'
            id='neighborhoodRoute'
          />
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
  )
}

export default Location
