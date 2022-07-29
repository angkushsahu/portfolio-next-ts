module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#1D4ED8",
				"dark-bg": "#161822",
				"dark-title": "#dde2f4",
				"dark-subtitle": "#b5c4f0",
				"dark-description": "#99a1ba",
				"light-bg": "#fbfbfe",
				"light-title": "#454545",
				"light-subtitle": "#767676",
				"light-description": "#424242",
			},
			screens: {
				smaller: "26.25em",
				medium: "56.25em",
			},
			fontFamily: {
				"primary-bold": ["Orbitron-Bold", "Poppins", "sans-serif"],
				"primary-semibold": ["Orbitron-SemiBold", "Poppins", "sans-serif"],
				"primary-regular": ["Orbitron-Regular", "Poppins", "sans-serif"],
				secondary: ["Poppins-Regular", "sans-serif"],
			},
		},
	},
	plugins: [],
};
