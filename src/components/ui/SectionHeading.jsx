/**
 * SectionHeading — shared heading atom used in every portfolio section.
 * @param {{ eyebrow: string, title: string, description?: string, align?: 'start'|'center'|'end' }} props
 */
function SectionHeading({ eyebrow, title, description, align = 'start' }) {
  return (
    <div className={`section-heading text-${align}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
