import TopNavbar from '@/components/TopNavbar/TopNavbar'
import '@/styles/globals.css'

export const metadata = {
	title: 'SwiftPeak',
	description:
		'SwiftPeak is a gathered portfolio of the work of few friends. The friends are still work in progress',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`antialiased`}>
				<TopNavbar />
				{children}
			</body>
		</html>
	)
}
