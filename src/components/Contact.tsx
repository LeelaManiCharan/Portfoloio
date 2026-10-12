import { Icon } from './Icon'
import { profile } from '../data/profile'
import { useCopy } from '../hooks/useCopy'

const cards = [
  profile.links.email,
  profile.links.phone,
  profile.links.linkedin,
  profile.links.location,
]

export function Contact() {
  const { copied, copy } = useCopy()

  return (
    <section id="contact" className="section contact">
      <div className="contact__panel" data-reveal="up">
        <p className="eyebrow eyebrow--invert">
          <Icon name="sparkle" size={14} />
          Let's build something
        </p>
        <h2 className="contact__title">
          Got a role or a product that needs
          <span> shipping</span>?
        </h2>
        <p className="contact__text">
          I am {profile.availability.toLowerCase()} — full-stack, front-end heavy,
          or AI/accessibility tooling. Reach out and I will reply the same day.
        </p>

        <div className="contact__actions">
          <a className="button button--invert" href={profile.links.email.href}>
            <Icon name="mail" size={16} />
            {profile.links.email.value}
          </a>
          <a
            className="button button--outline-invert"
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="download" size={16} />
            Download resume
          </a>
        </div>

        <ul className="contact__cards">
          {cards.map((card) => (
            <li key={card.label}>
              <a
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact__card-icon">
                  <Icon name={card.icon} size={16} />
                </span>
                <span className="contact__card-body">
                  <small>{card.label}</small>
                  <strong>{card.value}</strong>
                </span>
              </a>
              <button
                type="button"
                className="contact__copy"
                onClick={() => copy(card.value ?? card.href)}
                aria-label={`Copy ${card.label}`}
                title={`Copy ${card.label}`}
              >
                <Icon
                  name={copied === (card.value ?? card.href) ? 'check' : 'copy'}
                  size={15}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
