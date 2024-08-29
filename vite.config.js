import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
	],
	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					"@primary-color": "#1DA57A",
					"@component-background": "#1f1f1f",
					"@text-color": "#ffffff",
					"@link-color": "#1DA57A",
					"@border-radius-base": "4px",
					"@font-size-base": "14px",
				},
				javascriptEnabled: true,
			},
		},
	},
});
