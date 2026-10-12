import { Icon } from './Icon'
import { ImageFrame } from './ImageFrame'
import { SectionHeading } from './SectionHeading'
import { profile } from '../data/profile'

const focus = [
  {
    icon: 'layers' as const,
    title: 'Full-stack delivery',
    text: 'React front ends, BFF layers and .NET Core / Node services that talk to each other cleanly.',
  },
  {
    icon: 'eye' as const,
    title: 'Accessibility first',
    text: 'WCAG 2.1 built into pipelines, not bolted on — including a custom A11y MCP server.',
  },
  {
    icon: 'brain' as const,
    title: 'AI workflows',
    text: 'MCP tooling, computer-vision pipelines and ML models wired into real products.',
  },
]

export function About() {
  return (
    <section id="about" className="section about">
      <SectionHeading
        index="01"
        title="About"
        kicker="Who you are hiring, in short."
      />

      <div className="about__grid">
        <div className="about__copy">
          {profile.aboutParagraphs.map((text, i) => (
            <p key={i} data-reveal="up" style={{ transitionDelay: `${i * 60}ms` }}>
              {text}
            </p>
          ))}

          <ul className="about__focus">
            {focus.map((item, i) => (
              <li
                key={item.title}
                data-reveal="up"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="about__focus-icon">
                  <Icon name={item.icon} size={18} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="about__aside" data-reveal="right">
          <ImageFrame
            name="about"
            ratio="4 / 3"
            caption="Presenting at the lab"
            hint="A candid or workspace shot works well here"
          />
          <blockquote className="about__quote">
            <p>
              “Ship it, measure it, then make it accessible to everyone — in that
              order it actually happens.”
            </p>
          </blockquote>
        </aside>
      </div>
    </section>
  )
}
