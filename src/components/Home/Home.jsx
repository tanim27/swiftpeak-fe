const Home = () => {
	// useEffect(() => {
	// 	const tl = gsap.timeline({ defaults: { ease: 'Power3.out' } })

	// 	tl.to('.intro', {
	// 		y: '-100%',
	// 		duration: 1,
	// 		ease: 'power2.out',
	// 	})

	// 	tl.to('.text', {
	// 		y: '0%',
	// 		stagger: 0.1,
	// 		duration: 1,
	// 		// ease: 'Power4.out',
	// 	})

	// 	tl.to('.slider', {
	// 		y: '-100%',
	// 		duration: 1,
	// 		delay: 0.5,
	// 		ease: 'power4.inOut',
	// 	})

	// 	tl.fromTo('.hero', { opacity: 0 }, { opacity: 1, duration: 1 })
	// }, [])

	return (
		<div>
			<div className='w-full h-[80vh] min-h-[80vh] flex justify-center items-center'>
				<div className='bg-background hero flex flex-col justify-center items-start'>
					<h1 className='font-helveticaNeue font-bold text-5xl sm:text-7xl'>
						SwiftPeak
					</h1>
					<p className='font-maison font-normal'>
						This is Maison Neue SwiftPeak
					</p>
				</div>
			</div>
		</div>
	)
}

export default Home
