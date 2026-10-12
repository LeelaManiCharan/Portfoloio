import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { experience } from '../data/profile'
import { resolveLogo } from '../lib/images'

function initials(company: string) {
  return company
    .replace(/[^A-Za-z ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')
}

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <SectionHeading
        index="02"
        title="Experience"
        kicker="Production work, with the numbers attached."
      />

      <ol className="timeline">
        {experience.map((job) => {
          const logo = resolveLogo(job.logo)
          return (
            <li className="timeline__item" key={job.company} data-reveal="up">
              <div className="timeline__marker" aria-hidden="true">
                <span className="timeline__dot" />
              </div>

              <article className="card job">
                <header className="job__header">
                  <div className="job__identity">
                    <span className="job__logo">
                      {logo ? (
                        <img src={logo} alt="" loading="lazy" />
                      ) : (
                        initials(job.company)
                      )}
                    </span>
                    <div>
                      <h3 className="job__company">{job.company}</h3>
                      <p className="job__title">{job.title}</p>
                    </div>
                  </div>
                  <div className="job__meta">
                    <span className="pill">{job.period}</span>
                    <span className="job__meta-line">
                      {job.type} · {job.location}
                    </span>
                  </div>
                </header>

                <ul className="job__bullets">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>
                      <Icon name="arrow" size={14} className="job__bullet-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <ul className="tag-list">
                  {job.tags.map((tag) => (
                    <li className="tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
