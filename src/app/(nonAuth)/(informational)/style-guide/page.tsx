import { StyleGuide } from '@/features/StyleGuide/components/StyleGuide'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'UI Style Guide',
}

export default function ComponentsPage() {
	return <StyleGuide />
}
