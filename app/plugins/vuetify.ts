import { createVuetify } from 'vuetify'
import * as labs from 'vuetify/labs/components'
import 'vuetify/styles'
// Use this if you want only icons used by Vuetify components internally should be imported
// import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		components: { ...labs },
		// Refer to https://vuetifyjs.com/en/features/icon-fonts/
		// icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
		ssr: true,
		theme: {
			themes: {
				light: {
					primary: 'oklch(52% 0.2 250)',      // Blue using OKLCH
					secondary: 'oklch(30% 0 0)',        // Gray using OKLCH
					accent: 'oklch(65% 0.25 250)',      // Light blue using OKLCH
					error: 'oklch(55% 0.22 25)',        // Red using OKLCH
					info: 'oklch(52% 0.2 250)',         // Blue using OKLCH
					success: 'oklch(65% 0.15 145)',     // Green using OKLCH
					warning: 'oklch(85% 0.15 85)',      // Yellow using OKLCH
				},
				dark: {
					primary: 'oklch(60% 0.2 250)',      // Lighter blue for dark theme
					secondary: 'oklch(35% 0 0)',        // Lighter gray for dark theme
					accent: 'oklch(70% 0.25 350)',      // Pink using OKLCH
					error: 'oklch(60% 0.22 25)',        // Red using OKLCH
					info: 'oklch(60% 0.2 250)',         // Blue using OKLCH
					success: 'oklch(70% 0.15 145)',     // Green using OKLCH
					warning: 'oklch(85% 0.15 85)',      // Yellow using OKLCH
				},
			},
		},
	})

	nuxtApp.vueApp.use(vuetify)
})
