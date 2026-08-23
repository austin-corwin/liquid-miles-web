'use client'

import Wave from '@/components/Wave'
import { formatUsdFromCents } from '@/features/Tickets/ticketPricing'
import { PendingTicketClaim } from '@/features/Tickets/types'
import {
  buildVenmoNote,
  buildVenmoPayUrl,
  buildVenmoQrImageUrl,
  getVenmoUsername,
} from '@/features/Tickets/venmo'
import { Button, Spinner } from '@chakra-ui/react'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const TicketPay = () => {
  const searchParams = useSearchParams()
  const claimId = searchParams.get('claim')
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [claim, setClaim] = useState<PendingTicketClaim | null>(null)
  const [isLoadingClaim, setIsLoadingClaim] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!isLoaded || !claimId) {
      setIsLoadingClaim(false)
      return
    }

    let cancelled = false
    const loadClaim = async () => {
      setIsLoadingClaim(true)
      setLoadError(null)
      try {
        // Prefer fresh server metadata — client Clerk cache is often stale
        // right after claim creation.
        await user?.reload()
        const response = await fetch(`/api/tickets/claims/${claimId}`)
        const data = await response.json()
        if (cancelled) return
        if (!response.ok || !data?.claim) {
          setClaim(null)
          setLoadError(data?.error || 'Claim not found')
          return
        }
        setClaim(data.claim as PendingTicketClaim)
      } catch {
        if (!cancelled) {
          setClaim(null)
          setLoadError('Could not load payment claim')
        }
      } finally {
        if (!cancelled) setIsLoadingClaim(false)
      }
    }

    void loadClaim()
    return () => {
      cancelled = true
    }
    // Only re-fetch when the claim or signed-in user changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [claimId, isLoaded, user?.id])

  const venmoUsername = getVenmoUsername()
  const amountDollars = claim ? claim.amountCents / 100 : 0
  const venmoNote = claim ? buildVenmoNote(claim.ticketLabel) : ''
  const payUrl =
    claim && venmoUsername
      ? buildVenmoPayUrl({
          username: venmoUsername,
          amountDollars,
          note: venmoNote,
        })
      : null

  const markPaid = async () => {
    if (!claimId) return
    setIsSubmitting(true)
    setError(null)
    try {
      const response = await fetch(`/api/tickets/claims/${claimId}/paid`, {
        method: 'POST',
      })
      const data = await response.json()
      if (!response.ok) {
        setError(data?.error || 'Could not notify us about your payment.')
        return
      }
      await user?.reload()
      router.push('/tickets/pending')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const showSpinner = !isLoaded || isLoadingClaim

  return (
    <div className='relative'>
      <div className='flex w-full flex-col min-h-screen gap-4 bg-tertiary pt-8 px-4 lg:px-8'>
        <h1 className='w-full text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-secondary border-b-4 border-secondary lg:leading-[5rem] pb-3'>
          Pay with Venmo
        </h1>
        <div className='relative bg-tertiary pb-48'>
          <div className='w-full max-w-xl mx-auto flex flex-col items-center z-10 pb-48 gap-6 pt-8'>
            {showSpinner ? (
              <Spinner color='teal.600' size='lg' />
            ) : !claim ? (
              <div className='flex flex-col items-center gap-4 text-center'>
                <p className='font-primary'>
                  {loadError ||
                    'We couldn’t find this payment claim. Start again from tickets.'}
                </p>
                <Button as={Link} href='/tickets' colorScheme='teal'>
                  Back to tickets
                </Button>
              </div>
            ) : claim.status === 'awaiting_approval' ? (
              <div className='flex flex-col items-center gap-4 text-center bg-white rounded-xl p-6 text-secondary w-full'>
                <p className='font-primary uppercase font-extrabold text-xl'>
                  Payment submitted
                </p>
                <p>
                  We’re confirming your Venmo payment for{' '}
                  <strong>{formatUsdFromCents(claim.amountCents)}</strong>
                  {claim.name ? (
                    <>
                      {' '}
                      from <strong>{claim.name}</strong>
                    </>
                  ) : null}
                  . You’ll get an email when your ticket is unlocked.
                </p>
                <Button as={Link} href='/tickets' colorScheme='teal'>
                  Back to tickets
                </Button>
              </div>
            ) : (
              <div className='flex flex-col gap-5 bg-white rounded-xl p-6 text-secondary w-full'>
                <div>
                  <p className='font-primary uppercase font-extrabold text-2xl'>
                    {claim.ticketLabel}
                  </p>
                  <p className='mt-1 text-lg'>
                    Total due:{' '}
                    <strong>{formatUsdFromCents(claim.amountCents)}</strong>
                    {claim.wantsHoodie ? ' (includes hoodie)' : ''}
                  </p>
                </div>

                {!venmoUsername || !payUrl ? (
                  <p className='text-red-700'>
                    Venmo checkout isn’t configured yet. Set{' '}
                    <code>NEXT_PUBLIC_VENMO_USERNAME</code> and try again.
                  </p>
                ) : (
                  <>
                    <ol className='list-decimal pl-5 space-y-2'>
                      <li>
                        Pay{' '}
                        <strong>{formatUsdFromCents(claim.amountCents)}</strong>{' '}
                        to <strong>@{venmoUsername}</strong>
                      </li>
                      <li>
                        Come back here and tap <strong>I’ve paid</strong>
                      </li>
                    </ol>

                    <div className='flex flex-col items-center gap-3 py-2'>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={buildVenmoQrImageUrl(payUrl)}
                        alt='Venmo QR code for Liquid Miles ticket'
                        width={240}
                        height={240}
                        className='rounded-md border border-secondary/20'
                      />
                      <p className='text-sm text-center text-secondary/80'>
                        Scan with your phone, or open Venmo below.
                      </p>
                    </div>

                    <Button
                      as='a'
                      href={payUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      colorScheme='teal'
                      size='lg'
                    >
                      Open Venmo
                    </Button>
                  </>
                )}

                <Button
                  onClick={markPaid}
                  isLoading={isSubmitting}
                  loadingText='Notifying…'
                  colorScheme='yellow'
                  size='lg'
                  isDisabled={!venmoUsername}
                >
                  I’ve paid
                </Button>

                {error && <p className='text-red-700 text-sm'>{error}</p>}

                <p className='text-sm text-secondary/80'>
                  After you tap I’ve paid, we’ll confirm the Venmo transfer and
                  unlock your ticket—usually within a few hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='z-0 absolute bottom-0 left-0 right-0'>
        <Wave fill='#1C606D' />
      </div>
    </div>
  )
}

export default TicketPay
