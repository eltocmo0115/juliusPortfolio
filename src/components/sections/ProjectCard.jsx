import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function ProjectPreview({ project }) {
  if (project.visual === 'gallery') {
    return (
      <div className="project-gallery" aria-label={`${project.title} interface previews`}>
        {project.previewImages.map((image, index) => (
          <a
            className="project-gallery-item"
            href={image.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} screenshot ${index + 1}`}
            key={image.src}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </a>
        ))}
      </div>
    )
  }

  if (project.visual === 'screenshot') {
    return (
      <div className="app-screenshot-preview">
        <img
          src={project.previewImage}
          alt={project.previewAlt ?? `${project.title} interface preview`}
        />
      </div>
    )
  }

  if (project.visual === 'mobile') {
    return (
      <div className="mobile-preview" aria-hidden="true">
        <div className="phone phone-back"><span>CO</span><strong>Good</strong></div>
        <div className="phone phone-front">
          <div className="phone-speaker" />
          <small>Air quality</small>
          <strong>PM2.5</strong>
          <div className="air-reading">12<sup>µg</sup></div>
          <div className="air-chart"><i /><i /><i /><i /><i /><i /></div>
        </div>
      </div>
    )
  }

  return (
    <div className="mock-window" aria-hidden="true">
      <div className="mock-bar"><span /><span /><span /><small>Billing workspace</small></div>
      <div className="billing-preview">
        <aside><b>EB</b><i /><i /><i /></aside>
        <div className="billing-content">
          <small>Overview</small>
          <strong>Billing activity</strong>
          <div className="billing-metrics"><i /><i /><i /></div>
          <div className="billing-table"><span /><span /><span /></div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const ref = useScrollAnimation({ threshold: 0.08 })
  return (
    <article className={`project-row project-${project.accent} animate-on-scroll`} ref={ref}>
      <div className="project-meta"><span>{project.index}</span><p>{project.year}</p></div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-outcome"><strong>What I built</strong>{project.outcome}</p>
        <ul className="feature-list" aria-label={`${project.title} features`}>
          {project.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <a className="project-link" href={project.sourceUrl} target="_blank" rel="noreferrer">
          {project.sourceLabel} <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="project-visual">
        <ProjectPreview project={project} />
        <ul className="tech-list" aria-label={`${project.title} technologies`}>
          {project.softwareUsed.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
      </div>
    </article>
  )
}

export default ProjectCard
