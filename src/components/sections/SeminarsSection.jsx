import SectionHeading from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { seminars } from '@/data/portfolioData'

/**
 * Seminars section — numbered cards for each seminar/workshop attended.
 */
function SeminarsSection() {
  const ref = useScrollAnimation()
  return (
    <section id="seminars" className="content-section">
      <div className="container">
        <SectionHeading
          eyebrow="Seminars"
          title="Talks and Learning Sessions"
          description="Seminars, workshops, and school events that contributed to the portfolio journey."
        />
        <div className="row g-4 animate-on-scroll" ref={ref}>
          {seminars.map((seminar, index) => (
            <div className="col-lg-6" key={seminar.id}>
              <div className="seminar-card card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex gap-3 align-items-start">
                    <div className="seminar-card__number" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="h5 fw-bold mb-0">{seminar.label}</h3>
                    </div>
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

export default SeminarsSection
