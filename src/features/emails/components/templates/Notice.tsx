import {
  Button,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import React from 'react'
import { EmailMessage } from '../../types/EmailMessage'
import EmailLayout from '../partials/EmailLayout'

/** Email template for sending short and simple messages with an optional CTA */
const Notice: React.FC<EmailMessage> = ({ title, message, cta }) => {
  return (
    <EmailLayout title={title}>
      <Preview>{title}</Preview>
      <Container className='max-w-screen-sm p-4 text-center'>
        <Text className='text-2xl font-sans'>
          <strong>{title}</strong>
        </Text>
        <Section className='py-2 px-6 rounded-md'>
          <Text className='text-lg whitespace-pre-line'>{message}</Text>
        </Section>
        {cta && (
          <Section className='py-2'>
            <Button
              href={cta.href}
              target='_blank'
              className='bg-[#1C606D] text-white px-5 py-3 rounded-md font-semibold no-underline'
            >
              {cta['aria-label'] || cta?.children || 'Open'}
            </Button>
          </Section>
        )}
      </Container>
    </EmailLayout>
  )
}

/** Preview Component with test data */
const SampleNotice: React.FC = () => (
  <Notice
    title='Sample Email Notice'
    recipientName='Johnny'
    message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita maxime repudiandae praesentium culpa repellat magni modi nobis quisquam quo.'
    cta={{
      href: '#',
      'aria-label': 'Call to Action',
    }}
  />
)
export { Notice }
export default SampleNotice
