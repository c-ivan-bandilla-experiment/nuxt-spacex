export function useFilter<T>(
	data: Readonly<Ref<T[]>>,
	filterFn: (item: T, filters: Record<string, any>) => boolean,
	filters: Record<string, Ref<any>>,
): ComputedRef<T[]> {
	return computed(() => {
		const currentFilters = Object.fromEntries(
			Object.entries(filters).map(([key, ref]) => [key, ref.value]),
		)
		return data.value.filter((item) => filterFn(item, currentFilters))
	})
}
