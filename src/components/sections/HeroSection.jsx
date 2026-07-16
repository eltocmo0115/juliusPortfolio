import heroImg from '@/assets/hero.jpg'
import { profile, stats } from '@/data/portfolioData'

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="page-wrap hero-layout">
        <div className="hero-copy-block">
          <p className="availability"><span /> {profile.availability}</p>
          <h1>{profile.headline}</h1>
          <p className="hero-intro">Hi, I’m {profile.name}—{profile.subtitle}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a
              className="button button-secondary button-cv"
              href="/documents/julius-romar-pinon-cv.pdf"
              download="Julius-Romar-Pinon-CV.pdf"
            >
              Download CV <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-secondary"
              href="/documents/it-practicum-final-report.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Final Report <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href={`mailto:${profile.email}`}>
              {profile.email} <span aria-hidden="true">↗</span>
            </a>
          </div>

          <dl className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="portrait-stage">
          <div className="portrait-card">
            <img
              src={heroImg}
              alt={`Portrait of ${profile.name}`}
              width="938"
              height="938"
              decoding="async"
              fetchPriority="high"
            />
            <div className="portrait-caption">
              <span><span aria-hidden="true">⌖</span> {profile.location}</span>
              <span className="portrait-status">Available</span>
            </div>
          </div>
          <span className="code-note code-note-top">build → learn → improve</span>
          <span className="code-note code-note-bottom">{profile.role}</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
