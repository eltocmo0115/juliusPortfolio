import { learning } from '@/data/portfolioData'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function LearningSection() {
  const ref = useScrollAnimation()
  return (
    <section id="learning" className="section learning-section">
      <div className="page-wrap learning-grid">
        <div>
          <p className="section-kicker">05 / Always learning</p>
          <h2>Beyond the classroom</h2>
          <p>Areas I’m continuing to practice through coursework, independent study, and projects.</p>
        </div>
        <ol className="learning-list animate-on-scroll" ref={ref}>
          {learning.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item}
              <small>Focus area</small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default LearningSection
