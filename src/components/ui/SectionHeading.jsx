/**
 * SectionHeading — shared minimalist centered heading.
 *
 * @param {{ eyebrow: string, title: string, description?: string }} props
 */
function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading-centered">
      <p className="section-header-eyebrow">{eyebrow}</p>
      <h2 className="section-header-title">{title}</h2>
      <div className="section-header-divider" />
      {description ? <p className="section-header-desc">{description}</p> : null}
    </div>
  )
}

export default SectionHeading


