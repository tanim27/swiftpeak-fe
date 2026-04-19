'use client'
import gsap from 'gsap'
import { useEffect } from 'react'

const Works = () => {
	useEffect(() => {
		const tl = gsap.timeline({ defaults: { ease: 'Power3.out' } })

		tl.to('.text', {
			opacity: 1,
			duration: 0.5,
			delay: 0.5,
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

		tl.fromTo('.hero', { opacity: 0 }, { opacity: 1, duration: 0.8 })
	}, [])

	return (
		<>
			<div className='w-full min-h-screen flex flex-col justify-center items-center text-white'>
				<div className='hero text-3xl md:text-4xl flex flex-col justify-center items-center'>
					<h3>Works Page</h3>
				</div>
			</div>

			<div className='intro bg-black fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-30'>
				<div className='font-helveticaNeue font-bold text-5xl md:text-6xl flex flex-col justify-center items-start'>
					<h1 className='overflow-hidden'>
						<span className='text opacity-0'>Works</span>
					</h1>
				</div>
			</div>

			<div className='slider bg-white fixed top-0 left-0 w-full h-full transform translate-y-full z-40'></div>
		</>
	)
}

export default Works
