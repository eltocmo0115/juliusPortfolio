import { profile } from '@/data/portfolioData'
import { usePdfUrl } from '@/hooks/usePdfUrl'
import { buildCvLines } from '@/utils/pdfUtils'
import {
  programmingSkills,
  softwareProjects,
  capstoneProject,
} from '@/data/portfolioData'

const cvLines = buildCvLines({ profile, programmingSkills, softwareProjects, capstoneProject })

/**
 * Site footer — branding, CV download, and back-to-top link.
 */
function Footer() {
  const cvPdfUrl = usePdfUrl(cvLines)

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">
          <div>
            <p className="h5 fw-bold mb-1"></p>
            <p className="mb-0 text-secondary">

            </p>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <a className="btn btn-outline-light" href={`mailto:${profile.email}`}>
              <i className="bi bi-envelope me-2" aria-hidden="true" />
              Contact
            </a>
            <a className="btn btn-outline-light" href={cvPdfUrl} download="Curriculum-Vitae.pdf">
              <i className="bi bi-download me-2" aria-hidden="true" />
              Download CV
            </a>
            <a className="btn btn-light" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
