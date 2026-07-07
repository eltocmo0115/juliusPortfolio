import { useMemo } from 'react'
import { profile, programmingSkills, softwareProjects, capstoneProject } from '@/data/portfolioData'
import { buildCvLines } from '@/utils/pdfUtils'
import { usePdfUrl } from '@/hooks/usePdfUrl'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'


/**
 * Hero section — name, role, CTA buttons, focus chips, and the stats panel.
 * Stats are derived from real data arrays so they never go stale.
 */
function HeroSection() {
  const cvLines = useMemo(
    () => buildCvLines({ profile, programmingSkills, softwareProjects, capstoneProject }),
    [],
  )
  const cvPdfUrl = usePdfUrl(cvLines)
  const textRef = useScrollAnimation({ threshold: 0.1 })
  const panelRef = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="hero-section" id="hero">
      <div className="hero-glow hero-glow--left" aria-hidden="true" />
      <div className="hero-glow hero-glow--right" aria-hidden="true" />
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          {/* Left: text block */}
          <div className="col-lg-7 animate-on-scroll" ref={textRef}>
            <p className="eyebrow">Online Website Portfolio</p>
            <h1 className="display-4 fw-bold hero-title">{profile.name}</h1>
            <p className="lead hero-lead">{profile.role}</p>
            <p className="hero-copy">{profile.subtitle}</p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a
                className="btn btn-light btn-lg px-4"
                href={cvPdfUrl}
                download="Curriculum-Vitae.pdf"
              >
                <i className="bi bi-download me-2" aria-hidden="true" />
                Download CV
              </a>
              <a className="btn btn-outline-light btn-lg px-4" href="#projects">
                View Projects
              </a>
              <a
                className="btn btn-outline-light btn-lg px-4"
                href={`mailto:${profile.email}`}
              >
                <i className="bi bi-envelope me-2" aria-hidden="true" />
                Contact
              </a>
            </div>

            <div className="d-flex flex-wrap gap-2 mt-4">
              {profile.focus.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: stats panel */}
          <div className="col-lg-5 animate-on-scroll" ref={panelRef}>
            <div className="hero-panel card border-0 shadow-lg">
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <p className="mb-1 text-uppercase small text-secondary fw-semibold">
                      Portfolio Profile
                    </p>
                    <p className="h4 mb-0 fw-bold">{profile.name}</p>
                  </div>
                  <span className="hero-badge">{profile.location}</span>
                </div>

                <div className="hero-panel__grid">
                  <div className="hero-panel__stat">
                    <span>Sections</span>
                    <strong>{softwareProjects.length + 3}</strong>
                  </div>
                  <div className="hero-panel__stat">
                    <span>Projects</span>
                    <strong>{softwareProjects.length}</strong>
                  </div>
                  <div className="hero-panel__stat">
                    <span>Skills</span>
                    <strong>{programmingSkills.length}</strong>
                  </div>
                  <div className="hero-panel__stat">
                    <span>CV</span>
                    <strong>Ready</strong>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="mb-2 text-secondary small text-uppercase fw-semibold">
                    Contact
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="fw-semibold hero-email-link"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
