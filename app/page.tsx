import Header from "../components/header"
import HeroSection from "../components/hero-section"
import ProjectsSection from "../components/projects-section"
import SkillsSection from "../components/skills-section"
import AboutSection from "../components/about-section"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden scroll-smooth snap-y snap-mandatory
                     bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 
                     dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                     text-gray-900 dark:text-white transition-colors duration-500">

      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center snap-start
                   overflow-hidden transition-colors duration-700"
      >
        {/* Hero Gradient Blobs */}
        <div className="absolute -top-32 -left-20 w-72 h-72 rounded-full blur-3xl 
                        bg-gradient-to-tr from-cyan-200 via-pink-200 to-yellow-200 
                        dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 animate-blob"></div>
        <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full blur-3xl 
                        bg-gradient-to-tr from-purple-200 via-green-200 to-pink-200 
                        dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 animate-blob animation-delay-2000"></div>

        <div className="text-gray-800 dark:text-white">
          <HeroSection />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative min-h-[90vh] flex items-center snap-start overflow-hidden transition-colors duration-500"
      >
        {/* Gradient Blobs */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-400/10 dark:bg-blue-500/20 rounded-full animate-blob"></div>
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/20 rounded-full animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 md:px-20 py-20">
          <AboutSection />
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative min-h-[95vh] snap-start overflow-hidden transition-colors duration-500"
      >
        {/* Gradient Blobs */}
        <div className="absolute top-16 left-10 w-72 h-72 rounded-full blur-3xl 
                        bg-gradient-to-tr from-green-200 via-cyan-200 to-yellow-200 
                        dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 animate-blob"></div>
        <div className="absolute bottom-16 right-16 w-72 h-72 rounded-full blur-3xl 
                        bg-gradient-to-tr from-pink-200 via-purple-200 to-yellow-200 
                        dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 md:px-20 py-24">
          <SkillsSection />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative min-h-[90vh] snap-start overflow-hidden transition-colors duration-500"
      >
        {/* Gradient Blobs */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 md:px-20 py-24 relative z-10">
          <ProjectsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative min-h-[80vh] snap-start flex items-center transition-colors duration-500"
      >
        {/* Gradient Blobs */}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl 
                        bg-gradient-to-tr from-cyan-200 via-pink-200 to-yellow-200 
                        dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 animate-blob"></div>
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full blur-3xl 
                        bg-gradient-to-tr from-purple-200 via-green-200 to-pink-200 
                        dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 md:px-20 py-24 relative z-10">
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full transition-colors duration-500">
        {/* Footer Gradient Blob */}
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl 
                        bg-gradient-to-tr from-cyan-100 via-purple-100 to-pink-100 
                        dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 opacity-30 animate-blob"></div>

        <Footer />
      </footer>
    </main>
  )
}
