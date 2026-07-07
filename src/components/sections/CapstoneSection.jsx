import SectionHeading from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { capstoneProject } from '@/data/portfolioData'

/**
 * Capstone section — full-width featured project block using the same
 * field structure as ProjectCard but with a larger, dedicated layout.
 */
function CapstoneSection() {
  const leftRef  = useScrollAnimation({ threshold: 0.08 })
  const rightRef = useScrollAnimation({ threshold: 0.08 })

  return (
    <section id="capstone" className="content-section">
      <div className="container">
        <SectionHeading
          eyebrow="Capstone Project"
          title={capstoneProject.title}
          description="The final-year project — same structure as the earlier software entries with a dedicated full-width layout."
        />

        <div className="row g-4 align-items-stretch">
          {/* Left: details */}
          <div className="col-lg-7 animate-on-scroll" ref={leftRef}>
            <div className="card border-0 shadow-sm h-100 capstone-card">
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                  <span className="badge text-bg-dark-subtle">Capstone Overview</span>
                  <span className="text-uppercase small text-secondary fw-semibold">
                    Final Year Project
                  </span>
                </div>

                {/* Machine Problem */}
                <div className="capstone-block">
                  <p className="project-card__label">Machine Problem</p>
                  <p className="project-card__text">{capstoneProject.machineProblem}</p>
                </div>

                {/* Features */}
                <div className="capstone-block">
                  <p className="project-card__label">Discussion of the Features</p>
                  <div className="row g-3">
                    {capstoneProject.features.map((feature) => (
                      <div className="col-sm-6" key={feature}>
                        <div className="capstone-feature">
                          <i className="bi bi-check2-circle" aria-hidden="true" />
                          <span>{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Software */}
                <div className="capstone-block mb-0">
                  <p className="project-card__label">Software Used</p>
                  <div className="d-flex flex-wrap gap-2">
                    {capstoneProject.softwareUsed.map((tool) => (
                      <span key={tool} className="badge rounded-pill text-bg-light border">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: screenshots */}
          <div className="col-lg-5 animate-on-scroll" ref={rightRef}>
            <div className="card border-0 shadow-sm h-100 screenshot-panel">
              <div className="card-body p-4 p-lg-5">
                <h3 className="h4 fw-bold mb-3">Screenshots of the GUI</h3>
                <div className="screenshot-stack">
                  {capstoneProject.screenshots.map((shot) => (
                    <div key={shot} className="screenshot-frame screenshot-frame--large">
                      <div className="screenshot-frame__window" aria-hidden="true">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <p>{shot}</p>
                    </div>
                  ))}
                </div>
                <p className="text-secondary mt-3 mb-0 small">
                  Replace these preview frames with actual screenshots of the capstone GUI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapstoneSection
