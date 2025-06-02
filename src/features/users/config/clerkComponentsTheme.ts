import { Theme } from '@clerk/types'

enum ClerkComponent {
  UserProfile = 'userProfile',
}

const clerkComponentsTheme: Record<ClerkComponent, Theme> = {
  userProfile: {
    elements: {
      rootBox: 'w-full rounded-none',
      cardBox:
        'w-full max-w-full px-0 shaddow-none rounded-none h-full  md:h-[calc(100vh-4rem)]',
      scrollBox: 'rounded-none',
    },
  },
}

export { clerkComponentsTheme }
