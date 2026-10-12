import { useEffect } from 'react'
import { Icon } from './Icon'

type Props = {
  src: string | null
  onClose: () => void
}

export function Lightbox({ src, onClose }: Props) {
  useEffect(() => {
    if (!src) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.classList.add('is-locked')
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [src, onClose])

  if (!src) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close image preview"
      >
        <Icon name="close" size={20} />
      </button>
      <img src={src} alt="" onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
