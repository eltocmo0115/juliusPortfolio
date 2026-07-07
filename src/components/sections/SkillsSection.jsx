import SectionHeading from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { programmingSkills } from '@/data/portfolioData'

/**
 * Skills section — progress-bar cards for each programming skill.
 */
function SkillsSection() {
  const ref = useScrollAnimation()
  return (
    <section id="skills" className="content-section">
      <div className="container">
        <SectionHeading
          eyebrow="Programming Skills"
          title="Technical Skills"
          description=""
        />
        <div className="row g-4 animate-on-scroll" ref={ref}>
          {programmingSkills.map((skill) => (
            <div className="col-sm-6 col-lg-4" key={skill.id}>
              <div className="skill-card card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="h5 mb-0">{skill.name}</h3>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div
                    className="progress skill-progress"
                    role="progressbar"
                    aria-label={skill.name}
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
