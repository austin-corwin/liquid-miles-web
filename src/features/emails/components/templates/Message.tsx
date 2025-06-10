import { Container, Preview, Section, Text } from '@react-email/components'
import React from 'react'
import { EmailMessage } from '../../types/EmailMessage'
import EmailLayout from '../partials/EmailLayout'

/** Email template for sending messages from one user to another e.g. contact form submissions */
const Message: React.FC<EmailMessage> = ({ title, recipientName, message }) => {
  return (
    <EmailLayout title={title}>
      <Preview>{recipientName} sent you a message</Preview>
      <Container className='max-w-screen-sm p-4'>
        <Text className='text-xl font-sans'>
          <strong>{recipientName}</strong> sent you a message!
        </Text>
        <Section className='py-2 px-6 rounded-md bg-gray-100'>
          <Text className='italics text-gray-800 text-lg'>{message}</Text>
        </Section>
        <Section className='py-2 px-6 rounded-md'>
          <Text className='font-medium font-sans text-gray-600'>
            <u>Reply</u> to this email to keep the conversation going.
          </Text>
        </Section>
      </Container>
    </EmailLayout>
  )
}

/** Preview Component with test data */
const SampleMessage: React.FC = () => (
  <Message
    title='Sample Email Message'
    recipientName='Johnny'
    message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita maxime repudiandae praesentium culpa repellat magni modi nobis quisquam quo.'
  />
)

export { Message }
export default SampleMessage
