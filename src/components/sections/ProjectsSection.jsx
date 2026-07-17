import ProjectCard from '@/components/sections/ProjectCard'
import { capstoneProject, softwareProjects } from '@/data/portfolioData'

function ProjectsSection() {
  const projects = [capstoneProject, ...softwareProjects]
  return (
    <section id="projects" className="section projects-section">
      <div className="page-wrap">
        <div className="section-heading-row light">
          <div><p className="section-kicker">04 / Selected work</p><h2>Projects with purpose</h2></div>
          <p>Public projects that show how I approach interfaces, application logic, navigation, and data-backed workflows.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => <ProjectCard project={project} key={project.title} />)}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
