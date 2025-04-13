'use client'

import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { useScrollSpy } from '@/features/chakra-ui/utils/hooks/useScrollSpy'
import { BoxProps, Divider, Heading, List, VStack } from '@chakra-ui/react'
import React from 'react'
import { uiSectionConfig } from '../../config/uiSectionsConfig'
import { StyleGuideNavItem } from './StyleGuideNavItem'

interface StyleGuideNavProps extends BoxProps {
	children?: React.ReactNode
}

const StyleGuideNav: React.FC<StyleGuideNavProps> = ({
	children,
	...boxProps
}) => {
	const activeId = useScrollSpy(uiSectionConfig.map(({ id }) => `#${id}`))
	return (
		<VStack
			as='nav'
			alignItems={'start'}
			w='full'
			maxWidth={{ base: 'full', md: 60, lg: 72 }}
			rounded='lg'
			position={{ base: 'static', md: 'sticky' }}
			top={0}
			bg='white'
			p={{ base: 4, md: 6 }}
			{...boxProps}
			maxHeight='calc(100vh - 4rem)'
			sx={{ overscrollBehavior: 'contain' }}
		>
			<Heading id={'style-guide-toc'} pt={2} {...headingRecipes.H6}>
				Table of Contents
			</Heading>
			<Divider />
			<List spacing={1}>
				{uiSectionConfig.map((section) => (
					<StyleGuideNavItem
						item={section}
						key={section.title}
						isActive={activeId === section.id}
					/>
				))}
			</List>
			{children}
		</VStack>
	)
}

export { StyleGuideNav }
