import { useState } from 'react'
import { Icon } from './Icon'
import { ImageFrame } from './ImageFrame'
import { LiveDemo } from './LiveDemo'
import { Lightbox } from './Lightbox'
import { SectionHeading } from './SectionHeading'
import { projects } from '../data/profile'

export function Projects() {
  const [zoom, setZoom] = useState<string | null>(null)
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section projects">
      <SectionHeading
        index="03"
        title="Projects"
        kicker="One of them is running live in the window below."
      />

      {featured.map((project) => (
        <article className="featured" key={project.slug}>
          <div className="featured__head" data-reveal="up">
            <div>
              <p className="eyebrow">
                <Icon name="star" size={14} />
                Featured project
              </p>
              <h3 className="featured__title">{project.name}</h3>
              <p className="featured__period">{project.period}</p>
              <p className="featured__blurb">{project.blurb}</p>
            </div>

            {project.metrics && (
              <ul className="featured__metrics">
                {project.metrics.map((m) => (
                  <li key={m.label}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {project.demoUrl && (
            <LiveDemo url={project.demoUrl} title={project.name} />
          )}

          <div className="featured__body">
            <ul className="featured__bullets" data-reveal="up">
              {project.bullets.map((bullet, i) => (
                <li key={i}>
                  <Icon name="check" size={14} className="featured__check" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="featured__side" data-reveal="up">
              <h4 className="mini-heading">Stack</h4>
              <ul className="tag-list">
                {project.stack.map((tech) => (
                  <li className="tag" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="featured__links">
                {project.demoUrl && (
                  <a
                    className="button button--primary"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit live site
                    <Icon name="external" size={15} />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    className="button button--ghost"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="github" size={15} />
                    Source
                  </a>
                )}
              </div>
            </div>
          </div>

          {project.shots && (
            <div className="shots">
              {project.shots.map((shot, i) => (
                <div
                  key={shot.image}
                  data-reveal="up"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <ImageFrame
                    name={shot.image}
                    caption={shot.caption}
                    ratio="16 / 10"
                    hint="Screenshot slot"
                    className="frame--shot"
                    onOpen={setZoom}
                  />
                </div>
              ))}
            </div>
          )}
        </article>
      ))}

      <div className="project-grid">
        {rest.map((project, i) => (
          <article
            className="card project"
            key={project.slug}
            data-reveal="up"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <ImageFrame
              name={project.image}
              ratio="16 / 10"
              hint="Project cover"
              caption={project.name}
              className="frame--cover"
              onOpen={setZoom}
            />

            <div className="project__body">
              <header>
                <h3>{project.name}</h3>
                <p className="project__period">{project.period}</p>
              </header>
              <p className="project__blurb">{project.blurb}</p>

              {project.metrics && (
                <ul className="project__metrics">
                  {project.metrics.map((m) => (
                    <li key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </li>
                  ))}
                </ul>
              )}

              <details className="project__details">
                <summary>
                  What I built
                  <Icon name="arrow" size={14} />
                </summary>
                <ul>
                  {project.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </details>

              <ul className="tag-list">
                {project.stack.map((tech) => (
                  <li className="tag" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>

              {project.demoUrl && (
                <a
                  className="button button--text"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live site
                  <Icon name="external" size={14} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </section>
  )
}
