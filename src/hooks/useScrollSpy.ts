import { useEffect, useState } from 'react'

/** Tracks which section id is currently the most visible in the viewport. */
export function useScrollSpy(ids: string[], offset = 120) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top - offset <= 0) current = id
      }
      // Pin the last section once the page is scrolled to the bottom.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      if (atBottom) current = ids[ids.length - 1] ?? current
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}
