import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'

type Props = {
  url: string
  title: string
  /** caption under the window; defaults to generic wording */
  hint?: string
}

type Device = 'desktop' | 'mobile'

/**
 * A live, embedded preview of a deployed site inside a faux browser window.
 *
 * - The iframe is only mounted once the window scrolls into view (saves data).
 * - If the embedded site refuses framing (X-Frame-Options / CSP), the load
 *   event never fires, so after a grace period we surface a clear fallback.
 */
export function LiveDemo({
  url,
  title,
  hint = 'Interactive preview — scroll and click around inside the window.',
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  // Browsers without IntersectionObserver get the iframe straight away.
  const [armed, setArmed] = useState(
    () => typeof window !== 'undefined' && !('IntersectionObserver' in window),
  )
  const [loaded, setLoaded] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const [device, setDevice] = useState<Device>('desktop')
  const [reloadKey, setReloadKey] = useState(0)

  // Mount the iframe when the window is close to the viewport.
  useEffect(() => {
    const node = containerRef.current
    if (!node || armed || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setArmed(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [armed])

  // Framing refusals are not observable cross-origin: fall back on a timer.
  useEffect(() => {
    if (!armed || loaded) return
    const timer = window.setTimeout(() => setBlocked(true), 9000)
    return () => window.clearTimeout(timer)
  }, [armed, loaded, reloadKey])

  const reload = () => {
    setLoaded(false)
    setBlocked(false)
    setReloadKey((k) => k + 1)
  }

  const host = (() => {
    try {
      return new URL(url).host
    } catch {
      return url
    }
  })()

  return (
    <div className="browser" ref={containerRef} data-reveal="up">
      <div className="browser__chrome">
        <span className="browser__lights" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>

        <div className="browser__address">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
            <path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7" />
          </svg>
          <span className="browser__host">{host}</span>
          <span className="browser__live">
            <i aria-hidden="true" />
            live
          </span>
        </div>

        <div className="browser__tools">
          <div className="browser__segmented" role="group" aria-label="Preview size">
            <button
              type="button"
              className={device === 'desktop' ? 'is-active' : undefined}
              onClick={() => setDevice('desktop')}
              aria-pressed={device === 'desktop'}
              title="Desktop preview"
            >
              <Icon name="desktop" size={15} />
              <span className="sr-only">Desktop preview</span>
            </button>
            <button
              type="button"
              className={device === 'mobile' ? 'is-active' : undefined}
              onClick={() => setDevice('mobile')}
              aria-pressed={device === 'mobile'}
              title="Mobile preview"
            >
              <Icon name="mobile" size={15} />
              <span className="sr-only">Mobile preview</span>
            </button>
          </div>

          <button
            type="button"
            className="icon-button icon-button--sm"
            onClick={reload}
            title="Reload preview"
          >
            <Icon name="refresh" size={15} />
            <span className="sr-only">Reload preview</span>
          </button>

          <a
            className="icon-button icon-button--sm"
            href={url}
            target="_blank"
            rel="noreferrer"
            title="Open in a new tab"
          >
            <Icon name="external" size={15} />
            <span className="sr-only">Open {title} in a new tab</span>
          </a>
        </div>
      </div>

      <div className={`browser__viewport browser__viewport--${device}`}>
        {armed ? (
          <iframe
            key={reloadKey}
            src={url}
            title={`${title} — live preview`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            onLoad={() => {
              setLoaded(true)
              setBlocked(false)
            }}
          />
        ) : null}

        {!loaded && !blocked && (
          <div className="browser__state" aria-live="polite">
            <span className="spinner" aria-hidden="true" />
            <p>Loading the live site…</p>
          </div>
        )}

        {blocked && !loaded && (
          <div className="browser__state browser__state--blocked">
            <Icon name="external" size={22} />
            <p>
              This preview could not be embedded. The site is live — open it in a
              new tab.
            </p>
            <div className="browser__state-actions">
              <a
                className="button button--primary"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                Open {host}
                <Icon name="arrow" size={15} />
              </a>
              <button type="button" className="button button--ghost" onClick={reload}>
                <Icon name="refresh" size={15} />
                Try again
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="browser__footer">
        <span>{hint}</span>
        <a href={url} target="_blank" rel="noreferrer">
          Open full site
          <Icon name="arrow" size={14} />
        </a>
      </div>
    </div>
  )
}
