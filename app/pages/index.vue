<template>
	<v-container>
		<input type="number" v-model="year" min="2006" max="2026" name="" id="date" />
		<div v-for="launch in filteredData" :key="launch?.id">
			<NuxtLink :to="{ name: 'rocket-show', params: { id: launch?.rocket?.rocket?.id } }">
				{{ launch }}
			</NuxtLink>
		</div>
		<div v-if="pending">Loading...</div>
		<div v-else-if="error">Error: {{ error }}</div>
		<v-btn
			v-if="hasMore && !pending && Array.isArray(allLaunches) && allLaunches.length"
			@click="loadMore"
		>
			Load More
		</v-btn>
	</v-container>
</template>

<script lang="ts" setup>
import { useGetLaunch } from '~/composables/services/launch/useGetLaunch'
import { useLaunchFilter } from '~/composables/services/launch/useLaunchFilter'

const { allData: allLaunches, loadMore, hasMore, pending, error } = useLoadMore(useGetLaunch, 'launches', 5)

const year = ref(null)
const missionName = ref('')

const debouncedYear = useDebounce(year, 300)
const debouncedMissionName = useDebounce(missionName, 300)

const filteredData = useLaunchFilter(allLaunches, debouncedYear, debouncedMissionName)
</script>
