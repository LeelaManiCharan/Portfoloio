import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { skillGroups } from '../data/profile'

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <SectionHeading
        index="04"
        title="Skills"
        kicker="The toolkit, grouped the way I actually use it."
      />

      <div className="skills__grid">
        {skillGroups.map((group, i) => (
          <article
            className="card skill-card"
            key={group.title}
            data-reveal="up"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <header>
              <span className="skill-card__icon">
                <Icon name={group.icon} size={18} />
              </span>
              <h3>{group.title}</h3>
            </header>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li className="tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
