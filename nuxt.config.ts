// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	css: ["~/assets/css/main.css"],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	devtools: { enabled: true },
	modules: ["@nuxt/fonts"],
	runtimeConfig: {
		mapsKey: process.env.GOOGLE_MAPS_API_KEY,
	},
});
