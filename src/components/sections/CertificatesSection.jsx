import SectionHeading from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { certificates } from '@/data/portfolioData'

/**
 * Certificates section — icon cards for each certification.
 */
function CertificatesSection() {
  const ref = useScrollAnimation()
  return (
    <section id="certificates" className="content-section content-section--soft">
      <div className="container">
        <SectionHeading
          eyebrow="Certificates"
          title="Training and Certifications"
          description="Courses and certifications completed throughout the IT program."
        />
        <div className="row g-4 animate-on-scroll" ref={ref}>
          {certificates.map((cert) => (
            <div className="col-sm-6 col-lg-4" key={cert.id}>
              <div className="list-card card h-100 border-0 shadow-sm">
                <div className="card-body p-4 d-flex gap-3 align-items-start">
                  <div className="list-card__icon" aria-hidden="true">
                    <i className="bi bi-patch-check-fill" />
                  </div>
                  <p className="mb-0 fw-semibold">{cert.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificatesSection
