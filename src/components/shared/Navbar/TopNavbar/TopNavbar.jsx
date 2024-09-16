'use client'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import NavDrawer from '../NavDrawer/NavDrawer'

const TopNavbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const [activeLink, setActiveLink] = useState('')
	const [hoveredLink, setHoveredLink] = useState('')

	const RouteName = [
		{ name: 'Works', href: '/works' },
		{ name: 'About', href: '/about' },
		{ name: 'Team', href: '/team' },
		{ name: 'Contact', href: '/contact' },
	]

	const handleResize = () => {
		if (window.innerWidth <= 720) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen)
	}

	const handleLinkClick = (linkName) => {
		setActiveLink(linkName)
	}

	const handleMouseEnter = (linkName) => {
		setHoveredLink(linkName)
	}

	const handleMouseLeave = () => {
		setHoveredLink('')
	}

	return (
		<>
			<NavDrawer
				isDrawerOpen={isDrawerOpen}
				toggleDrawer={toggleDrawer}
			/>
			<div
				className={`px-6 md:px-8 3xl:px-14 w-full flex justify-between ${
					isMobile ? 'items-end h-[5vh] pt-6' : 'items-start h-[20vh] pt-2'
				} `}
			>
				<h2 className='font-helveticaNeue font-normal text-3xl sm:text-4xl 2xl:text-6xl'>
					SwiftPeak
				</h2>

				{isMobile ? (
					<>
						<div
							className='font-maison font-normal text-lg h-[20px] flex justify-between items-center gap-1 cursor-pointer'
							onClick={toggleDrawer}
						>
							<p>Menu</p>
							<MoreHorizRoundedIcon />
						</div>
					</>
				) : (
					<nav className='font-maison font-normal flex flex-col gap-2 cursor-pointer'>
						{RouteName.map(({ name, href }) => (
							<Link
								href={href}
								key={name}
							>
								<p
									className={`h-[20px] relative group pl-6 ${
										activeLink === name && !hoveredLink ? 'text-active' : ''
									}`}
									onClick={() => handleLinkClick(name)}
									onMouseEnter={() => handleMouseEnter(name)}
									onMouseLeave={handleMouseLeave}
								>
									{name}
									<span
										className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-[6px] w-[6px] bg-white rounded-full transition-opacity duration-200 ${
											hoveredLink === name ||
											(activeLink === name && !hoveredLink)
												? 'opacity-100'
												: 'opacity-0'
										}`}
									></span>
								</p>
							</Link>
						))}
					</nav>
				)}
			</div>
		</>
	)
}

export default TopNavbar
