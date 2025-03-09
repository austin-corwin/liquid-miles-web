'use client'

import BlobMask from '@/components/BlobMask'
import Wave from '@/components/Wave'
import React from 'react'
// import { fetchGraphQL } from './api/api'
// import { pagesQuery } from './api/queries/pagesQuery'

const About = () => {
	// console.log('about...')
	// React.useEffect(() => {
	// 	console.log('loaded...')
	// 	;(async () => {
	// 		console.log('Get data...')
	// 		const data = await fetchGraphQL(pagesQuery)
	// 		console.log(data)
	// 	})()
	// }, [])

	return (
		<div
			id='about'
			className='bg-secondary w-full flex justify-center py-12 pb-24 relative'
		>
			<div className='container w-full flex flex-col lg:flex-row gap-12'>
				<div className='w-full max-w-[500px]'>
					<BlobMask
						path='../../images/neighborhoodRoute.jpg'
						id='aboutPhoto'
					/>
				</div>
				<section className='gap-4 flex flex-col text-white max-w-[700px]'>
					<h2 className='text-white font-extrabold text-[1.5rem] lg:text-[4rem] font-primary '>
						What is Liquid Miles?
					</h2>
					<p>
						Participants will attempt to conquer a unique test of
						both athleticism and camaraderie: running 10 miles,
						drinking 10 beers, and doing it all within a 10-hour
						window. It’s a quirky combination of fitness, fun, and
						friendly competition that promises plenty of laughs and
						unforgettable memories.
					</p>
					<p>
						While we’d love to host everyone, accommodations are up
						to you—though our backyard is open for camping if you’re
						feeling adventurous. There’s a small participation fee,
						estimated at $55 per person, which includes an official
						event t-shirt to commemorate your heroic effort. If
						running or drinking isn’t your thing, you can still join
						in on the fun by volunteering as a referee or
						facilitator to help us keep everything running smoothly.
					</p>
					<p>
						At stake are annual bragging rights, a one-of-a-kind
						trophy sourced from Etsy, and the opportunity to cement
						your place in Liquid Miles history. Whether you’re in it
						for the glory, the laughs, or the challenge, we can’t
						wait to share this wild adventure with you. So, strap on
						your running shoes, practice your beer shotgun skills,
						and get ready to make history. Are you ready to take on
						the Liquid Miles Challenge?
					</p>
					<p>Prost!</p>
				</section>
			</div>
			<div className='absolute -bottom-20 md:-bottom-40 lg:-bottom-[16rem] left-0 right-0 -rotate-180'>
				<Wave fill='#1C606D' />
				{/* <Wave fill='#000000' /> */}
			</div>
		</div>
	)
}

export default About
