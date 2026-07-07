import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/sections/ProjectCard'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { softwareProjects } from '@/data/portfolioData'

function ProjectsSection() {
  const ref = useScrollAnimation()
  return (
    <section id="projects" className="content-section content-section--soft">
      <div className="container">
        <SectionHeading
          eyebrow="Software Developed"
          title="Projects"
          description=""
        />
        <div className="row g-4 animate-on-scroll" ref={ref}>
          {softwareProjects.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
