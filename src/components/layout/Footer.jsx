import { useMemo } from 'react'
import { profile, programmingSkills, softwareProjects, capstoneProject } from '@/data/portfolioData'
import { buildCvLines } from '@/utils/pdfUtils'
import { usePdfUrl } from '@/hooks/usePdfUrl'

/**
 * Site footer — name, tagline, social links, action buttons, copyright.
 * Social URLs are pulled from profile so you only update them in one place.
 */
function Footer() {
  const cvLines = useMemo(
    () => buildCvLines({ profile, programmingSkills, softwareProjects, capstoneProject }),
    [],
  )
  const cvPdfUrl = usePdfUrl(cvLines)

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">

        {/* Main row — identity left, actions right */}
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-4">

          {/* Left: name + one-line tagline */}
          <div>
            <p className="h5 fw-bold mb-1">{profile.name}</p>
            <p className="mb-0 footer-tagline">
              IT Student &amp; Software Developer — based in {profile.location}
            </p>
          </div>

          {/* Right: social icons + action buttons */}
          <div className="d-flex flex-wrap align-items-center gap-2">

            {/* Social icons */}
            <a
              className="hero-social-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              id="footer-github"
            >
              <i className="bi bi-github" aria-hidden="true" />
            </a>
            <a
              className="hero-social-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              id="footer-linkedin"
            >
              <i className="bi bi-linkedin" aria-hidden="true" />
            </a>

            {/* Divider */}
            <span className="footer-divider" aria-hidden="true" />

            {/* Action buttons */}
            <a
              className="btn btn-outline-light"
              href={`mailto:${profile.email}`}
              id="footer-contact"
            >
              <i className="bi bi-envelope me-2" aria-hidden="true" />
              Contact
            </a>
            <a
              className="btn btn-outline-light"
              href={cvPdfUrl}
              download="Curriculum-Vitae.pdf"
              id="footer-download-cv"
            >
              <i className="bi bi-download me-2" aria-hidden="true" />
              Download CV
            </a>
            <a className="btn btn-light" href="#top" id="footer-back-top">
              <i className="bi bi-arrow-up me-1" aria-hidden="true" />
              Top
            </a>
          </div>
        </div>

        {/* Copyright line */}
        <p className="site-footer__credit">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Bootstrap.
        </p>

      </div>
    </footer>
  )
}

export default Footer
