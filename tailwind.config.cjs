const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				pastellake: {
					800: '#B5EAEA'
				},
				pastelbeige: {
					800: '#EDF6E5'
				},
				pastelpink: {
					800: '#FFBCBC'
				},pastelred: {
					800: '#F38BA0'
				},
			}

		}
	},

	plugins: [forms, typography]
};

module.exports = config;
