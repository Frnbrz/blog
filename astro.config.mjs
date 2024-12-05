import starlight from "@astrojs/starlight"
import { defineConfig } from "astro/config"
import starlightBlog from "starlight-blog"

export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightBlog()],
			title: "Astro Starlight Blog",
			customCss: ["./src/styles/custom.css"],
			defaultLocale: "root",
			locales: {
				root: {
					label: "Español",
					lang: "es",
				},
				en: {
					label: "English",
				},
			},
		}),
	],
})
