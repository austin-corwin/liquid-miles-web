import { LinkProps } from '@chakra-ui/react'

interface EmailMessage {
  title?: string
  recipientName?: string
  message?: string
  cta?: LinkProps
}

export type { EmailMessage }
