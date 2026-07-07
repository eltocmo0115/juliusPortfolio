import SectionHeading from '@/components/ui/SectionHeading'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { hardwareUsed } from '@/data/portfolioData'

/**
 * Hardware section — numbered cards for each device used during development.
 */
function HardwareSection() {
  const ref = useScrollAnimation()
  return (
    <section id="hardware" className="content-section content-section--soft">
      <div className="container">
        <SectionHeading
          eyebrow="Hardware Used"
          title="Devices and Development Equipment"
          description="A simple summary of the hardware used while creating, testing, and presenting the portfolio."
        />
        <div className="row g-4 animate-on-scroll" ref={ref}>
          {hardwareUsed.map((item, index) => (
            <div className="col-sm-6 col-lg-4" key={item.id}>
              <div className="hardware-card card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="hardware-card__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="mb-0 fw-semibold">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HardwareSection
