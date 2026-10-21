
import { experiences } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <span className="mono rose">
        Professional Journey
      </span>

      <h2 style={{ marginTop: 22 }}>
        Beyond the <em>projects.</em>
      </h2>

      <p className="experience-intro">
        Where data meets real-world experience.
      </p>

      <div className="experience-timeline">
        {experiences.map((exp, i) => (
          <div className="experience-item" key={i}>
            <div className="experience-dot" />

            <article className="experience-card glass">
              <span className="mono rose">
                {exp.period}
              </span>

              <h3>{exp.role}</h3>

              <div className="experience-company">
                <strong>{exp.company}</strong>
                <span> · {exp.location}</span>
              </div>

              <p>{exp.description}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
