import { Icon } from './Icon'
import { ImageFrame } from './ImageFrame'
import { profile, stats } from '../data/profile'

const marquee = [
  'React',
  '.NET Core',
  'C#',
  'TypeScript',
  'Python',
  'Microservices',
  'BFF Architecture',
  'MCP',
  'WCAG 2.1',
  'MERN',
  'Computer Vision',
]

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="badge" data-reveal="up">
            <span className="badge__dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <p className="hero__greeting" data-reveal="up">
            <span aria-hidden="true" className="hero__greeting-rule" />
            {profile.greeting}
          </p>

          <h1 className="hero__name" data-reveal="up">
            {profile.nameLines.map((line, i) => (
              <span
                key={line}
                className={
                  i === profile.nameLines.length - 1
                    ? 'hero__name-line hero__name-line--accent'
                    : 'hero__name-line'
                }
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__role" data-reveal="up">
            {profile.role}
            <span className="hero__role-sep" aria-hidden="true">
              /
            </span>
            <em>{profile.tagline}</em>
          </p>

          <p className="hero__headline" data-reveal="up">
            {profile.headline[0]}{' '}
            <em>{profile.headline[1]}</em>
          </p>

          <p className="hero__intro" data-reveal="up">
            {profile.heroIntro}
          </p>

          <div className="hero__actions" data-reveal="up">
            <a className="button button--primary" href="#projects">
              See the live demo
              <Icon name="play" size={15} />
            </a>
            <a
              className="button button--ghost"
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="download" size={16} />
              Resume
            </a>
            <a
              className="button button--text"
              href={profile.links.linkedin.href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" size={16} />
              LinkedIn
            </a>
          </div>

          <ul className="hero__contact" data-reveal="up">
            <li>
              <a href={profile.links.email.href}>
                <Icon name="mail" size={15} />
                {profile.links.email.value}
              </a>
            </li>
            <li>
              <a href={profile.links.phone.href}>
                <Icon name="phone" size={15} />
                {profile.links.phone.value}
              </a>
            </li>
            <li>
              <span>
                <Icon name="pin" size={15} />
                {profile.location}
              </span>
            </li>
          </ul>
        </div>

        <div className="hero__visual" data-reveal="right">
          <div className="hero__portrait">
            <ImageFrame
              name="portrait"
              ratio="4 / 5"
              caption="Portrait"
              hint="Save your photo here and it shows up"
              alt={`${profile.name}, ${profile.role}`}
              className="frame--portrait"
              showCaption={false}
            />
            <div className="hero__portrait-grain" aria-hidden="true" />
          </div>

          <div className="hero__chip hero__chip--one">
            <Icon name="sparkle" size={15} />
            <span>
              <strong>125k+</strong> clicks shipped
            </span>
          </div>
          <div className="hero__chip hero__chip--two">
            <Icon name="eye" size={15} />
            <span>
              <strong>A11y</strong> MCP author
            </span>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div className="marquee__group" key={copy}>
              {marquee.map((item) => (
                <span key={`${copy}-${item}`} className="marquee__item">
                  {item}
                  <i>•</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <dl className="stats">
        {stats.map((stat, i) => (
          <div
            className={`stats__item stats__item--${stat.accent}`}
            key={stat.label}
            data-reveal="up"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <dt>{stat.value}</dt>
            <dd>{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
