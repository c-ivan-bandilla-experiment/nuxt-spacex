import type { RouteLocationNormalized } from 'vue-router'
import { computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from '#app'
import { debounce } from 'lodash-es'
import { useNavigationStore } from '~/stores/navigation'

const STORAGE_KEY = 'navigation-state'

export function useNavigation() {
	const router = useRouter()
	const route = useRoute()
	const navStore = useNavigationStore()

	// Restore state from sessionStorage on mount (for page refreshes)
	if (typeof onMounted === 'function') {
		onMounted(() => {
			if (process.client) {
				const stored = sessionStorage.getItem(STORAGE_KEY)
				if (stored) {
					try {
						const { stack, map } = JSON.parse(stored)
						navStore.$patch({ stack, map })
					} catch (e) {
						console.warn('Failed to parse navigation state from sessionStorage', e)
					}
				}
			}
		})
	}

	const saveToStorage = debounce(() => {
		if (process.client) {
			sessionStorage.setItem(
				STORAGE_KEY,
				JSON.stringify({
					stack: navStore.stack,
					map: navStore.map,
				}),
			)
		}
	}, 300)

	watch(() => navStore.stack, saveToStorage, { deep: true })
	watch(() => navStore.map, saveToStorage, { deep: true })

	const saveScroll = (y: number) => {
		navStore.saveScroll(route.fullPath, y)
	}

	const updateExtras = (extras: Record<string, any>) => {
		navStore.updateExtras(route.fullPath, extras)
	}

	const getSavedState = () => {
		return navStore.map[route.fullPath]
	}

	const canGoBack = computed(() => navStore.stack.length > 1)

	const goBack = () => {
		navStore.back(router)
	}

	let scrollHandler: (() => void) | null = null
	const enableAutoScrollSave = () => {
		if (process.client && !scrollHandler) {
			scrollHandler = debounce(() => saveScroll(window.scrollY), 200)
			window.addEventListener('scroll', scrollHandler)
		}
	}

	const disableAutoScrollSave = () => {
		if (process.client && scrollHandler) {
			window.removeEventListener('scroll', scrollHandler)
			scrollHandler = null
		}
	}

	if (typeof onUnmounted === 'function') {
		onUnmounted(() => {
			disableAutoScrollSave()
		})
	}

	return {
		saveScroll,
		updateExtras,
		getSavedState,
		canGoBack,
		goBack,
		enableAutoScrollSave,
		disableAutoScrollSave,
	}
}
