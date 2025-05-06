'use server'
import { Resend } from 'resend'
import Message from '../components/templates/Message'
import { EmailMessage } from '../types/EmailMessage'
import { EmailTemplates } from '../types/EmailTemplates'

export interface SendEmailProps {
  to: string[]
  template: EmailTemplates
  messageData: EmailMessage
  subject: string
  preview?: string
  from?: string
  cc?: string[]
  bcc?: string[]
  replyTo?: string
  text?: string
}

const token =
  process.env.RESEND_API_TOKEN || 're_JM3aUZhp_CKSxa4uZnpc89QMStmBU3cta'
const resend = new Resend(token)

const sendEmail = async (
  sendProps: SendEmailProps
): Promise<{ id: string }> => {
  try {
    const { to, subject, messageData } = sendProps

    const { data, error } = await resend.emails.send({
      from: 'no-reply@ericnowels.me',
      to,
      subject,
      react: Message(messageData) as React.ReactElement,
    })
    console.log({ data, error })

    if (error) {
      throw new Error('failed to send email')
      // return Response.json({ error }, { status: 500 })
    }
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

export { sendEmail }
