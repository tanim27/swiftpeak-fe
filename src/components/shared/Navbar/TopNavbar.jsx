'use client'

import '@/styles/globals.css'
import Link from 'next/link'
import { useState } from 'react'

const TopNavbar = () => {
	const [isMobile, setIsMobile] = useState(false)
	const [activeLink, setActiveLink] = useState('')
	const [hoveredLink, setHoveredLink] = useState('')

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
		<header>
			<div className='bg-primary h-full w-full hidden md:block fixed top-0 left-0 right-0 z-10'>
				<div className='flex flex-row justify-between items-end px-10 py-2'>
					<h1 className='font-helveticaNeue font-normal text-3xl md:text-4xl'>
						SwiftPeak
					</h1>
					<nav className='flex gap-2'>
						<Link href='/'>
							<p
								className={`relative group pl-6 ${
									activeLink === 'Home' && !hoveredLink ? 'text-active' : ''
								}`}
								onClick={() => handleLinkClick('Home')}
								onMouseEnter={() => handleMouseEnter('Home')}
								onMouseLeave={handleMouseLeave}
							>
								Home
								<span
									className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-[6px] w-[6px] bg-white rounded-full transition-opacity duration-200 ${
										hoveredLink === 'Home' ||
										(activeLink === 'Home' && !hoveredLink)
											? 'opacity-100'
											: 'opacity-0'
									}`}
								></span>
							</p>
						</Link>

						<Link href='/works'>
							<p
								className={`relative group pl-6 ${
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
			</div>
		</header>
	)
}

export default TopNavbar
