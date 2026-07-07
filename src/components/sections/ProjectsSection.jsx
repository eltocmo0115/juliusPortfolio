import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/sections/ProjectCard'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { softwareProjects } from '@/data/portfolioData'

const ACCENTS = ['primary', 'success', 'primary', 'success']

/**
 * Projects section — grid of ProjectCards, one per academic year.
 */
function ProjectsSection() {
  const ref = useScrollAnimation()
  return (
    <section id="projects" className="content-section content-section--soft">
      <div className="container">
        <SectionHeading
          eyebrow="Software Developed"
          title="Projects from 1st Year to 4th Year"
          description="Each project card includes the machine problem, features, screenshots, and the software used."
        />
        <div className="row g-4 animate-on-scroll" ref={ref}>
          {softwareProjects.map((project, index) => (
            <div className="col-lg-6" key={project.id}>
              <ProjectCard project={project} accent={ACCENTS[index % ACCENTS.length]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
