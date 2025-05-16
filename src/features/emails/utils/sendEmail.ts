'use server'
import { CreateEmailResponseSuccess, Resend } from 'resend'
import { Message } from '../components/templates/Message'
import { Notice } from '../components/templates/Notice'
import { EmailMessage } from '../types/EmailMessage'
import { EmailResponse } from '../types/EmailResponse'
import { EmailTemplates } from '../types/EmailTemplates'

export interface SendEmailProps {
  to: string[]
  template: EmailTemplates
  messageData: EmailMessage
  subject: string
  preview?: string
  /* handle or inbox name only, wihtout the domain. e.g. "no-reply" */
  from?: string
  cc?: string[]
  bcc?: string[]
  replyTo?: string
  text?: string
}

// TEST TOKEN REPLACE ME WITH PRODUCTION KEY ASAP. WILL BE DEACTIVATED SOON
const token =
  process.env.RESEND_API_TOKEN || 're_JM3aUZhp_CKSxa4uZnpc89QMStmBU3cta'
const verifiedDomain = process.env.RESEND_DOMAIN || 'ericnowels.me'
const resend = new Resend(token)

/** Server action for sending an email using the Resend API */
const sendEmail = async (
  sendProps: SendEmailProps
): Promise<EmailResponse<CreateEmailResponseSuccess>> => {
  const templates: Record<EmailTemplates, React.FC<EmailMessage>> = {
    [EmailTemplates.Message]: Message,
    [EmailTemplates.Notice]: Notice,
  }
  const response: EmailResponse<CreateEmailResponseSuccess> = {
    errors: null,
    success: false,
    data: null,
  }
  try {
    const { to, cc, subject, messageData, template } = sendProps
    const from = `${sendProps?.from || 'noreply'}@${verifiedDomain}`
    const { data, error } = await resend.emails.send({
      from,
      cc,
      replyTo: [sendProps.replyTo || from],
      to,
      subject,
      react: templates[template](messageData) as React.ReactElement,
    })
    response.data = data
    if (error) {
      response.errors = error
      throw new Error(`Failed to send email. ${JSON.stringify(error, null, 2)}`)
    } else {
      response.success = true
    }
  } catch (error) {
    console.error(error)
  } finally {
    return response
  }
}

export { sendEmail }
