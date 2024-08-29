export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	darkMode: "selector",
	theme: {
		extend: {
			borderColor: (theme) => ({
				DEFAULT: theme("colors.gray.200"),
				dark: theme("colors.gray.700"),
			}),
		},
	},
	plugins: [],
};
