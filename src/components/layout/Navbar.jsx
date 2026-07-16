import { useEffect, useRef, useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { profile, timeline } from '@/data/portfolioData'

const SECTION_IDS = ['hero', ...timeline.map((item) => item.target.slice(1))]
const MOBILE_QUERY = '(max-width: 991px)'

function Navbar() {
  const activeId = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches)
  const toggleRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY)
    const handleChange = (event) => {
      setIsMobile(event.matches)
      if (!event.matches) setOpen(false)
    }
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', isMobile && open)
    if (!isMobile || !open) return undefined

    const links = [...navRef.current.querySelectorAll('a')]
    links[0]?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || links.length === 0) return
      const first = links[0]
      const last = links.at(-1)
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('nav-open')
    }
  }, [isMobile, open])

  const closeMenu = () => {
    setOpen(false)
    if (isMobile) toggleRef.current?.focus()
  }

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
        <span className="brand-mark" aria-hidden="true">JP</span>
        <span>{profile.shortName}<span className="brand-dot">.</span></span>
      </a>

      <button
        ref={toggleRef}
        className={`nav-toggle${open ? ' is-open' : ''}`}
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
      </button>

      <nav
        ref={navRef}
        id="primary-navigation"
        className={`primary-nav${open ? ' is-open' : ''}`}
        aria-label="Primary navigation"
        aria-hidden={isMobile && !open ? true : undefined}
        inert={isMobile && !open ? '' : undefined}
      >
        {timeline.map((item) => {
          const id = item.target.slice(1)
          return (
            <a
              key={item.target}
              href={item.target}
              className={activeId === id ? 'active' : ''}
              aria-current={activeId === id ? 'location' : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          )
        })}
      </nav>

      <a className="header-cta" href={`mailto:${profile.email}`}>
        Let’s talk <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Navbar
