import { Container, Preview, Section, Text } from '@react-email/components'
import React from 'react'
import { EmailMessage } from '../../types/EmailMessage'
import EmailLayout from '../partials/EmailLayout'

const Message: React.FC<EmailMessage> = ({
  title,
  recipientName = 'Somebody',
  message = 'Lorem ipsum dolor sit amet...',
}) => {
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

export default Message
