const PickYourPint = () => {
  return (
    // Pick your pace instead with 3 cards (slow, chuggin, bombin)
    <div className='w-full bg-white flex flex-col items-center py-12'>
      <h3 className='text-secondary font-primary uppercase font-extrabold text-[4rem]'>
        Pick Your Pint
      </h3>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='w-full p-4 h-80 border-2 rounded-xl border-secondary'>
          <p className='uppercase font-primary text-secondary font-semibold text-2xl'>
            Full Pint
          </p>
          A test card here
        </div>
        <div className='w-full p-4 h-80 border-2 rounded-xl border-secondary'>
          <p className='uppercase font-primary text-secondary font-semibold text-2xl'>
            Half Pint
          </p>
          A test card here
        </div>
      </div>
    </div>
  );
};

export default PickYourPint;
