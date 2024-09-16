/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// background: '#FFB07C',
				background: '#FF5722',
				foreground: '#F9F2ED',
			},
			fontFamily: {
				maison: ['Maison Neue', 'sans-serif'],
				helveticaNeue: ['Helvetica Neue LT', 'sans-serif'],
			},
			fontWeight: {
				light: 300,
				normal: 400,
				bold: 700,
			},
			fontSize: {
				paragraph: '1rem',
			},
		},
	},
	plugins: [],
}
