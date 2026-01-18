<template>
	<v-container>
		<div v-if="pending">Loading...</div>
		<div v-else-if="error">Error: {{ error }}</div>
		<div v-else>
			<h1>{{ rocket?.name }}</h1>
		</div>
	</v-container>
</template>

<script lang="ts" setup>
import { useGetRocket } from '~/composables/services/rocket/useGetRocket'

definePageMeta({
	name: 'rocket-show',
})

const route = useRoute()
const { rocket, pending, error } = useGetRocket(route.params.id as string)
</script>
