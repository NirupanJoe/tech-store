/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#E3F2FF',
					100: '#BAE0FF',
					200: '#7FC6FF',
					300: '#4AAFFF',
					400: '#2198FF',
					500: '#2189FF',
					600: '#1B70D6',
					700: '#1558A8',
					800: '#0F407A',
					900: '#09295C',
					950: '#04122D',
				},
			},
		},
	},
	plugins: [],
};
