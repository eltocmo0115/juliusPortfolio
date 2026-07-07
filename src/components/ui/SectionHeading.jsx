import { useScrollAnimation } from '@/hooks/useScrollAnimation'

/**
 * SectionHeading — shared minimalist card-based heading.
 * Features a solid dark vertical accent bar on the left edge.
 *
 * @param {{ eyebrow: string, title: string, description?: string }} props
 */
function SectionHeading({ eyebrow, title, description }) {
  const ref = useScrollAnimation()

  return (
    <div ref={ref} className="section-heading-centered animate-on-scroll">
      <p className="section-header-eyebrow">{eyebrow}</p>
      <h2 className="section-header-title">{title}</h2>
      <div className="section-header-divider" />
      {description ? <p className="section-header-desc">{description}</p> : null}
    </div>
  )
}

export default SectionHeading

