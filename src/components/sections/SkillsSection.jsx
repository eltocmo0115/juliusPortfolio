import { programmingSkills } from '@/data/portfolioData'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function SkillsSection() {
  const ref = useScrollAnimation()
  return (
    <section id="skills" className="section skills-section">
      <div className="page-wrap">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">03 / Toolkit</p>
            <h2>Tools I build with</h2>
          </div>
          <p>A practical stack for designing, building, and shipping responsive web systems.</p>
        </div>
        <div className="skills-grid animate-on-scroll" ref={ref}>
          {programmingSkills.map((skill, index) => (
            <article className="skill-item" key={skill.id}>
              <span className="skill-number">0{index + 1}</span>
              <span className="skill-mark" aria-hidden="true">{skill.mark}</span>
              <div><h3>{skill.name}</h3><p>{skill.group}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
