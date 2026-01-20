import type { Ref } from 'vue'

export function useInfiniteScroll(
    loadMore: () => void,
    hasMore: Readonly<Ref<boolean>>,
    pending: Ref<boolean>,
) {
    const sentinelRef = ref<HTMLElement | null>(null)
    const isEnabled = ref(false)
    let observer: IntersectionObserver | null = null

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0]

        if (entry?.isIntersecting && hasMore.value && !pending.value) {
            loadMore()
        }
    }


    watch(sentinelRef, (el) => {

        if (observer) {
            observer.disconnect()
            observer = null
        }

        if (el && isEnabled.value) {
            observer = new IntersectionObserver(handleIntersect, {
                root: null,
                rootMargin: '100px',
                threshold: 0,
            })
            observer.observe(el)
        }
    })

    const enable = () => {
        if (isEnabled.value) return
        isEnabled.value = true
    }

    const isSentinelInViewport = () => {
        if (!sentinelRef.value) return false
        const rect = sentinelRef.value.getBoundingClientRect()
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight

        return rect.top <= viewportHeight + 100
    }

    watch(pending, (isPending) => {
        if (!isPending && isEnabled.value && hasMore.value) {
            nextTick(() => {
                if (isSentinelInViewport()) {
                    loadMore()
                }
            })
        }
    })

    onUnmounted(() => {
        if (observer) {
            observer.disconnect()
            observer = null
        }
    })

    return {
        sentinelRef,
        isEnabled: readonly(isEnabled),
        enable,
    }
}
