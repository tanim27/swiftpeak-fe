'use client'
import gsap from 'gsap'
import { useEffect } from 'react'

const About = () => {
	useEffect(() => {
		const tl = gsap.timeline({ defaults: { ease: 'Power3.out' } })

		tl.to('.text', { opacity: 1, duration: 0.5, delay: 0.5 })

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
	}, [])

	return (
		<div>
			<div className='flex justify-center items-center'>
				<h1>About Page</h1>
			</div>

			<div className='intro bg-black fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
				<div className='font-helveticaNeue font-bold text-7xl flex flex-col justify-center items-start'>
					<h1 className='overflow-hidden'>
						<span className='text opacity-0 pb-2'>About</span>
					</h1>
				</div>
			</div>

			<div className='slider bg-[#ffffff] fixed top-0 left-0 w-full h-full transform translate-y-full'></div>
		</div>
	)
}

export default About
