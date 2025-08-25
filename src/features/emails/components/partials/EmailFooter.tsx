import { Column, Container, Link, Row } from '@react-email/components'
import React from 'react'

const EmailFooter: React.FC = () => {
  return (
    <Container className='px-4 py-6 bg-white rounded-b-md w-full max-w-screen-md'>
      <Row>
        <Column>
          <Link
            href='https://liquid-miles-web.vercel.app/'
            target='_blank'
            className='w-full inline-block mx-auto text-sm text-gray-600 hover:text-black hover:underline text-center '
          >
            liquidmiles.com
          </Link>
        </Column>
      </Row>
    </Container>
  )
}

export default EmailFooter
