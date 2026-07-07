import { useMemo } from 'react'
import { profile, programmingSkills, softwareProjects, capstoneProject } from '@/data/portfolioData'
import { buildCvLines } from '@/utils/pdfUtils'
import { usePdfUrl } from '@/hooks/usePdfUrl'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import heroImg from '@/assets/hero.jpg'

/**
 * Hero section — name, role, CTA buttons, focus chips, and a profile photo.
 * Swap `heroImg` for your real photo by replacing hero.png in src/assets/.
 * Or set `profile.photo` to an imported image and pass it as `src` instead.
 */
function HeroSection() {
  const cvLines = useMemo(
    () => buildCvLines({ profile, programmingSkills, softwareProjects, capstoneProject }),
    [],
  )
  const cvPdfUrl = usePdfUrl(cvLines)
  const textRef  = useScrollAnimation({ threshold: 0.1 })
  const photoRef = useScrollAnimation({ threshold: 0.1 })

  // Use profile.photo if set, otherwise fall back to the hero.png asset
  const avatarSrc = profile.photo ?? heroImg

  return (
    <section className="hero-section" id="hero">
      <div className="hero-glow hero-glow--left" aria-hidden="true" />
      <div className="hero-glow hero-glow--right" aria-hidden="true" />
      <div className="container position-relative">
        <div className="row align-items-center g-5">

          {/* Left: text block */}
          <div className="col-lg-7 animate-on-scroll" ref={textRef}>
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

          </div>

          {/* Right: profile photo */}
          <div className="col-lg-5 d-flex justify-content-center animate-on-scroll" ref={photoRef}>
            <div className="profile-photo-wrap">
              <img
                src={avatarSrc}
                alt={`${profile.name} — profile photo`}
                className="profile-photo"
              />
              {/* Location badge overlaid on the photo */}
              <span className="profile-photo__badge">{profile.location}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
