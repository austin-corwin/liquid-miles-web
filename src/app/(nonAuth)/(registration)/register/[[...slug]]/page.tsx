import { Register } from '@/features/registration/components/Register'
import { Metadata } from 'next'
import React from 'react'

type Props = {
  params?: Promise<{ slug: string[] }>
}

export const metadata: Metadata = {
  title: 'Race Registration | Liquid Miles',
}

export default async function Page({ params }: Props) {
  const requestParams = await params
  const slug = requestParams?.slug?.join('/')

  return <Register slug={slug} />
}
