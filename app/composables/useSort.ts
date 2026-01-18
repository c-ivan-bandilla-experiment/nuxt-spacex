export function useSort<T>(
  data: Readonly<Ref<readonly T[]>>,
  sortFn: (a: T, b: T) => number
): ComputedRef<T[]> {
  return computed(() => [...data.value].sort(sortFn))
}