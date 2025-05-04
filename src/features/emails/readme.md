# Transactional Emails

Send emails to users and admins.

Uses [React Email](https://react.email/docs) for compiling templates and development workflow.

## Running locally

Use the built-in development server to preview and send test emails.

```bash
# Start email dev server at localhost:3000
npm run dev:email
```

## Styling Emails

`@react-email/components` comes with a handful of common components designed to work with email clients, but are not opinionated. To customize and extend the component styles you can use Tailwind utility classes, which uses the theme config as the Next app.
