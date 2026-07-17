import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function ProjectPreview({ project }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const dialogRef = useRef(null)
  const triggerRef = useRef(null)
  const images = project.visual === 'gallery'
    ? project.previewImages
    : project.visual === 'screenshot'
      ? [{
          src: project.previewImage,
          alt: project.previewAlt ?? `${project.title} interface preview`,
        }]
      : []

  useEffect(() => {
    const dialog = dialogRef.current
    if (selectedImage && !dialog.open) {
      dialog.showModal()
      document.body.classList.add('modal-open')
    }
    return () => document.body.classList.remove('modal-open')
  }, [selectedImage])

  const openImage = (image, event) => {
    triggerRef.current = event.currentTarget
    setSelectedImage(image)
  }

  const closeImage = () => dialogRef.current?.close()

  const navigateImage = (direction) => {
    if (images.length < 2) return
    const currentIndex = images.findIndex((image) => image.src === selectedImage?.src)
    const nextIndex = (currentIndex + direction + images.length) % images.length
    setSelectedImage(images[nextIndex])
  }

  const modal = (
    <dialog
      className="project-image-modal"
      ref={dialogRef}
      aria-label={selectedImage ? `${project.title} screenshot preview` : undefined}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeImage()
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') navigateImage(-1)
        if (event.key === 'ArrowRight') navigateImage(1)
      }}
      onClose={() => {
        setSelectedImage(null)
        document.body.classList.remove('modal-open')
        triggerRef.current?.focus()
      }}
    >
      <div className="project-image-modal-content">
        <div className="project-image-modal-bar">
          <p>{project.title}</p>
          <div className="project-image-modal-actions">
            {images.length > 1 && (
              <>
                <button className="modal-nav-button" type="button" onClick={() => navigateImage(-1)} aria-label="View previous screenshot">
                  <span aria-hidden="true">←</span> Previous
                </button>
                <span className="modal-image-count" aria-live="polite">
                  {images.findIndex((image) => image.src === selectedImage?.src) + 1} / {images.length}
                </span>
                <button className="modal-nav-button modal-next-button" type="button" onClick={() => navigateImage(1)} aria-label="View next screenshot">
                  Next <span aria-hidden="true">→</span>
                </button>
              </>
            )}
            <button className="modal-close-button" type="button" onClick={closeImage} aria-label="Close image preview">Close <span aria-hidden="true">×</span></button>
          </div>
        </div>
        {selectedImage && <img src={selectedImage.src} alt={selectedImage.alt} />}
      </div>
    </dialog>
  )

  if (project.visual === 'gallery') {
    return (
      <>
        <div className="project-gallery" aria-label={`${project.title} interface previews`}>
          {project.previewImages.map((image, index) => (
            <button
              type="button"
              className="project-gallery-item"
              aria-label={`Open ${project.title} screenshot ${index + 1}`}
              onClick={(event) => openImage(image, event)}
              key={image.src}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          ))}
        </div>
        {modal}
      </>
    )
  }

  if (project.visual === 'screenshot') {
    const image = images[0]
    return (
      <>
        <div className="app-screenshot-preview">
          <button
            type="button"
            className="app-screenshot-button"
            aria-label={`Open ${project.title} screenshot`}
            onClick={(event) => openImage(image, event)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </button>
        </div>
        {modal}
      </>
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
