 import { useEffect, useState } from 'react'
import { Icon } from './Icon'
import { navLinks, profile } from '../data/profile'
import { resolveImage } from '../lib/images'
import type { Theme } from '../hooks/useTheme'

type Props = {
  active: string
  theme: Theme
  onToggleTheme: () => void
}

export function Nav({ active, theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false)
  const [lifted, setLifted] = useState(false)
  const portrait = resolveImage('portrait')

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav${lifted ? ' nav--lifted' : ''}`}>
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <div className="nav__inner">
        <a className="nav__brand" href="#home" aria-label="Back to top">
          {portrait ? (
            <img
              className="nav__avatar"
              src={portrait}
              alt={profile.name}
              width="40"
              height="40"
            />
          ) : (
            <span className="nav__monogram">{profile.initials}</span>
          )}
          <span className="nav__brand-text">
            <strong>Leela Mani Charan</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : undefined}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            <Icon name={theme === 'light' ? 'moon' : 'sun'} size={18} />
          </button>

          <a className="button button--primary nav__cta" href="#contact">
            Hire me
            <Icon name="arrow" size={16} />
          </a>

          <button
            type="button"
            className="icon-button nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`nav__drawer${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setOpen(false)}
            className={active === link.id ? 'is-active' : undefined}
          >
            <span>{link.label}</span>
            <Icon name="arrow" size={16} />
          </a>
        ))}
        <a
          className="button button--primary"
          href={profile.resumeHref}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <Icon name="download" size={16} />
          Download resume
        </a>
      </div>
    </header>
  )
}
