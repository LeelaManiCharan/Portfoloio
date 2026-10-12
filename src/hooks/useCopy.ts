import { useCallback, useEffect, useRef, useState } from 'react'

/** Copies text to the clipboard and reports a short-lived "copied" flag. */
export function useCopy(resetAfter = 1800) {
  const [copied, setCopied] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
      } catch {
        // Clipboard can be blocked (insecure context / permissions).
        const area = document.createElement('textarea')
        area.value = text
        area.setAttribute('readonly', '')
        area.style.position = 'fixed'
        area.style.opacity = '0'
        document.body.appendChild(area)
        area.select()
        document.execCommand('copy')
        document.body.removeChild(area)
      }
      setCopied(text)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(null), resetAfter)
    },
    [resetAfter],
  )

  return { copied, copy }
}
