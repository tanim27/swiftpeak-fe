'use client'
import gsap from 'gsap'
import { useEffect } from 'react'

const Home = () => {
	useEffect(() => {
		const tl = gsap.timeline({ defaults: { ease: 'Power4.out' } })

		tl.to('.text', {
			y: '0%',
			stagger: 0.1,
			duration: 0.5,
			// delay: 0.5,
			ease: 'Power4.out',
		})

		tl.to('.slider', {
			y: '-100%',
			duration: 1,
			delay: 0.5,
			ease: 'power4.inOut',
		})

		tl.to('.intro', {
			y: '-100%',
			duration: 1,
			ease: 'power2.out',
		})

		tl.fromTo('.hero', { opacity: 0 }, { opacity: 1, duration: 1 })
	}, [])

	return (
		<div>
			<div className='min-h-screen flex justify-center items-center'>
				<div className='hero flex flex-col justify-center items-start'>
					<h1 className='font-helveticaNeue font-bond text-7xl'>SwiftPeak</h1>
					<p className='font-maison font-normal'>
						This is Maison Neue (h2) SwiftPeak
					</p>
				</div>
			</div>

			<div className='intro bg-black fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
				<div className='font-helveticaNeue font-bold text-5xl sm:text-7xl flex flex-col justify-center items-start'>
					<h1 className='overflow-hidden'>
						<span className='text translate-y-full inline-block pb-2'>
							Your peak
						</span>
					</h1>
					<h1 className='overflow-hidden'>
						<span className='text translate-y-full inline-block'>in</span>
					</h1>
					<h1 className='overflow-hidden'>
						<span className='text translate-y-full inline-block pb-4'>
							Digital Solutions
						</span>
					</h1>
				</div>
			</div>

			<div className='slider bg-[#ffffff] fixed top-0 left-0 w-full h-full transform translate-y-full'></div>
		</div>
	)
}

export default Home
