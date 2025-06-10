import { Theme } from '@clerk/types'

enum ClerkComponent {
  UserProfile = 'userProfile',
  ClerkProvider = 'clerkProvider',
}

const clerkComponentsTheme: Record<ClerkComponent, Theme> = {
  clerkProvider: {
    variables: {
      fontFamily: 'Poppins',
    },
  },
  userProfile: {
    elements: {
      rootBox: 'w-full rounded-none h-full',
      cardBox:
        'w-full max-w-full px-0 shaddow-none rounded-none h-screen md:h-[calc(100vh-4rem)]',
      scrollBox: 'rounded-none px-0',
      navbar: 'pt-8 bg-white w-full max-w-72 flex-auto',
      navbarButtons: 'pt-4',
      navbarButton: 'text-lg flex items-center',
      header: 'pb-6',
      headerTitle: 'text-4xl font-bold capitalize',
      page: 'px-4 md:px-6',
    },
  },
}

export { clerkComponentsTheme }
