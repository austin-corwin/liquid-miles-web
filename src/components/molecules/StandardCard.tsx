import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react'

import React from 'react'

interface StandardCardProps {
  header: React.ReactNode
  subheader?: string
  body: string
  footer: React.ReactNode
  variant: string
}

export const StandardCard: React.FC<StandardCardProps> = ({
  header,
  subheader,
  body,
  footer,
  variant,
}) => {
  return (
    <Card
      variant={variant}
      className='w-full p-4 border-2 rounded-xl border-secondary max-w-[500px] bg-secondary text-white'
    >
      <CardHeader className='w-full flex justify-center'>{header}</CardHeader>
      {/* <Image src={fullPint} alt='Full pint' /> */}
      <p className='text-white w-full flex justify-center font-bold'>
        {subheader}
      </p>
      <CardBody>{body}</CardBody>
      <CardFooter className='flex justify-end'>{footer}</CardFooter>
    </Card>
  )
}
