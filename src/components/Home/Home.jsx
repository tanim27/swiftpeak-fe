'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

const Home = () => {
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const tl = gsap.timeline({
			defaults: { ease: 'Power3.out' },
			scrollTrigger: {
				trigger: '.hero',
				start: 'top top',
				end: 'bottom top',
				scrub: true, // smooth scrolling
				onRefresh: () => ScrollTrigger.refresh(), // ensures animation recalculates on refresh
			},
		})

		tl.to('.text1', { opacity: 1, duration: 0.5, delay: 0.5 })
		tl.to('.text2', { opacity: 1, duration: 0.5, delay: 0.5 })
		tl.to('.text3', { opacity: 1, duration: 0.5, delay: 0.5 })

		tl.to('.slider', {
			y: '-100%',
			duration: 1,
			delay: 0.5,
			ease: 'power4.inOut',
		})
		tl.to('.intro', { y: '-100%', duration: 1, ease: 'power2.out' })
		tl.fromTo('.hero', { opacity: 0 }, { opacity: 1, duration: 0.8 })

		ScrollTrigger.refresh() // ensure animation recalculates on page refresh
	}, [])

	return (
		<>
			<div className='w-full min-h-screen flex flex-col justify-center items-center text-white'>
				<div className='hero font-maison font-normal text-3xl sm:text-5xl'>
					<h3>Home Page</h3>
				</div>
			</div>

			<div className='intro bg-black fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-30'>
				<div className='font-helveticaNeue font-bold text-5xl sm:text-7xl flex flex-col justify-center items-start'>
					<h1 className='overflow-hidden'>
						<span className='text1 opacity-0'>Your Peak</span>
					</h1>
					<h1 className='overflow-hidden'>
						<span className='text2 opacity-0'>in</span>
					</h1>
					<h1 className='overflow-hidden pb-4'>
						<span className='text3 opacity-0'>Digital Solutions</span>
					</h1>
				</div>
			</div>

			<div className='slider bg-white fixed top-0 left-0 w-full h-full transform translate-y-full z-40'></div>
		</>
	)
}

export default Home
