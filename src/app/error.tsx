'use client'

import React from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
  other: any
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  React.useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <div
      className={
        'flex flex-col items-center justify-center gap-6 h-screen w-full'
      }
    >
      <h1>Oopsy!</h1>
      <p>There was an error.</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default Error
