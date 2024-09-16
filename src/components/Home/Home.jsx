'use client'
import gsap from 'gsap'
import { useEffect } from 'react'

const Home = () => {
	useEffect(() => {
		const tl = gsap.timeline({ defaults: { ease: 'Power1.out' } })

		tl.to('.text', {
			y: '0%',
			stagger: 0.15,
			duration: 0.5,
			ease: 'Power4.out',
		})

		tl.to('.slider', {
			y: '-100%',
			duration: 1,
			delay: 1,
			ease: 'power3.inOut',
		})

		tl.to('.intro', {
			y: '-100%',
			duration: 1,
			ease: 'power2.out',
		})

		tl.fromTo('.hero', { opacity: 0 }, { opacity: 1, duration: 1 })
	}, [])

	return (
		<>
			<div className='w-full h-[80vh] flex justify-center items-center'>
				<div className='bg-background hero flex flex-col justify-center items-start'>
					<h1 className='font-helveticaNeue font-bold text-5xl sm:text-7xl'>
						SwiftPeak
					</h1>
					<p className='font-maison font-normal'>
						This is Maison Neue SwiftPeak
					</p>
				</div>
			</div>

			<div className='intro bg-black fixed top-0 left-0 h-full w-full flex flex-col justify-center items-center'>
				<div className='intro-text font-helveticaNeue font-bold text-color-[#fff] text-5xl sm:text-7xl'>
					<h1 className='heading overflow-hidden'>
						<span className='text translate-y-full inline-block pb-2'>
							Your peak
						</span>
					</h1>
					<h1 className='heading overflow-hidden'>
						<span className='text translate-y-full inline-block'>in</span>
					</h1>
					<h1 className='heading overflow-hidden'>
						<span className='text translate-y-full inline-block pb-4'>
							Digital Solutions
						</span>
					</h1>
				</div>
			</div>

			<div className='slider bg-[#fff] fixed top-0 left-0 w-full h-full translate-y-full'></div>
		</>
	)
}

export default Home
