import {heroui} from "@heroui/react";

export default heroui({
	themes: {
		light: {
			colors: {
				primary: "#0F53F3",
				secondary: "#FFCC00",
				background: "#FFFFFF"
			}
		},
		dark: {
			colors: {
				primary: "#0F53F3",
				secondary: "#FFCC00",
				background: "#FFFFFF"
			}
		}
	},
	addCommonColors: true,
	defaultTheme: "light",
});