'use client'
import gsap from 'gsap'
import { useEffect, useState } from 'react'

const Home = () => {
	const [mobileHeight, setMobileHeight] = useState('100vh')

	useEffect(() => {
		const updateHeight = () => {
			// Dynamically get the viewport height and set it for mobile devices
			const vh = window.innerHeight * 0.01
			setMobileHeight(`${vh * 100}px`)
		}

		// Run the function on initial load and when the window resizes
		updateHeight()
		window.addEventListener('resize', updateHeight)

		return () => {
			window.removeEventListener('resize', updateHeight)
		}
	}, [])

	useEffect(() => {
		const tl = gsap.timeline({ defaults: { ease: 'Power3.out' } })

		tl.to('.text1', {
			opacity: 1,
			duration: 0.5,
			delay: 0.5,
		})

		tl.to('.text2', {
			opacity: 1,
			duration: 0.5,
			delay: 0.5,
		})

		tl.to('.text3', {
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
			<div
				className='w-full flex justify-center items-center text-white'
				style={{ height: mobileHeight }}
			>
				<div className='hero font-maison font-normal text-3xl sm:text-5xl'>
					<h3>Home Page</h3>
				</div>
			</div>

			<div className='intro bg-black fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
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

			<div className='slider bg-white fixed top-0 left-0 w-full h-full transform translate-y-full'></div>
		</>
	)
}

export default Home
