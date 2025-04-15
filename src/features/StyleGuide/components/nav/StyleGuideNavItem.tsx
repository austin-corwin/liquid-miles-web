'use client'

import { Badge, Box, BoxProps, ListItem } from '@chakra-ui/react'
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
    color: 'black',
    fontWeight: isActive ? 'semibold' : 'medium',
    opacity: isActive ? 1 : 0.6,
  }
  return (
    <ListItem>
      <Box as='a' href={`#${item.id}`} {...boxProps}>
        {item.title}
        {item?.tags?.map((tag) => (
          <Badge size='sm' key={tag}>
            {tag}
          </Badge>
        ))}
      </Box>
    </ListItem>
  )
}

export { StyleGuideNavItem }
