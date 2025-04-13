'use client'

import { Box, BoxProps, ListItem } from '@chakra-ui/react'
import React from 'react'
import { UiSectionProps } from '../../config/uiSectionsConfig'

interface StyleGuideNavItemProps {
	item: UiSectionProps
	isActive?: boolean
}

const StyleGuideNavItem: React.FC<StyleGuideNavItemProps> = ({
	item,
	isActive,
}) => {
	const boxProps: BoxProps = {
		color: isActive ? 'black' : 'gray.400',
		fontWeight: isActive ? 'semibold' : 'medium',
	}
	return (
		<ListItem>
			<Box as='a' href={`#${item.id}`} {...boxProps}>
				{item.title}
			</Box>
		</ListItem>
	)
}

export { StyleGuideNavItem }
