'use client'

import Image, { ImageProps } from 'next/image'
import React from 'react'

interface ContentfulImageProps extends ImageProps {
	src: string
	alt: string
	width?: number
	quality?: number
}

const contentfulLoader = ({
	src,
	width,
	quality,
}: Partial<ContentfulImageProps>) => {
	return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage: React.FC<ContentfulImageProps> = ({
	src,
	width,
	quality,
	alt,
	...props
}) => {
	return (
		<Image
			alt={alt}
			loader={() => contentfulLoader({ src, width, quality })}
			src={src}
			{...props}
		/>
	)
}
export default ContentfulImage
