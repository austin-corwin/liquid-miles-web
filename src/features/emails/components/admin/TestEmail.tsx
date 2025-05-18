'use client'

import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { toastRecipes } from '@/features/chakra-ui/config/recipes/toastRecipes'
import {
  Button,
  Code,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React, { FormEvent } from 'react'
import { EmailTemplates } from '../../types/EmailTemplates'
import { sendEmail, SendEmailProps } from '../../utils/sendEmail'

const testEmailData: Omit<SendEmailProps, 'to'> = {
  subject: 'Liquid Miles Test Email',
  replyTo: 'no-reply@liquidmiles.com',
  messageData: {
    title: 'This is a Test',
    recipientName: 'Firstname',
    message: 'This is a test message sent by the Liquid Miles website admin.',
  },
  template: EmailTemplates.Message,
}

const TestEmail: React.FC = () => {
  const [email, setEmail] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const toast = useToast()
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const sendRequest = await sendEmail({
      ...testEmailData,
      to: [email],
    })
    setIsLoading(false)
    // Keep for debugging
    console.log(sendRequest)
    if (sendRequest?.success) {
      toast({
        ...toastRecipes.success,
        title: 'Message Sent!',
        description: "Check your inbox (and don't forget to look in SPAM)",
      })
    } else {
      toast({
        ...toastRecipes.error,
        title: 'Message Failed to Send',
        description: 'Check the logs for more information.',
      })
    }
  }

  return (
    <VStack
      alignItems='flex-start'
      justifyContent='start'
      w='full'
      bg='gray.100'
      p={6}
      rounded='lg'
    >
      <Heading {...headingRecipes.H4} as='h2' py={2}>
        Send Test Email
      </Heading>

      <VStack
        as='form'
        onSubmit={handleSubmit}
        py={2}
        w='full'
        alignItems='flex-start'
      >
        <InputGroup>
          <InputLeftAddon>To:</InputLeftAddon>
          <Input
            type='email'
            required
            readOnly={isLoading}
            value={email}
            autoComplete='email'
            onChange={({ target }) => setEmail(target?.value)}
          />
        </InputGroup>
        <Button
          type='submit'
          isLoading={isLoading}
          loadingText='Sending'
          w='full'
        >
          Send
        </Button>
        <Text fontWeight='semibold' py={2}>
          Additional Payload Data
        </Text>
        <Code
          p={{ base: 4, md: 6 }}
          bg='gray.200'
          color='gray.800'
          fontFamily='mono'
          rounded='lg'
          overflowX='auto'
          w='full'
          maxW='full'
          whiteSpace='preserve'
        >
          {JSON.stringify(testEmailData, null, 2)}
        </Code>
      </VStack>
    </VStack>
  )
}

export { TestEmail }
