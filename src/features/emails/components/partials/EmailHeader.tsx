import {
  Column,
  Container,
  Heading,
  Img,
  Link,
  Row,
} from '@react-email/components'
import React from 'react'

const EmailHeader: React.FC = () => {
  return (
    <Container className='px-4 py-6 bg-yellow-400 rounded-t-md w-full max-w-screen-md'>
      <Row>
        <Column>
          <Img
            alt='Liquid Miles logo'
            height='50'
            src='https://liquid-miles-web.vercel.app/logos/lm-logo.png'
            className='block float-left'
          />
          <Heading className='text-[1.25rem] font-bold font-sans block float-left ml-2 leading-6'>
            <Link
              href='https://liquid-miles-web.vercel.app/'
              target='_blank'
              className='text-black hover:text-yellow-500'
            >
              Liquid Miles
            </Link>
          </Heading>
        </Column>
      </Row>
    </Container>
  )
}

export default EmailHeader
