import gsap from 'gsap'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const NavDrawer = ({ isDrawerOpen, toggleDrawer }) => {
	const drawerRef = useRef(null)

	useEffect(() => {
		if (isDrawerOpen) {
			gsap.to(drawerRef.current, {
				x: 0,
				duration: 0.5,
				ease: 'power3.out',
			})
		} else {
			gsap.to(drawerRef.current, {
				x: '100%',
				duration: 0.3,
				ease: 'power3.in',
			})
		}
	}, [isDrawerOpen])

	return (
		<>
			{/* Backdrop  */}
			{isDrawerOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-600'
					onClick={toggleDrawer}
				></div>
			)}

			<div
				ref={drawerRef}
				className='bg-tertiary h-full w-[70%] fixed top-0 right-0 shadow-2xl transform z-20'
				style={{ transform: 'translateX(100%)' }}
			>
				<div className='h-[5%] md:h-[10%] w-full flex justify-between items-center border-b-2 pt-8 px-12 py-4'>
					<h2 className='font-semibold text-primary text-lg'>Menu</h2>
					<button
						className='font-light text-white hover:text-secondary text-sm'
						onClick={toggleDrawer}
					>
						Close
					</button>
				</div>

				<div className='h-[95%] md:h-[90%] w-full font-helveticaNeue font-bold text-primary flex flex-col justify-center items-start px-8'>
					<div className='h-[60%] flex flex-col justify-between items-start'>
						<Link href='/'>
							<h1
								className='text-4xl md:text-5xl cursor-pointer'
								onClick={toggleDrawer}
							>
								Home
							</h1>
						</Link>
						<Link href='/works'>
							<h1
								className='text-4xl md:text-5xl cursor-pointer'
								onClick={toggleDrawer}
							>
								Works
							</h1>
						</Link>
						<Link href='/about'>
							<h1
								className='text-4xl md:text-5xl cursor-pointer'
								onClick={toggleDrawer}
							>
								About
							</h1>
						</Link>
						<Link href='/team'>
							<h1
								className='text-4xl md:text-5xl cursor-pointer'
								onClick={toggleDrawer}
							>
								Team
							</h1>
						</Link>
						<Link href='/contact'>
							<h1
								className='text-4xl md:text-5xl cursor-pointer'
								onClick={toggleDrawer}
							>
								Contact
							</h1>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default NavDrawer
