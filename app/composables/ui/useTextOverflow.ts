import type { MaybeRefOrGetter, Ref } from 'vue'
import { onUnmounted, ref, toValue, watch } from 'vue'
import { createTextOverflowObserver } from './textOverflowCore'
import type { TextOverflowOptions } from './textOverflowCore'

export interface UseTextOverflowReturn {
    /**
     * Ref to attach to the text element
     */
    elementRef: Ref<HTMLElement | null>
    /**
     * Whether the text is currently overflowing (clamped)
     */
    isOverflowing: Ref<boolean>
}

/**
 * Vue composable to detect if text content is overflowing its container
 * when line-clamp is applied. Works with ResizeObserver for responsive detection.
 *
 * @param content - Reactive content to watch for changes
 * @param options - Configuration options
 *
 * @example
 * ```vue
 * <script setup>
 * const { elementRef, isOverflowing } = useTextOverflow(() => props.text, { lineClamp: 4 })
 * </script>
 *
 * <template>
 *   <p ref="elementRef" class="line-clamp-4">{{ text }}</p>
 *   <button v-if="isOverflowing">See more</button>
 * </template>
 * ```
 */
export function useTextOverflow(
    content?: MaybeRefOrGetter<string | undefined | null>,
    options: TextOverflowOptions = {}
): UseTextOverflowReturn {
    const elementRef = ref<HTMLElement | null>(null)
    const isOverflowing = ref(false)
    let cleanup: (() => void) | null = null

    // Watch for element and content changes
    watch(
        [elementRef, () => toValue(content)],
        () => {
            // Cleanup previous observer
            cleanup?.()
            cleanup = null

            nextTick(() => {
                if (elementRef.value) {
                    cleanup = createTextOverflowObserver(
                        elementRef.value,
                        options,
                        (overflow) => {
                            isOverflowing.value = overflow
                        }
                    )
                }
            })
        },
        { immediate: true }
    )

    onUnmounted(() => {
        cleanup?.()
    })

    return {
        elementRef,
        isOverflowing,
    }
}
