<template>
	<ClientOnly>
		<v-container>
			<div class="d-flex ga-4 mb-4 align-center">
				<v-text-field v-model="searchQuery" prepend-inner-icon="mdi-magnify"
					placeholder="Search by mission name or year:YYYY" variant="outlined" density="compact" hide-details
					clearable :loading="isSearching" class="flex-grow-1" />
				<v-select v-model="sortOrder" :items="sortOptions" item-title="label" item-value="value"
					variant="outlined" density="compact" hide-details style="max-width: 180px" />
			</div>
			<TableLaunchTable :items="sortedData" :pending="pending" :error="error" height="75cqh"
				@load-more="loadMore" />
			<div v-if="pending" class="d-flex justify-center">
				<v-progress-circular indeterminate color="primary" />
			</div>
			<div v-else-if="error">Error: {{ error }}</div>
			<div class="d-flex justify-center">
				<v-btn v-if="hasMore && !pending" variant="elevated" color="primary" @click="loadMore">
					Load More
				</v-btn>
			</div>
		</v-container>
	</ClientOnly>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useGetLaunch } from '~/composables/services/launch/useGetLaunch'
import { useLaunchFilter } from '~/composables/services/launch/useLaunchFilter'
import { useLaunchSort } from '~/composables/services/launch/useLaunchSort'
import { useDebounce } from '~/composables/useDebounce'
import { useLoadMore } from '~/composables/useLoadMore'
import { useNavigation } from '~/composables/useNavigation'
import type { SortOrderOpts } from '~/types/sortOrderOpts'

definePageMeta({
	name: 'launch',
	ssr: false,
})

const limit = 10

const {
	allData: launchesAll,
	loadMore,
	hasMore,
	pending,
	error,
} = useLoadMore(useGetLaunch, 'launches', limit)

const searchQuery = ref('')
const sortOrder = ref<SortOrderOpts>('desc')

const sortOptions = [
	{ label: 'Newest First', value: 'desc' },
	{ label: 'Oldest First', value: 'asc' },
]

const { debouncedValue: debouncedSearchQuery, isDebouncing: isSearching } = useDebounce(searchQuery, 300)

const launchesData = computed(() => launchesAll.value || [])
const filteredData = useLaunchFilter(launchesData, debouncedSearchQuery)
const sortedData = useLaunchSort(filteredData, sortOrder)

const { pushState, updateExtras, getSavedState, enableAutoScrollSave, disableAutoScrollSave } =
	useNavigation()

onMounted(() => {
	const saved = getSavedState()
	if (saved?.extras) {
		if (saved.extras.searchQuery) searchQuery.value = saved.extras.searchQuery
		if (saved.extras.sortOrder) sortOrder.value = saved.extras.sortOrder
	}

	enableAutoScrollSave()

	pushState({
		searchQuery: searchQuery.value,
		sortOrder: sortOrder.value,
	})
})

watch([searchQuery, sortOrder], () => {
	updateExtras({
		searchQuery: searchQuery.value,
		sortOrder: sortOrder.value,
	})
})

onUnmounted(() => {
	disableAutoScrollSave()
})
</script>
