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
				primary: '#1a3636',
				secondary: '#9E9E9E',
				tertiary: '#C1D3C8',
				black: '#000000',
				dark: '#212121',
				white: '#FFFFFF',
				light: '#F9F2ED',
				success: '',
				error: '',
				warning: '',
				info: '',
				danger: '',
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
