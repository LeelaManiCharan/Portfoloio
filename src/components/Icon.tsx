import type { ReactNode } from 'react'
import type { IconName } from '../data/profile'

type Props = {
  name: IconName
  size?: number
  className?: string
}

const paths: Record<IconName, ReactNode> = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7.5 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a10.5 10.5 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  ),
  pin: (
    <>
      <path d="M12 21.5s7-6.1 7-11.1a7 7 0 1 0-14 0c0 5 7 11.1 7 11.1Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17M7.5 7.6v.1M11.5 17v-6.5M11.5 13.4c0-1.6 1-2.9 2.6-2.9s2.4 1.1 2.4 2.9V17" />
    </>
  ),
  github: (
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5v-3.2c-2.3.4-3-1-3.3-1.8-.2-.5-.8-1.5-1.4-1.8-.5-.3.3-.5 1 .1.6.5 1 1.6 1.3 2 .6.7 1.7.5 2.4.2a2.7 2.7 0 0 1 .8-1.7c-2.8-.4-4-1.9-4-4a4.3 4.3 0 0 1 1-2.8 3.5 3.5 0 0 1 .1-2.6s1 0 2.3 1.5a8 8 0 0 1 4 0C14.5 5.4 15.5 5.4 15.5 5.4a3.5 3.5 0 0 1 .1 2.6 4.3 4.3 0 0 1 1 2.8c0 2.1-1.2 3.6-4 4 .6.6.9 1.4.9 2.3V21A9.5 9.5 0 0 0 12 2.5Z" />
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M18 14.5V18a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V8.5A2.5 2.5 0 0 1 6 6h3.5" />
    </>
  ),
  download: (
    <>
      <path d="M12 3.5v11" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4 18.5h16" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M15 6.5A2.5 2.5 0 0 0 12.5 4H6.5A2.5 2.5 0 0 0 4 6.5v6A2.5 2.5 0 0 0 6.5 15" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
    </>
  ),
  code: (
    <>
      <path d="m9 7-5 5 5 5" />
      <path d="m15 7 5 5-5 5" />
    </>
  ),
  cube: (
    <>
      <path d="M12 3 4 7.3v9.4L12 21l8-4.3V7.3L12 3Z" />
      <path d="M4 7.3 12 12l8-4.7M12 12v9" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 4.5A3 3 0 0 0 6.6 7 2.8 2.8 0 0 0 5 9.5c0 .9.4 1.7 1 2.2A3 3 0 0 0 6.4 16a3 3 0 0 0 3.1 2.7V4.5Z" />
      <path d="M14.5 4.5A3 3 0 0 1 17.4 7a2.8 2.8 0 0 1 1.6 2.5c0 .9-.4 1.7-1 2.2a3 3 0 0 1-.4 4.3 3 3 0 0 1-3.1 2.7V4.5Z" />
      <path d="M12 3.5v17" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
      <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m4 12.5 8 4.3 8-4.3" />
      <path d="m4 17 8 4.3 8-4.3" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  refresh: (
    <>
      <path d="M20 12a8 8 0 1 1-2.4-5.7" />
      <path d="M20 4.5V10h-5.5" />
    </>
  ),
  desktop: (
    <>
      <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
      <path d="M9 20h6M12 16.5V20" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" />,
  cap: (
    <>
      <path d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z" />
      <path d="M6.5 11v5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-5" />
      <path d="M21.5 9v5" />
    </>
  ),
  star: (
    <path d="m12 3.8 2.6 5.4 5.9.8-4.3 4.1 1.1 5.8-5.3-2.9-5.3 2.9 1.1-5.8L3.5 10l5.9-.8L12 3.8Z" />
  ),
  image: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <circle cx="8.5" cy="10" r="1.6" />
      <path d="m4 17 5-4.5 4 3.5 2.5-2L20 17.5" />
    </>
  ),
}

export function Icon({ name, size = 18, className }: Props) {
  return (
    <svg
      className={className ? `icon ${className}` : 'icon'}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}
