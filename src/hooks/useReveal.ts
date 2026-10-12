import { useEffect } from 'react'

/**
 * Adds `.is-revealed` to every `[data-reveal]` element as it scrolls into view.
 * Respects `prefers-reduced-motion` by revealing everything immediately.
 */
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const reveal = (el: Element) => el.classList.add('is-revealed')

    if (reduce || !('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach(reveal)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target)
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    const observe = () => {
      document
        .querySelectorAll('[data-reveal]:not(.is-revealed)')
        .forEach((el) => observer.observe(el))
    }

    observe()
    // Catch elements mounted later (e.g. expanded project details).
    const mutation = new MutationObserver(observe)
    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [])
}
