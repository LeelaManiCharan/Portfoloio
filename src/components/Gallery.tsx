import { useState } from 'react'
import { Icon } from './Icon'
import { ImageFrame } from './ImageFrame'
import { Lightbox } from './Lightbox'
import { SectionHeading } from './SectionHeading'
import { gallery } from '../data/profile'
import { resolveImage } from '../lib/images'

export function Gallery() {
  const [zoom, setZoom] = useState<string | null>(null)

  const filled = gallery.filter((item) => resolveImage(item.image))
  const empty = gallery.filter((item) => !resolveImage(item.image))

  // Empty slots are an authoring aid: they show while developing so you know
  // where to drop files, and never ship to the deployed site.
  const items = import.meta.env.DEV ? [...filled, ...empty] : filled

  if (items.length === 0) return null

  return (
    <section id="gallery" className="section gallery">
      <SectionHeading
        index="06"
        title="Gallery"
        kicker="Moments from the work — talks, teams and the people behind the projects."
      />

      {import.meta.env.DEV && empty.length > 0 && (
        <p className="gallery__note" data-reveal="up">
          <Icon name="image" size={16} />
          <span>
            Dev only: {filled.length} of {gallery.length} slots filled. The{' '}
            {empty.length} dashed frames below are hidden in the production
            build — drop a file named under each one into{' '}
            <code>src/assets/gallery/</code> to use it.
          </span>
        </p>
      )}

      <div className="gallery__grid">
        {items.map((item, i) => (
          <div
            key={item.image}
            data-reveal="up"
            style={{ transitionDelay: `${(i % 3) * 70}ms` }}
          >
            <ImageFrame
              name={item.image}
              caption={item.caption}
              hint={item.hint}
              ratio={i % 5 === 0 ? '4 / 5' : '4 / 3'}
              onOpen={setZoom}
            />
          </div>
        ))}
      </div>

      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </section>
  )
}
