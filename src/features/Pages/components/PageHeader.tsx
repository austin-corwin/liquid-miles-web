'use client'

import { Box, Heading, StackProps, VStack } from '@chakra-ui/react'
import React from 'react'

interface PageHeaderProps extends StackProps {
	title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
	return (
		<VStack
			as='header'
			w='full'
			gap={{ base: 4, md: 8 }}
			py={{ base: 8, md: 12 }}
			position={'relative'}
		>
			<Heading w='full' as='h1' size={{ base: '3xl', lg: '4xl' }}>
				{title}
			</Heading>
			{children && <Box w='full'>{children}</Box>}
		</VStack>
	)
}

export { PageHeader }
