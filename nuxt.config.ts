import vuetify from 'vite-plugin-vuetify'
import viteCompression from 'vite-plugin-compression'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	ssr: false,
	future: { compatibilityVersion: 4 },
	build: { transpile: ['vuetify'] },
	imports: { dirs: ['./stores'] },

	nitro: {
		preset: 'vercel',
	},

	apollo: {
		autoImports: true,
		proxyCookies: true,
		clients: {
			default: { httpEndpoint: 'https://spacex-production.up.railway.app/' },
		},
	},

	vite: {
		optimizeDeps: {
			include: ['graphql-tag'],
		},
		plugins: [
			vuetify(),
			viteCompression({
				algorithm: 'brotliCompress',
			}),
		],
		vue: {
			template: {
				compilerOptions: {
					// Treat base-select elements as native custom elements
					isCustomElement: (tag) => ['selectedoption'].includes(tag),
				},
			},
		},
	},

	modules: ['@nuxtjs/apollo', ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }]],
	compatibilityDate: '2024-11-11',
})
