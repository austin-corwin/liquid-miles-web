import { Registration } from '@/features/registration/components/Registration'
import { Metadata } from 'next'
import React from 'react'

// type Props = {
//   params?: Promise<{ slug: string[] }>
// }

export const metadata: Metadata = {
  title: 'Race Registration | Liquid Miles',
}

// export default async function Page({ params }: Props) {
export default function Page() {
  // const requestParams = await params
  // const slug = requestParams?.slug?.join('/')

  return <Registration />
}
