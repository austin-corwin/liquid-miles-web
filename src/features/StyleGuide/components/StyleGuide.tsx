'use client'

import { PageHeader } from '@/features/Pages/components/PageHeader'
import { PageLayout } from '@/features/Pages/components/PageLayout'
import { Divider, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { uiSectionConfig } from '../config/uiSectionsConfig'
import { StyleGuideNav } from './nav/StyleGuideNav'
import { UiComponent } from './UiComponent'
import { UiSection } from './UiSection'

const StyleGuide: React.FC = () => {
  return (
    <PageLayout bg='white'>
      <PageHeader title='UI Components & Style Guide'>
        <Text fontSize='xl'>
          Just a quick overview of the design tokens and core components.
        </Text>
      </PageHeader>

      <HStack
        position='relative'
        alignItems='flex-start'
        justifyContent='flex-start'
        flexDirection={{ base: 'column', md: 'row' }}
        gap={8}
        py={12}
        w='full'
      >
        <VStack
          pt={8}
          gap={{ base: 12, md: 16 }}
          w='full'
          divider={<Divider borderColor='gray.200' />}
        >
          {uiSectionConfig.map((section) => (
            <UiSection
              key={section.id}
              id={section.id}
              title={section.title}
              description={section?.description}
              icon={section?.icon}
            >
              {section.previews?.map((preview) => (
                <UiComponent
                  key={preview.id}
                  title={preview?.title}
                  description={preview?.description}
                >
                  {preview?.children}
                </UiComponent>
              ))}
            </UiSection>
          ))}
        </VStack>
        <StyleGuideNav />
      </HStack>
    </PageLayout>
  )
}

export { StyleGuide }
