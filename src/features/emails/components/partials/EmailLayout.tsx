import { Body, BodyProps, Head, Html, Tailwind } from '@react-email/components'
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
      <Body>
        <Tailwind config={twConfig}>
          <EmailHeader />
          {children}
        </Tailwind>
      </Body>
    </Html>
  )
}

export default EmailLayout
