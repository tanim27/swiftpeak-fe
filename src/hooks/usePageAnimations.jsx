'use client'
import gsap from 'gsap'
import { useEffect } from 'react'

const usePageAnimations = (selector) => {
	useEffect(() => {
		const tl = gsap.timeline({ defaults: { ease: 'Power3.out' } })

		tl.to(`.${selector} .text`, { opacity: 1, duration: 0.5, delay: 0.5 })
		tl.to(`.${selector} .slider`, {
			y: '-100%',
			duration: 1,
			ease: 'power4.inOut',
			delay: 0.5,
		})
		tl.to(`.${selector} .intro`, {
			y: '-100%',
			duration: 1,
			ease: 'power2.out',
		})
	}, [selector])
}

export default usePageAnimations
