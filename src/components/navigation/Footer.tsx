'use client'

import getTailwindValue from '@/utils/tailwind/getTailwindValue'
import React from 'react'
import Wave from '../Wave'

const Footer: React.FC = () => {
	const fillColor: string = getTailwindValue('colors', ['primary'])
	const year = new Date().getFullYear()
	return (
		<footer className='flex flex-col items-stretch justify-start gap-0'>
			<Wave fill={fillColor} />
			<nav className='flex flex-col md:flex-row gap-6 items-center justify-center bg-primary -mt-4 py-8'>
				<div className='text-sm font-bold tracking-wide text-gray-800'>
					&copy; {year} Liquid Miles
				</div>
			</nav>
		</footer>
	)
}

export default Footer
