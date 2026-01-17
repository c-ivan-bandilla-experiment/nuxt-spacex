<template>
	<v-container>
		{{ launches }}
	</v-container>
</template>

<script lang="ts" setup>
import { useGetLaunch } from '~/composables/services/launch/useGetLaunch'

const { launches, pending, error } = useGetLaunch()
</script>
