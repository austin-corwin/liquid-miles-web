import {
  Box,
  Divider,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { PageHeader } from './Pages/components/PageHeader'
import { PageLayout } from './Pages/components/PageLayout'
import { headingRecipes } from './chakra-ui/config/recipes'
import { textRecipes } from './chakra-ui/config/recipes/textRecipes'
import { ContactForm } from './contactForms/components/forms/ContactForm'

const Contact = () => {
  return (
    <PageLayout bg='secondary'>
      <PageHeader title='Contact' color='white'>
        <Divider borderTopColor='white' borderTopWidth={2} opacity={1} />
      </PageHeader>

      <Stack
        flexDirection={{ base: 'column', md: 'row' }}
        gap={{ base: 6, md: 8, xl: 16 }}
        alignItems='flex-start'
        w='full'
      >
        <VStack w='full' maxWidth='container.md' alignItems='start' gap={4}>
          <Heading {...headingRecipes.H3} color='white'>
            Got Questions?
          </Heading>

          <Text {...textRecipes.Lead} {...textRecipes.Light}>
            You might find what you need among the{' '}
            <Link href='/faqs' color={{ base: 'primary' }}>
              FAQs
            </Link>{' '}
            page or on the <Link href='/rules'>rules</Link> page.
          </Text>
          <Text {...textRecipes.Body} {...textRecipes.Light}>
            For anything else get in touch using the form or{' '}
            <a className='underline' href='mailto:liquidmilesrace@gmail.com'>
              email us
            </a>{' '}
            and we&#39;ll get back to you as soon as we can.
          </Text>
        </VStack>
        <Box
          w='full'
          maxWidth='xl'
          bg='white'
          rounded='lg'
          p={{ base: 8, md: 12 }}
        >
          <ContactForm />
        </Box>
      </Stack>
    </PageLayout>
  )
}

export default Contact
