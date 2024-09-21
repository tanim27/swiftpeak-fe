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
			<div className='w-full h-[5vh] md:h-[20vh] flex justify-between items-end md:items-start px-8 pt-6 md:pt-2'>
				<h2 className='font-helveticaNeue font-normal text-3xl md:text-4xl'>
					SwiftPeak
				</h2>

				<div
					className='md:hidden font-maison font-normal text-lg h-[20px] flex justify-between items-center gap-1 cursor-pointer'
					onClick={toggleDrawer}
				>
					<p>Menu</p>
					<MoreHorizRoundedIcon />
				</div>

				<nav className='hidden font-maison font-normal md:flex flex-col gap-2 cursor-pointer'>
					<Link href='/works'>
						<p
							className={`h-[20px] relative group pl-6 ${
								activeLink === 'Works' && !hoveredLink ? 'text-active' : ''
							}`}
							onClick={() => handleLinkClick('Works')}
							onMouseEnter={() => handleMouseEnter('Works')}
							onMouseLeave={handleMouseLeave}
						>
							Works
							<span
								className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-[6px] w-[6px] bg-white rounded-full transition-opacity duration-200 ${
									hoveredLink === 'Works' ||
									(activeLink === 'Works' && !hoveredLink)
										? 'opacity-100'
										: 'opacity-0'
								}`}
							></span>
						</p>
					</Link>

					<Link href='/about'>
						<p
							className={`h-[20px] relative group pl-6 ${
								activeLink === 'About' && !hoveredLink ? 'text-active' : ''
							}`}
							onClick={() => handleLinkClick('About')}
							onMouseEnter={() => handleMouseEnter('About')}
							onMouseLeave={handleMouseLeave}
						>
							About
							<span
								className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-[6px] w-[6px] bg-white rounded-full transition-opacity duration-200 ${
									hoveredLink === 'About' ||
									(activeLink === 'About' && !hoveredLink)
										? 'opacity-100'
										: 'opacity-0'
								}`}
							></span>
						</p>
					</Link>

					<Link href='/team'>
						<p
							className={`h-[20px] relative group pl-6 ${
								activeLink === 'Team' && !hoveredLink ? 'text-active' : ''
							}`}
							onClick={() => handleLinkClick('Team')}
							onMouseEnter={() => handleMouseEnter('Team')}
							onMouseLeave={handleMouseLeave}
						>
							Team
							<span
								className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-[6px] w-[6px] bg-white rounded-full transition-opacity duration-200 ${
									hoveredLink === 'Team' ||
									(activeLink === 'Team' && !hoveredLink)
										? 'opacity-100'
										: 'opacity-0'
								}`}
							></span>
						</p>
					</Link>

					<Link href='/contact'>
						<p
							className={`h-[20px] relative group pl-6 ${
								activeLink === 'Contact' && !hoveredLink ? 'text-active' : ''
							}`}
							onClick={() => handleLinkClick('Contact')}
							onMouseEnter={() => handleMouseEnter('Contact')}
							onMouseLeave={handleMouseLeave}
						>
							Contact
							<span
								className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-[6px] w-[6px] bg-white rounded-full transition-opacity duration-200 ${
									hoveredLink === 'Contact' ||
									(activeLink === 'Contact' && !hoveredLink)
										? 'opacity-100'
										: 'opacity-0'
								}`}
							></span>
						</p>
					</Link>
				</nav>
			</div>
		</>
	)
}

export default TopNavbar
