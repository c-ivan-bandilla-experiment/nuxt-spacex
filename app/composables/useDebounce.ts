import { debounce } from 'lodash-es'

type UseDebounceReturn<T> = {
	debouncedValue: ComputedRef<T>
	isDebouncing: ComputedRef<boolean>
}

export function useDebounce<T>(value: Ref<T>, delay: number): UseDebounceReturn<T> {
	const debouncedValue = ref<T>(value.value)

	const debouncedSetter = debounce(
		(newValue: T) => {
			debouncedValue.value = newValue
		},
		delay,
		{ leading: false, trailing: true },
	)

	watch(value, (newValue) => {
		debouncedSetter(newValue)
	})

	const isDebouncing = computed(() => value.value !== debouncedValue.value)

	return {
		debouncedValue: computed(() => debouncedValue.value),
		isDebouncing,
	}
}
