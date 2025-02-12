/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {},
			backgroundImage: {
				galaxy: 'url("/galaxy.png")',
				'e-sportsGradient':
					'linear-gradient(89.96deg, #9572FC 27.08%, #43E7AD 33.94%, #E1D55D 40.57%)',
				'game-gradient':
					'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
			}
		}
	},
	plugins: []
};
