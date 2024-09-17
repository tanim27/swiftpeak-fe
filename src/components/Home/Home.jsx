'use client'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'

const Home = () => {
	const introRef = useRef(null)
	const sliderRef = useRef(null)
	const mainRef = useRef(null)

	useLayoutEffect(() => {
		const navbarHeight = mainRef.current.offsetHeight

		const tl = gsap.timeline({ defaults: { ease: 'Power1.out' } })

		tl.to('.text', {
			y: '0%',
			stagger: 0.15,
			duration: 0.3,
			// ease: 'Power1.out',
		})

		tl.to(sliderRef.current, {
			y: `-${100 + (navbarHeight / window.innerHeight) * 100}%`,
			duration: 1.5,
			delay: 0.5,
			ease: 'power2.inOut',
		})

		tl.to(introRef.current, {
			y: `-${100 + (navbarHeight / window.innerHeight) * 100}%`,
			duration: 2.5,
			delay: 0.1,
			ease: 'power1.out',
		})

		tl.fromTo('.hero', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '=-1')
	}, [])

	return (
		<>
			<main ref={mainRef}>
				<div className='hero w-full h-[100vh] flex flex-col justify-center items-center '>
					<div className='flex flex-col justify-center items-start'>
						<h1 className='font-helveticaNeue font-bold text-5xl sm:text-7xl'>
							SwiftPeak
						</h1>
						<p className='font-maison font-normal'>
							This is Maison Neue SwiftPeak
						</p>
					</div>
				</div>
			</main>

			<div
				ref={introRef}
				className='intro fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center'
			>
				<div className='introText font-helveticaNeue font-bold text-white text-5xl sm:text-7xl'>
					<h1 className='hide overflow-hidden bg-black'>
						<span className='text inline-block translate-y-full'>
							Your Peak
						</span>
					</h1>
					<h1 className='hide overflow-hidden bg-black'>
						<span className='text inline-block translate-y-full'>in</span>
					</h1>
					<h1 className='hide overflow-hidden bg-black'>
						<span className='text inline-block translate-y-full'>
							Digital Solutions
						</span>
					</h1>
				</div>
			</div>

			<div
				ref={sliderRef}
				className='slider bg-white fixed top-0 left-0 w-full h-full bg-white translate-y-full'
			></div>
		</>
	)
}

export default Home
