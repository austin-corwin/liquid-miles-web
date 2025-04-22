import {
  Body,
  BodyProps,
  Head,
  Html,
  Section,
  Tailwind,
} from '@react-email/components'
import React from 'react'
import tailwindConfig from '../../../../../tailwind.config'
import EmailHeader from './EmailHeader'

interface EmailLayoutProps extends BodyProps {
  title?: string
}

const EmailLayout: React.FC<EmailLayoutProps> = ({ children, title }) => {
  const twConfig = tailwindConfig
  return (
    <Html>
      <Head>{title && <title>{title}</title>}</Head>
      <Body style={{ background: '#CCC' }}>
        <Tailwind config={twConfig}>
          <EmailHeader />
          <Section className='w-full max-w-screen-md rounded-b-md bg-white pb-4'>
            {children}
          </Section>
        </Tailwind>
      </Body>
    </Html>
  )
}

export default EmailLayout
