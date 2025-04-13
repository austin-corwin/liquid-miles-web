'use client'

import { Heading, StackProps, Text, VStack } from '@chakra-ui/react'
import React from 'react'

interface UiComponentProps extends StackProps {
	title?: string
	description?: React.ReactNode
}

const UiComponent: React.FC<UiComponentProps> = ({
	title,
	description,
	children,
}) => {
	return (
		<VStack
			alignItems={'start'}
			justifyContent={'flex-start'}
			gap={{ base: 6, md: 8 }}
			w='full'
		>
			{(title || description) && (
				<VStack
					alignItems={'start'}
					justifyContent={'flex-start'}
					gap={4}
					w='full'
				>
					<Heading as='h3' size='lg' w='full'>
						{title}
					</Heading>
					{description && (
						<Text
							w='full'
							maxW='prose'
							fontFamily='mono'
							fontSize='md'
						>
							{description}
						</Text>
					)}
				</VStack>
			)}

			<VStack
				alignItems={'start'}
				justifyContent={'flex-start'}
				gap={4}
				w='full'
				rounded='lg'
				borderWidth={'1px'}
				borderColor={'gray.200'}
				p={{ base: 4, md: 8 }}
			>
				{children}
			</VStack>
		</VStack>
	)
}

export { UiComponent }
