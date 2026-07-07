/**
 * ProjectCard — displays a single software project entry.
 *
 * @param {{ project: object, accent: 'primary'|'success' }} props
 */
function ProjectCard({ project, accent = 'primary' }) {
  return (
    <article className="project-card card border-0 shadow-sm h-100">
      <div className={`project-card__bar bg-${accent}`} aria-hidden="true" />
      <div className="card-body p-4">
        {/* Header */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
          <span className="badge text-bg-dark-subtle project-card__year">{project.year}</span>
          <span className="text-uppercase small text-secondary fw-semibold">Portfolio Record</span>
        </div>

        <h3 className="h4 fw-bold mb-3">{project.title}</h3>

        {/* Machine Problem */}
        <div className="project-card__block">
          <p className="project-card__label">Machine Problem</p>
          <p className="project-card__text">{project.machineProblem}</p>
        </div>

        {/* Features */}
        <div className="project-card__block">
          <p className="project-card__label">Discussion of the Features</p>
          <ul className="project-card__list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Screenshots */}
        <div className="project-card__block">
          <p className="project-card__label">Screenshots of the GUI</p>
          <div className="screenshot-grid">
            {project.screenshots.map((shot) => (
              <div key={shot} className="screenshot-frame">
                <div className="screenshot-frame__window" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>{shot}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Software badges */}
        <div className="project-card__block mb-0">
          <p className="project-card__label">Software Used</p>
          <div className="d-flex flex-wrap gap-2">
            {project.softwareUsed.map((tool) => (
              <span key={tool} className="badge rounded-pill text-bg-light border">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
