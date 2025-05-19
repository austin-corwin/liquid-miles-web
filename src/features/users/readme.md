# Users

User management tools for CRUD operations, and aggregation of Clerk + Contentful data.

## User Creation

When a user is successfully created and verified in Clerk, either by self-sign-up or Clerk admins sending an invite, a webhook will be sent to /api/clerk/webhook. If the payload is valid a user record will be created in the database for storing additional, non-auth related data about the user.

## Configuration

In order to validate incoming webhooks the fowlloging environment variables must be added:

`CLERK_WEBHOOK_SIGNING_SECRET` - can be found on the webhook detail view in Clerk
