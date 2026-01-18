import { debounce } from 'lodash-es'

export function useDebounce<T>(value: Ref<T>, delay: number): ComputedRef<T> {
  const debouncedValue = ref<T>(value.value)

  const debouncedSetter = debounce((newValue: T) => {
    debouncedValue.value = newValue
  }, delay, { leading: false, trailing: true })

  watch(value, (newValue) => {
    debouncedSetter(newValue)
  })

  return computed(() => debouncedValue.value)
}