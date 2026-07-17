import { education, profile } from '@/data/portfolioData'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function AboutSection() {
  const ref = useScrollAnimation()
  return (
    <section id="about" className="section about-section">
      <div className="page-wrap about-grid animate-on-scroll" ref={ref}>
        <div>
          <p className="section-kicker">01 / About</p>
          <h2>Curious by nature.<br />Intentional by design.</h2>
        </div>
        <div className="about-copy">
          <p className="lead-copy">
            I’m an Information Technology student in the Philippines, building experience across web systems and Android interfaces.
          </p>
          <p>
            I learn by turning requirements into working prototypes—mapping the workflow, shaping a clear interface, and connecting the data and logic underneath. I care about the full experience: how a product looks, how it behaves, and how confidently someone can use it.
          </p>
          <div className="education-card">
            <p>Education</p>
            <h3>{education.degree}</h3>
            <strong>{education.school}</strong>
            <span>{education.college} · {education.academicYear}</span>
          </div>
          <div className="about-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={profile.credly} target="_blank" rel="noreferrer">Credly <span aria-hidden="true">↗</span></a>
            <a href={`mailto:${profile.email}`}>Email <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
