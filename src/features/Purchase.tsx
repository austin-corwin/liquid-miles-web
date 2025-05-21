import { Button } from '@chakra-ui/react'

const Purchase = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex w-full '>
        <h1 className='w-full mb-12 text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-white border-b-4 border-white lg:leading-[5rem] pb-3'>
          Purchase half pint
        </h1>
        <Button as='a' href='#'>
          Buy half pint tix
        </Button>
      </div>
      <div className='flex w-full '>
        <h1 className='w-full mb-12 text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-white border-b-4 border-white lg:leading-[5rem] pb-3'>
          Purchase half pint
        </h1>
        <Button as='a' href='#'>
          Buy half pint tix
        </Button>
      </div>
    </div>
  )
}

export default Purchase
