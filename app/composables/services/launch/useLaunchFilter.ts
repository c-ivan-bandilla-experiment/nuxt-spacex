export function useLaunchFilter(
	data: Readonly<Ref<readonly any[]>>,
	searchQuery: Ref<string>,
): ComputedRef<any[]> {
	const filterFn = (launch: any, filters: any) => {
		if (
			filters.year &&
			launch?.launch_date_utc &&
			new Date(launch.launch_date_utc).getFullYear() !== filters.year
		)
			return false
		if (
			filters.missionName &&
			launch?.mission_name &&
			!launch.mission_name.toLowerCase().includes(filters.missionName.toLowerCase())
		)
			return false
		return true
	}

	const year = computed(() => {
		const query = searchQuery.value.trim()
		if (query.startsWith('year:')) {
			const yearStr = query.slice(5).trim()
			const parsed = Number.parseInt(yearStr, 10)
			return isNaN(parsed) ? null : parsed
		}
		return null
	})

	const missionName = computed(() => {
		const query = searchQuery.value.trim()
		if (!query.startsWith('year:')) {
			return query || null
		}
		return null
	})

	const filters = { year, missionName }

	return useFilter(data, filterFn, filters)
}
