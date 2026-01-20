/**
 * React hook example for text overflow detection.
 * Uses the framework-agnostic textOverflowCore.ts
 *
 * NOTE: This file is provided as an example/reference.
 * To use in a React project, copy this file and textOverflowCore.ts.
 */

// import { useCallback, useEffect, useRef, useState } from 'react'
// import { createTextOverflowObserver, type TextOverflowOptions } from './textOverflowCore'

/*
export interface UseTextOverflowReturn {
  // Ref to attach to the text element
  ref: React.RefCallback<HTMLElement>
  // Whether the text is currently overflowing (clamped)
  isOverflowing: boolean
}

/**
 * React hook to detect if text content is overflowing its container
 * when line-clamp is applied. Works with ResizeObserver for responsive detection.
 *
 * @param content - Content string to watch for changes
 * @param options - Configuration options
 *
 * @example
 * ```tsx
 * function Description({ text }: { text: string }) {
 *   const { ref, isOverflowing } = useTextOverflow(text, { lineClamp: 4 })
 *   const [expanded, setExpanded] = useState(false)
 *
 *   return (
 *     <div>
 *       <p ref={ref} className={expanded ? '' : 'line-clamp-4'}>
 *         {text}
 *       </p>
 *       {isOverflowing && (
 *         <button onClick={() => setExpanded(!expanded)}>
 *           {expanded ? 'See less' : 'See more'}
 *         </button>
 *       )}
 *     </div>
 *   )
 * }
 * ```
 *-/
export function useTextOverflow(
  content?: string | null,
  options: TextOverflowOptions = {}
): UseTextOverflowReturn {
  const [isOverflowing, setIsOverflowing] = useState(false)
  const cleanupRef = useRef<(() => void) | null>(null)
  const elementRef = useRef<HTMLElement | null>(null)

  // Re-check when content changes
  useEffect(() => {
    if (!elementRef.current) return

    // Cleanup previous observer
    cleanupRef.current?.()

    // Create new observer
    cleanupRef.current = createTextOverflowObserver(
      elementRef.current,
      options,
      setIsOverflowing
    )

    return () => {
      cleanupRef.current?.()
    }
  }, [content, options.lineClamp])

  // RefCallback to handle element mounting
  const ref = useCallback((element: HTMLElement | null) => {
    // Cleanup previous observer
    cleanupRef.current?.()
    cleanupRef.current = null
    elementRef.current = element

    if (element) {
      cleanupRef.current = createTextOverflowObserver(
        element,
        options,
        setIsOverflowing
      )
    }
  }, [options.lineClamp])

  return {
    ref,
    isOverflowing,
  }
}
*/

export { }
