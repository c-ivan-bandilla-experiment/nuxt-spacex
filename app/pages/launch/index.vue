<template>
	<ClientOnly>
		<v-container>
			<div class="d-flex ga-4 mb-4 align-center">
				<v-text-field v-model="searchQuery" prepend-inner-icon="mdi-magnify"
					placeholder="Search by mission name or year:YYYY" variant="outlined" density="compact" hide-details
					clearable :loading="isSearching" class="flex-grow-1" />
				<UiBaseSelect v-model="sortOrder" :items="sortOptions" />
			</div>
			<TableLaunchTable :items="sortedData" :pending="pending" :error="error" @load-more="loadMore" />
			<div v-if="pending" class="d-flex justify-center">
				<v-progress-circular indeterminate color="primary" />
			</div>
			<div v-else-if="error">Error: {{ error }}</div>
			<div class="d-flex justify-center">
				<v-btn v-if="hasMore && !pending && !isInfiniteScrollEnabled" variant="elevated" color="primary"
					@click="handleLoadMore">
					Load More
				</v-btn>
			</div>
			<!-- Invisible sentinel for infinite scroll -->
			<div v-if="isInfiniteScrollEnabled && hasMore" :ref="(el) => sentinelRef = el" style="height: 1px;" />
		</v-container>
	</ClientOnly>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useGetLaunch } from '~/composables/services/launch/useGetLaunch'
import { useLaunchFilter } from '~/composables/services/launch/useLaunchFilter'
import { useLaunchSort } from '~/composables/services/launch/useLaunchSort'
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

const { sentinelRef, isEnabled: isInfiniteScrollEnabled, enable: enableInfiniteScroll } = useInfiniteScroll(loadMore, hasMore, pending)

const handleLoadMore = () => {
	enableInfiniteScroll()
	loadMore()
}

const searchQuery = ref('')
const sortOrder = ref<SortOrderOpts>('desc')

const sortOptions = [
	{ label: 'Newest First', value: 'desc', icon: '↓' },
	{ label: 'Oldest First', value: 'asc', icon: '↑' },
]

const { debouncedValue: debouncedSearchQuery, isDebouncing: isSearching } = useDebounce(searchQuery, 300)

const launchesData = computed(() => launchesAll.value || [])
const filteredData = useLaunchFilter(launchesData, debouncedSearchQuery)
const sortedData = useLaunchSort(filteredData, sortOrder)

const { updateExtras, getSavedState, enableAutoScrollSave, disableAutoScrollSave } =
	useNavigation()

onMounted(() => {
	const saved = getSavedState()
	if (saved?.extras) {
		if (saved.extras.searchQuery) searchQuery.value = saved.extras.searchQuery
		if (saved.extras.sortOrder) sortOrder.value = saved.extras.sortOrder
	}

	enableAutoScrollSave()
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
