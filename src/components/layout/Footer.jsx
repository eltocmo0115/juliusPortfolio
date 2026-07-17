import { profile } from '@/data/portfolioData'

function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="page-wrap">
        <p className="section-kicker">07 / Contact</p>
        <div className="footer-main">
          <h2>Have a project or opportunity in mind?</h2>
          <a className="footer-email" href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.credly} target="_blank" rel="noreferrer">Credly</a><a href="#top">Back to top ↑</a></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
