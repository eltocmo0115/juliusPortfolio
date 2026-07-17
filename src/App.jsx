import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import CredentialsSection from '@/components/sections/CredentialsSection'
import LearningSection from '@/components/sections/LearningSection'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main id="top">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CredentialsSection />
        <LearningSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
