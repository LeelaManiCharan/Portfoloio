import { Icon } from './Icon'
import { ImageFrame } from './ImageFrame'
import { SectionHeading } from './SectionHeading'
import { education, leadership } from '../data/profile'

export function Education() {
  return (
    <section id="education" className="section education">
      <SectionHeading
        index="05"
        title="Education & Leadership"
        kicker="Where the fundamentals came from."
      />

      <div className="education__grid">
        <div className="education__col">
          {education.map((item) => (
            <article className="card edu" key={item.school} data-reveal="up">
              <span className="edu__icon">
                <Icon name="cap" size={20} />
              </span>
              <div className="edu__body">
                <h3>{item.degree}</h3>
                <p className="edu__spec">{item.specialisation}</p>
                <p className="edu__school">
                  {item.school} · {item.location}
                </p>
                <div className="edu__meta">
                  <span className="pill">{item.period}</span>
                  <span className="pill pill--accent">GPA {item.score}</span>
                </div>
              </div>
            </article>
          ))}

          {leadership.map((item) => (
            <article className="card edu" key={item.org} data-reveal="up">
              <span className="edu__icon edu__icon--alt">
                <Icon name="star" size={20} />
              </span>
              <div className="edu__body">
                <h3>{item.role}</h3>
                <p className="edu__spec">{item.org}</p>
                <p className="edu__school">{item.location}</p>
                <p className="edu__note">{item.note}</p>
                <div className="edu__meta">
                  <span className="pill">{item.period}</span>
                  <span className="pill">Volunteering & Leadership</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="education__aside" data-reveal="right">
          <ImageFrame
            name="aura-club"
            ratio="4 / 3"
            caption="AURA Student Club"
            hint="Team or event photo"
          />
          <ImageFrame
            name="certificate"
            ratio="4 / 3"
            caption="Certificate / Award"
            hint="Any recognition you want to show"
          />
        </div>
      </div>
    </section>
  )
}
