import gsap from 'gsap'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const NavDrawer = ({ isDrawerOpen, toggleDrawer }) => {
	const drawerRef = useRef(null)

	useEffect(() => {
		if (isDrawerOpen) {
			gsap.to(drawerRef.current, { x: 0, duration: 0.5, ease: 'power3.out' })
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
				className='bg-black fixed top-0 right-0 w-[70%] h-full bg-white shadow-2xl transform z-20'
				style={{ transform: 'translateX(100%)' }}
			>
				<div className='flex justify-between items-center px-8 py-2 border-b-2 relative top-2'>
					<h2 className='font-maison font-semibold text-black text-xl'>Menu</h2>
					<button
						className='text-lg text-gray-500 hover:text-gray-700'
						onClick={toggleDrawer}
					>
						Close
					</button>
				</div>

				<div className='font-helveticaNeue font-bold flex flex-col justify-center items-center h-full w-full'>
					<div className='bg-background text-black flex justify-between items-center h-[90%] w-[70%]'>
						<div className='h-full flex flex-col justify-around items-start'>
							<Link href='/'>
								<h1
									className='text-4xl sm:text-5xl cursor-pointer'
									onClick={toggleDrawer}
								>
									Home
								</h1>
							</Link>
							<Link href='/about'>
								<h1
									className='text-4xl sm:text-5xl cursor-pointer'
									onClick={toggleDrawer}
								>
									About
								</h1>
							</Link>
							<Link href='/contact'>
								<h1
									className='text-4xl sm:text-5xl cursor-pointer'
									onClick={toggleDrawer}
								>
									Contact
								</h1>
							</Link>
						</div>
						<div className='h-[70%] flex flex-col justify-around items-end'>
							<Link href='/works'>
								<h1
									className='text-4xl sm:text-5xl cursor-pointer'
									onClick={toggleDrawer}
								>
									Works
								</h1>
							</Link>
							<Link href='/team'>
								<h1
									className='text-4xl sm:text-5xl cursor-pointer'
									onClick={toggleDrawer}
								>
									Team
								</h1>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NavDrawer
