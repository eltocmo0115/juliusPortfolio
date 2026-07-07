import { useMemo } from 'react'
import { profile, programmingSkills, softwareProjects, capstoneProject } from '@/data/portfolioData'
import { buildCvLines } from '@/utils/pdfUtils'
import { usePdfUrl } from '@/hooks/usePdfUrl'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import heroImg from '@/assets/hero.jpg'

/**
 * Hero section — name, role, CTA buttons, social links, status tag,
 * profile photo with repositioned location badge, and scroll indicator.
 */
function HeroSection() {
  const cvLines = useMemo(
    () => buildCvLines({ profile, programmingSkills, softwareProjects, capstoneProject }),
    [],
  )
  const cvPdfUrl = usePdfUrl(cvLines)
  const textRef  = useScrollAnimation({ threshold: 0.1 })
  const photoRef = useScrollAnimation({ threshold: 0.1 })

  const avatarSrc = profile.photo ?? heroImg

  return (
    <section className="hero-section" id="hero">
      {/* Subtle decorative blobs for background depth */}
      <div className="hero-blob hero-blob--a" aria-hidden="true" />
      <div className="hero-blob hero-blob--b" aria-hidden="true" />

      <div className="container position-relative">
        <div className="row align-items-center g-5">

          {/* Left: text block */}
          <div className="col-lg-7 animate-on-scroll" ref={textRef}>

            {/* Status indicator */}
            <div className="hero-status mb-3">
              <span className="hero-status__dot" aria-hidden="true" />
              Open to internship opportunities
            </div>

            <h1 className="hero-title">{profile.name}</h1>
            <p className="hero-lead">{profile.role}</p>
            <p className="hero-copy">{profile.subtitle}</p>

            {/* CTA buttons — Primary > Secondary > Tertiary */}
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a
                className="btn hero-btn-primary btn-lg px-4"
                href={cvPdfUrl}
                download="Curriculum-Vitae.pdf"
                id="hero-download-cv"
              >
                <i className="bi bi-download me-2" aria-hidden="true" />
                Download CV
              </a>
              <a className="btn hero-btn-secondary btn-lg px-4" href="#projects" id="hero-view-projects">
                <i className="bi bi-grid me-2" aria-hidden="true" />
                View Projects
              </a>
              <a
                className="btn hero-btn-tertiary btn-lg px-4"
                href={`mailto:${profile.email}`}
                id="hero-contact"
              >
                <i className="bi bi-envelope me-2" aria-hidden="true" />
                Contact
              </a>
            </div>

            {/* Social links row */}
            <div className="hero-socials mt-4">
              <a
                className="hero-social-link"
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                id="hero-github"
              >
                <i className="bi bi-github" aria-hidden="true" />
              </a>
              <a
                className="hero-social-link"
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                id="hero-linkedin"
              >
                <i className="bi bi-linkedin" aria-hidden="true" />
              </a>
              <a
                className="hero-social-link"
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                id="hero-email"
              >
                <i className="bi bi-envelope-fill" aria-hidden="true" />
              </a>
            </div>

          </div>

          {/* Right: profile photo */}
          <div className="col-lg-5 d-flex justify-content-center animate-on-scroll" ref={photoRef}>
            <div className="profile-photo-wrap">
              <img
                src={avatarSrc}
                alt={`${profile.name} — profile photo`}
                className="profile-photo"
              />
              {/* Location tag sits cleanly below the photo */}
              <div className="profile-photo__location">
                <span aria-hidden="true">📍</span>
                {profile.location}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll-down indicator */}
      <a className="hero-scroll-indicator" href="#skills" aria-label="Scroll to skills">
        <span className="hero-scroll-indicator__label">Scroll</span>
        <span className="hero-scroll-indicator__arrow" aria-hidden="true">
          <i className="bi bi-chevron-down" />
        </span>
      </a>
    </section>
  )
}

export default HeroSection
