import Navbar              from '@/components/layout/Navbar'
import Footer              from '@/components/layout/Footer'
import HeroSection         from '@/components/sections/HeroSection'
import SkillsSection       from '@/components/sections/SkillsSection'
import CertificatesSection from '@/components/sections/CertificatesSection'
import SeminarsSection     from '@/components/sections/SeminarsSection'
import ProjectsSection     from '@/components/sections/ProjectsSection'
import CapstoneSection     from '@/components/sections/CapstoneSection'
import HardwareSection     from '@/components/sections/HardwareSection'

/**
 * App — layout shell.
 * On desktop: sidebar (fixed left) + scrollable content column on the right.
 * On mobile:  sidebar slides in as a drawer over the content.
 */
function App() {
  return (
    <div className="portfolio-shell">
      {/* Fixed sidebar navigation */}
      <Navbar />

      {/* Scrollable content — offset right by sidebar width on desktop */}
      <div className="content-column">
        <main id="top">
          <HeroSection />

          {/* Info band */}
          <section className="section-band" aria-hidden="true">
            <div className="container">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="info-tile">
                    <i className="bi bi-layers-fill" />
                    <div>
                      <p>Architecture</p>
                      <strong>Clean, reusable, data-driven components</strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-tile">
                    <i className="bi bi-phone-fill" />
                    <div>
                      <p>Responsive</p>
                      <strong>Optimized for desktop, tablet, and mobile</strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="info-tile">
                    <i className="bi bi-file-earmark-arrow-down-fill" />
                    <div>
                      <p>CV Download</p>
                      <strong>One click PDF export for reviewers</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SkillsSection />
          <CertificatesSection />
          <SeminarsSection />
          <ProjectsSection />
          <CapstoneSection />
          <HardwareSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
