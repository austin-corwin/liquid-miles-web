import Contact from '@/features/Contact'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact | Liquid Miles',
}

const Page: React.FC = () => {
  return <Contact />
}

export default Page
