<template>
	<v-app>
		<v-layout>
			<AppSidebar />
			<v-main>
				<Header />
				<slot />
				<ClientOnly>
					<Footer />
				</ClientOnly>
			</v-main>
		</v-layout>
	</v-app>
</template>
<script>
import Footer from '~/components/footers/default.vue'
import Header from '~/components/headers/default.vue'
import AppSidebar from '~/components/navs/AppSidebar.vue'

export default {
	name: 'DefaultLayout',
	components: {
		Header,
		Footer,
		AppSidebar,
	},
}
</script>
