<template>
	<v-container>
		<input type="text" v-model="searchQuery" placeholder="Search by mission name or year:YYYY" />
		<select v-model="sortOrder">
			<option value="desc">Newest First</option>
			<option value="asc">Oldest First</option>
		</select>
		<div v-for="launch in sortedData" :key="launch?.id">
			<NuxtLink :to="{ name: 'rocket-show', params: { id: launch?.rocket?.rocket?.id } }">
				{{ launch }}
			</NuxtLink>
		</div>
		<div v-if="pending">Loading...</div>
		<div v-else-if="error">Error: {{ error }}</div>
		<v-btn
			variant="elevated"
			color="primary"
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
import { useLaunchSort } from '~/composables/services/launch/useLaunchSort'
import type { SortOrderOpts } from '~/types/sortOrderOpts'

const {
	allData: allLaunches,
	loadMore,
	hasMore,
	pending,
	error,
} = useLoadMore(useGetLaunch, 'launches', undefined)

const searchQuery = ref('')
const sortOrder = ref<SortOrderOpts>('desc')

const debouncedSearchQuery = useDebounce(searchQuery, 300)

const filteredData = useLaunchFilter(allLaunches, debouncedSearchQuery)
const sortedData = useLaunchSort(filteredData, sortOrder)
</script>
