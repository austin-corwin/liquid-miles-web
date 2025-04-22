import { Box, Divider, Link, Stack, Text, VStack } from '@chakra-ui/react'
import { PageHeader } from './Pages/components/PageHeader'
import { PageLayout } from './Pages/components/PageLayout'
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
        <VStack w='full' maxWidth='container.md' alignItems='start'>
          <Text {...textRecipes.Lead} color='white'>
            Drop us a line and we&#39;ll get back to you as soon as we can!
          </Text>
          <Text {...textRecipes.Body} color='white'>
            Got questions? You might find what you need on the <Link>FAQs</Link>{' '}
            page or, perhaps, the
            <Link>rules</Link>.
          </Text>
        </VStack>
        <Box
          w='full'
          maxWidth='xl'
          bg='white'
          rounded='lg'
          p={{ base: 4, md: 6 }}
        >
          <ContactForm />
        </Box>
      </Stack>
    </PageLayout>
  )
}

export default Contact
