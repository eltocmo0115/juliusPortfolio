import { experience } from '@/data/portfolioData'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function ExperienceSection() {
  const ref = useScrollAnimation()

  return (
    <section id="experience" className="section experience-section">
      <div className="page-wrap">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">02 / Experience</p>
            <h2>Learning on the job</h2>
          </div>
          <p>Hands-on experience building and supporting digital services in a real public-sector environment.</p>
        </div>

        <article className="experience-card animate-on-scroll" ref={ref}>
          <div className="experience-meta">
            <span>{experience.period}</span>
            <p>{experience.type}</p>
          </div>
          <div className="experience-main">
            <p className="experience-office">{experience.team}</p>
            <h3>{experience.role}</h3>
            <p className="experience-organization">{experience.organization}</p>
            <p className="experience-summary">{experience.summary}</p>
            <a className="experience-link" href={experience.reportUrl} target="_blank" rel="noreferrer">
              View practicum report <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="experience-details">
            <p>Selected contributions</p>
            <ul>
              {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <div className="experience-tools" aria-label="Tools used">
              {experience.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ExperienceSection
