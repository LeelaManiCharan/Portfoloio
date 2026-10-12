import { Icon } from './Icon'
import { resolveImage } from '../lib/images'

type Props = {
  /** slot name, matches a file in src/assets/gallery/ */
  name: string
  caption?: string
  hint?: string
  alt?: string
  /** CSS aspect-ratio value, e.g. "4 / 3" */
  ratio?: string
  className?: string
  onOpen?: (src: string) => void
  /** set false to label the empty state but keep the filled image caption-free */
  showCaption?: boolean
}

/**
 * An image "window". Renders the picture when the matching file exists in
 * src/assets/gallery/, otherwise a labelled placeholder that tells you the
 * exact file name to drop in.
 */
export function ImageFrame({
  name,
  caption,
  hint,
  alt,
  ratio = '4 / 3',
  className,
  onOpen,
  showCaption = true,
}: Props) {
  const src = resolveImage(name)
  const classes = ['frame', className].filter(Boolean).join(' ')

  if (!src) {
    // Unfilled slots are a development affordance only — a deployed site
    // should never show "drop a file here" frames to a visitor.
    if (!import.meta.env.DEV) return null

    return (
      <figure className={`${classes} frame--empty`} style={{ aspectRatio: ratio }}>
        <div className="frame__placeholder">
          <span className="frame__placeholder-icon">
            <Icon name="image" size={22} />
          </span>
          <span className="frame__placeholder-title">
            {caption ?? 'Image slot'}
          </span>
          <code className="frame__placeholder-path">
            src/assets/gallery/{name}.jpg
          </code>
          {hint && <span className="frame__placeholder-hint">{hint}</span>}
        </div>
      </figure>
    )
  }

  const image = (
    <img
      src={src}
      alt={alt ?? caption ?? name.replace(/-/g, ' ')}
      loading="lazy"
      decoding="async"
    />
  )

  return (
    <figure className={classes} style={{ aspectRatio: ratio }}>
      {onOpen ? (
        <button
          type="button"
          className="frame__zoom"
          onClick={() => onOpen(src)}
          aria-label={`Open ${caption ?? name} larger`}
        >
          {image}
        </button>
      ) : (
        image
      )}
      {caption && showCaption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
