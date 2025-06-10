# Transactional Emails

Send emails to users and admins.

Uses [React Email](https://react.email/docs) for compiling templates and development workflow.

Sends emails using the [Resend API](https://resend.com/docs/introduction) and SDK.

## Running locally

Use the built-in development server to preview and send test emails.

```bash
# Start email dev server at localhost:3000
npm run dev:email
```

## Styling Emails

`@react-email/components` comes with a handful of common components designed to work with email clients, but are not opinionated. To customize and extend the component styles you can use Tailwind utility classes, which uses the theme config as the Next app.

## Sending Emails

Emails are sent by calling the `sendEmail` server action, which uses the Resend API and node SDK.

Example usage:

```typescript
const emailResponse = await sendEmail({
  to: ['somebody@example.com'],
  cc: ['nobody@a-domain.com', 'everybody@example.com'],
  bcc: ['someone-else@a-domain.com'],
  from: 'hello',
  replyTo: 'liquidmilesrace@gmail.com',
  subject: 'Hello there!',
  messageData: {
    title: 'The headline',
    recipientName: 'FirstName',
    message: 'This is the message text...',
  },
  template: EmailTemplates.Message,
})

if (emailResponse.success) {
  console.log('Email sent!', emailResponse.data)
} else console.warn('Email failed to send', emailResponse.errors)
```

**Required Configuration**

`RESEND_DOMAIN` - Verified domain attached to Resend account used for the from address when sending emails.
`RESEND_API_TOKEN` - API key used for authenticating API calls to Resend.
