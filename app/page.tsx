import Header from "../components/header"
import HeroSection from "../components/hero-section"
import ProjectsSection from "../components/projects-section"
import SkillsSection from "../components/skills-section"
import AboutSection from "../components/about-section"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"
// import EducationSection from "../components/education-section"
// import ExperienceSection from "../components/experience-section"
// import GitProjectsSection from "../components/git-project"

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden scroll-smooth snap-y snap-mandatory
                     bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 
                     dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">

      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center snap-start
                   bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50
                   dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                   overflow-hidden transition-colors duration-700"
      >
        <HeroSection />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative min-h-[90vh] flex items-center snap-start
                   bg-gray-100 dark:bg-gray-800 overflow-hidden transition-colors duration-500"
      >
        <div className="container mx-auto px-6 md:px-20 py-20">
          <AboutSection />
        </div>

        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-400/10 dark:bg-blue-500/20 rounded-full animate-blob"></div>
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/20 rounded-full animate-blob animation-delay-2000"></div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative min-h-[95vh] snap-start
                   bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-500"
      >
        <div className="container mx-auto px-6 md:px-20 py-24">
          <SkillsSection />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative min-h-[90vh] snap-start
                   bg-gray-100 dark:bg-gray-800 overflow-hidden transition-colors duration-500"
      >
        <div className="container mx-auto px-6 md:px-20 py-24 relative z-10">
          <ProjectsSection />
        </div>

        {/* Background shapes */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        {/* Optional overlay for subtle depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-50/40 dark:via-gray-900/20 to-transparent pointer-events-none"></div>
      </section>

      {/* Git Projects Section */}
      {/* <section
        id="git-projects"
        className="relative min-h-[70vh] snap-start
                   bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-500"
      >
        <div className="container mx-auto px-6 md:px-20 py-24">
          <GitProjectsSection />
        </div>
      </section> */}

      {/* Education Section */}
      {/* <section
        id="education"
        className="relative min-h-[70vh] snap-start
                   bg-gray-100 dark:bg-gray-800 overflow-hidden transition-colors duration-500"
      >
        <div className="container mx-auto px-6 md:px-20 py-24">
          <EducationSection />
        </div>
      </section> */}

      {/* Experience Section */}
      {/* <section
        id="experience"
        className="relative min-h-[70vh] snap-start
                   bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-500"
      >
        <div className="container mx-auto px-6 md:px-20 py-24">
          <ExperienceSection />
        </div>
      </section> */}

      {/* Contact Section */}
      <section
        id="contact"
        className="relative min-h-[80vh] snap-start flex items-center
                   bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500"
      >
        <div className="container mx-auto px-6 md:px-20 py-24 relative z-10">
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white border-t border-gray-300 dark:border-gray-700 transition-colors duration-500">
        <Footer />
      </footer>
    </main>
  )
}
