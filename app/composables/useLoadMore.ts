import type { MaybeRefOrGetter } from 'vue'

export function useLoadMore<T>(
  composable: (variables: MaybeRefOrGetter<{ limit: number | undefined; offset: number }>) => Record<string, any> & { pending: Ref<boolean>; error: Ref<any> },
  dataKey: string,
  limit: number | undefined
) {
  const offset = ref(0)
  const allData = ref<T[]>([])
  const hasMore = ref(true)

  const variables = computed(() => ({ limit, offset: offset.value }))
  const result = composable(variables)
  const dataRef = result[dataKey] as ComputedRef<T[]>
  const { pending, error } = result

  watch(dataRef, (newData) => {
    if (newData && newData.length > 0) {
      allData.value.push(...newData)
      if (limit === undefined) {
        hasMore.value = false
      } else {
        hasMore.value = newData.length === limit
      }
    } else {
      hasMore.value = false
    }
  }, { immediate: true })

  const loadMore = () => {
    if (hasMore.value && !pending.value && limit !== undefined) {
      offset.value += limit
    }
  }

  return {
    allData: readonly(allData),
    loadMore,
    hasMore: readonly(hasMore),
    pending,
    error,
  }
}