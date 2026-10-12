import { Icon } from './Icon'
import {
  education,
  experience,
  leadership,
  profile,
  projects,
  skillGroups,
} from '../data/profile'

/**
 * Print-ready resume. Opened by every "Resume" button on the site.
 * "Save as PDF" uses the browser print dialog, so there is no stale PDF file
 * to keep in sync with src/data/profile.ts.
 */
export function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-bar">
        <a className="button button--ghost" href="/">
          <Icon name="arrow" size={15} className="resume-bar__back" />
          Back to site
        </a>
        <button
          type="button"
          className="button button--primary"
          onClick={() => window.print()}
        >
          <Icon name="download" size={15} />
          Save as PDF
        </button>
      </div>

      <article className="resume" lang="en">
        <header className="resume__header">
          <h1>{profile.name}</h1>
          <p className="resume__role">
            {profile.role} | {profile.tagline}
          </p>
          <ul className="resume__contact">
            <li>{profile.location}</li>
            <li>
              <a href={profile.links.phone.href}>{profile.links.phone.value}</a>
            </li>
            <li>
              <a href={profile.links.email.href}>{profile.links.email.value}</a>
            </li>
            <li>
              <a href={profile.links.linkedin.href}>
                {profile.links.linkedin.value}
              </a>
            </li>
          </ul>
        </header>

        <section className="resume__section">
          <h2>Summary</h2>
          <p>{profile.summary}</p>
        </section>

        <section className="resume__section">
          <h2>Work Experience</h2>
          {experience.map((job) => (
            <div className="resume__entry" key={job.company}>
              <div className="resume__entry-head">
                <h3>
                  {job.title} — <span>{job.company}</span>
                </h3>
                <span className="resume__dates">{job.period}</span>
              </div>
              <p className="resume__meta">
                {job.type} · {job.location}
              </p>
              <ul className="resume__bullets">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume__section">
          <h2>Skills</h2>
          <dl className="resume__skills">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <dt>{group.title}:</dt>
                <dd>{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="resume__section">
          <h2>Projects</h2>
          {projects.map((project) => (
            <div className="resume__entry" key={project.slug}>
              <div className="resume__entry-head">
                <h3>
                  {project.name}
                  {project.demoUrl && (
                    <>
                      {' — '}
                      <a href={project.demoUrl}>
                        {project.demoUrl.replace(/^https?:\/\//, '')}
                      </a>
                    </>
                  )}
                </h3>
                <span className="resume__dates">{project.period}</span>
              </div>
              <ul className="resume__bullets">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume__section">
          <h2>Education</h2>
          {education.map((item) => (
            <div className="resume__entry" key={item.school}>
              <div className="resume__entry-head">
                <h3>
                  {item.degree} ({item.specialisation})
                </h3>
                <span className="resume__dates">{item.period}</span>
              </div>
              <p className="resume__meta">
                {item.school} · {item.location} · GPA: {item.score}
              </p>
            </div>
          ))}
        </section>

        <section className="resume__section">
          <h2>Volunteering & Leadership</h2>
          {leadership.map((item) => (
            <div className="resume__entry" key={item.org}>
              <div className="resume__entry-head">
                <h3>
                  {item.role} — <span>{item.org}</span>
                </h3>
                <span className="resume__dates">{item.period}</span>
              </div>
              <p className="resume__meta">{item.location}</p>
            </div>
          ))}
        </section>
      </article>
    </div>
  )
}
