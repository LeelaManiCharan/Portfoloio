import { Icon } from './Icon'
import { navLinks, profile } from '../data/profile'
import { resolveImage } from '../lib/images'

export function Footer() {
  const portrait = resolveImage('portrait')

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          {portrait ? (
            <img
              className="footer__avatar"
              src={portrait}
              alt={profile.name}
              width="56"
              height="56"
              loading="lazy"
            />
          ) : (
            <span className="nav__monogram">{profile.initials}</span>
          )}
          <div>
            <strong>{profile.name}</strong>
            <span>
              {profile.role} · {profile.tagline}
            </span>
            <a className="footer__mail" href={profile.links.email.href}>
              {profile.links.email.value}
            </a>
          </div>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <a
            href={profile.links.linkedin.href}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-button"
          >
            <Icon name="linkedin" size={18} />
          </a>
          <a
            href={profile.links.email.href}
            aria-label="Email"
            className="icon-button"
          >
            <Icon name="mail" size={18} />
          </a>
          <a
            href={profile.links.phone.href}
            aria-label="Phone"
            className="icon-button"
          >
            <Icon name="phone" size={18} />
          </a>
        </div>
      </div>

      <div className="footer__base">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite and
          a lot of filter coffee.
        </span>
        <a href="#home">
          Back to top
          <Icon name="arrow" size={14} className="footer__up" />
        </a>
      </div>
    </footer>
  )
}
