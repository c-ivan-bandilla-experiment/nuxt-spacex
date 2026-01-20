/**
 * Framework-agnostic text overflow detection utility.
 * Works with any JavaScript framework (Vue, React, Svelte, etc.)
 *
 * @example
 * // Pure JS usage
 * const cleanup = createTextOverflowObserver(element, { lineClamp: 4 }, (isOverflowing) => {
 *   console.log('Is overflowing:', isOverflowing)
 * })
 * // Later: cleanup()
 */

export interface TextOverflowOptions {
    /**
     * Number of lines for the clamped state
     * @default 3
     */
    lineClamp?: number
}

/**
 * Checks if an element's text content overflows when line-clamp is applied.
 * Temporarily forces clamped styles to measure accurately.
 */
export function checkTextOverflow(
    element: HTMLElement,
    lineClamp: number = 3
): boolean {
    // Store original inline styles
    const originalDisplay = element.style.display
    const originalClamp = element.style.webkitLineClamp
    const originalOverflow = element.style.overflow
    const originalOrient = element.style.webkitBoxOrient

    // Temporarily force clamped state to measure accurately
    element.style.display = '-webkit-box'
    element.style.webkitLineClamp = String(lineClamp)
    element.style.overflow = 'hidden'
    element.style.webkitBoxOrient = 'vertical'

    // Check if content overflows
    const isOverflowing = element.scrollHeight > element.clientHeight

    // Restore original inline styles
    element.style.display = originalDisplay
    element.style.webkitLineClamp = originalClamp
    element.style.overflow = originalOverflow
    element.style.webkitBoxOrient = originalOrient

    return isOverflowing
}

/**
 * Creates a ResizeObserver-based text overflow detector.
 * Calls the callback whenever the overflow state changes.
 *
 * @param element - The DOM element to observe
 * @param options - Configuration options
 * @param onOverflowChange - Callback fired when overflow state changes
 * @returns Cleanup function to disconnect the observer
 *
 * @example
 * const cleanup = createTextOverflowObserver(
 *   document.getElementById('description'),
 *   { lineClamp: 4 },
 *   (isOverflowing) => {
 *     toggleButton.style.display = isOverflowing ? 'block' : 'none'
 *   }
 * )
 *
 * // When done:
 * cleanup()
 */
export function createTextOverflowObserver(
    element: HTMLElement,
    options: TextOverflowOptions,
    onOverflowChange: (isOverflowing: boolean) => void
): () => void {
    const { lineClamp = 3 } = options
    let lastState: boolean | null = null

    const check = () => {
        const isOverflowing = checkTextOverflow(element, lineClamp)

        // Only fire callback if state changed
        if (lastState !== isOverflowing) {
            lastState = isOverflowing
            onOverflowChange(isOverflowing)
        }
    }

    // Initial check
    check()

    // Setup ResizeObserver for responsive detection
    const observer = new ResizeObserver(check)
    observer.observe(element)

    // Return cleanup function
    return () => {
        observer.disconnect()
    }
}
