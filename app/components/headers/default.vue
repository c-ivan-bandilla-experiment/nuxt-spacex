<template>
	<v-app-bar flat density="compact" class="app-header">
		<template v-slot:prepend>
			<v-btn icon="mdi-arrow-left" variant="text" :disabled="!canGoBack" @click="goBack" />
			<slot name="prepend">
				<!-- Pages can inject additional content here -->
			</slot>
		</template>

		<v-app-bar-title>
			<slot name="title">
				<span class="font-weight-bold">SpaceX</span>
			</slot>
		</v-app-bar-title>

		<template v-slot:append>
			<slot name="append">
				<!-- Pages can inject actions here -->
			</slot>
		</template>
	</v-app-bar>
</template>

<script setup lang="ts">
import { useNavigation } from '~/composables/useNavigation'

const { canGoBack, goBack } = useNavigation()
</script>

<style scoped>
.app-header {
	border-bottom: 1px solid rgba(128, 128, 128, 0.2);
}
</style>
