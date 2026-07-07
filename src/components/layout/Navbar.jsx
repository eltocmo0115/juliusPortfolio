import { useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { timeline } from '@/data/portfolioData'
import CharacterWatcher from '@/components/ui/CharacterWatcher'

const SECTION_IDS = timeline.map((item) => item.target.replace('#', ''))

/**
 * Sidebar navigation — fixed on the left on desktop, slides out as a drawer
 * on mobile (toggled by the hamburger button).
 */
function Navbar() {
  const activeId = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile hamburger — only visible on small screens */}
      <button
        className={`sidebar-toggle${open ? ' is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay — tapping it closes the sidebar on mobile */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside className={`site-sidebar${open ? ' is-open' : ''}`} aria-label="Main navigation">

        {/* Nav links */}
        <nav>
          <ul className="sidebar-nav">
            {timeline.map((item) => {
              const id = item.target.replace('#', '')
              const isActive = activeId === id
              return (
                <li key={item.target}>
                  <a
                    className={`sidebar-link${isActive ? ' active' : ''}`}
                    href={item.target}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span className="sidebar-link__dot" aria-hidden="true" />
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Cursor-tracking character */}
        <div className="sidebar-character">
          <CharacterWatcher />
        </div>
      </aside>
    </>
  )
}

export default Navbar
