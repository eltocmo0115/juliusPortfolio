import SectionHeading from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { programmingSkills } from '@/data/portfolioData'

// Mapping of skill IDs to Bootstrap Icons
const SKILL_ICONS = {
  'html-css': 'bi-code-slash',
  'javascript': 'bi-braces',
  'react': 'bi-cpu',
  'bootstrap': 'bi-bootstrap',
  'php': 'bi-terminal',
  'mysql': 'bi-database',
  'figma': 'bi-bezier2',
}

function getProficiencyLabel(level) {
  if (level >= 90) return 'Advanced'
  if (level >= 80) return 'Proficient'
  return 'Intermediate'
}

/**
 * Skills section — Minimalist grid displaying clean icon badges
 * and proficiency levels instead of progress bars.
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
              <div className="skill-card card h-100 border-0">
                <div className="card-body p-4 d-flex align-items-center gap-3">
                  <div className="skill-icon-wrap" aria-hidden="true">
                    <i className={`bi ${SKILL_ICONS[skill.id] || 'bi-code-slash'}`} />
                  </div>
                  <div className="flex-grow-1">
                    <h3 className="h6 mb-1 fw-bold text-dark">{skill.name}</h3>
                    <span className="skill-level-text">{getProficiencyLabel(skill.level)}</span>
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
