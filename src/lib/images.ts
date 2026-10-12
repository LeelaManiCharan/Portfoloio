/**
 * Zero-config image slots.
 *
 * Drop an image into `src/assets/gallery/` (or `src/assets/logos/`) named after
 * the slot you want to fill -- e.g. `portrait.jpg`, `sri-sai-shopping.png` --
 * and it is picked up automatically at build time. No imports to edit.
 *
 * Supported extensions: png, jpg, jpeg, webp, avif, svg, gif
 */

const galleryModules = import.meta.glob<string>(
  '../assets/gallery/*.{png,jpg,jpeg,webp,avif,svg,gif,PNG,JPG,JPEG,WEBP}',
  { eager: true, import: 'default' },
)

const logoModules = import.meta.glob<string>(
  '../assets/logos/*.{png,jpg,jpeg,webp,avif,svg,gif,PNG,JPG,JPEG,WEBP}',
  { eager: true, import: 'default' },
)

function index(modules: Record<string, string>) {
  const map = new Map<string, string>()
  for (const [path, url] of Object.entries(modules)) {
    const file = path.split('/').pop()
    if (!file) continue
    const name = file.replace(/\.[^.]+$/, '').toLowerCase()
    map.set(name, url)
  }
  return map
}

const galleryIndex = index(galleryModules)
const logoIndex = index(logoModules)

/** Returns the resolved URL for an image slot, or null when it is still empty. */
export function resolveImage(name: string | undefined | null): string | null {
  if (!name) return null
  return galleryIndex.get(name.toLowerCase()) ?? null
}

/** Returns the resolved URL for a company logo slot, or null when empty. */
export function resolveLogo(name: string | undefined | null): string | null {
  if (!name) return null
  return logoIndex.get(name.toLowerCase()) ?? null
}
