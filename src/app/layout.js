import Navbar from '@/components/shared/Navbar/Navbar'
import '@/styles/globals.css'

export const metadata = {
	title: 'SwiftPeak',
	description:
		'SwiftPeak is a gathered portfolio of the work of few friends. The friends are still work in progress',
}

export default function RootLayout({ children }) {
	try {
		return (
			<html lang='en'>
				<head>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'
					/>
				</head>
				<body className={`antialiased`}>
					<Navbar />
					{children}
				</body>
			</html>
		)
	} catch (error) {
		return <div>Error loading the page.</div>
	}
}
