import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned `ref`.
 * When the element enters the viewport the `visible` class is added,
 * triggering the CSS entrance animation defined in animations.css.
 *
 * @param {{ threshold?: number, rootMargin?: string }} options
 * @returns {React.RefObject}
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el) // fire once
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}
