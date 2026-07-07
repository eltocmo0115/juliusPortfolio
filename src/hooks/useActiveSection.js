import { useEffect, useState } from 'react'

/**
 * Watches the portfolio sections and returns the `id` of whichever
 * section is currently most visible in the viewport.
 * Used by Navbar to highlight the active nav link.
 *
 * @param {string[]} sectionIds  - list of element IDs to watch
 * @returns {string}             - id of the active section
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (!sectionIds.length) return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio
        const best = entries.reduce(
          (acc, entry) =>
            entry.isIntersecting && entry.intersectionRatio > (acc?.intersectionRatio ?? 0)
              ? entry
              : acc,
          null,
        )
        if (best) setActiveId(best.target.id)
      },
      {
        rootMargin: '-15% 0px -70% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
