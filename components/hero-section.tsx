"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../components/ui/button"
import { Download, Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import ThreeScene from "../components/three-scene"

// Rotating Focus Titles
function TitleRotator({ titles }: { titles: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % titles.length), 3000)
    return () => clearInterval(timer)
  }, [titles.length])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-xl md:text-2xl font-semibold text-white"
      >
        {titles[index]}
      </motion.div>
    </AnimatePresence>
  )
}

// Rotating Secondary Roles
function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % roles.length), 2500)
    return () => clearInterval(timer)
  }, [roles.length])

  return (
    <div className="mt-2 h-auto overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-lg md:text-xl font-medium
           bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500
           bg-clip-text text-transparent drop-shadow-xl
"
        >
          {roles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Hero Section
export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  const handleDownloadResume = () => {
    try {
      const link = document.createElement("a")
      link.href = "/resume.pdf"
      link.download = "resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Resume download failed:", error)
    }
  }

  const scrollToNext = () => {
    const nextSection = document.getElementById("projects")
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" })
  }

  // Beginner-friendly focus titles
  const focusTitles = [
    "FullStack Developer | Backend Focus",
    "Frontend Developer | React & Next.js",
    "Database & API Development"
  ]

  // Fresher-friendly secondary roles
  const secondaryRoles = [
    "Backend Developer",
    "API Builder",
    "Database Enthusiast",
    "Cloud Learner"
  ]

  return (
    <section id="home" className="relative w-screen h-screen overflow-hidden" ref={heroRef}>
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/20 to-background/40 
                      dark:from-background/40 dark:via-background/30 dark:to-background/50 z-10 animate-pulse-slow pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col justify-center h-full items-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight
                     bg-gradient-to-r from-cyan-400 via-green-300 to-purple-600 bg-clip-text text-transparent
                     drop-shadow-md hover:drop-shadow-xl hover:scale-105 cursor-default"
        >
          Sadhana Sudha
        </motion.h1>

        {/* Rotating Focus Titles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TitleRotator titles={focusTitles} />
        </motion.div>

        {/* Secondary Roles */}
        <RoleRotator roles={secondaryRoles} /><br /><br />

        {/* Professional Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white mb-4 max-w-3xl leading-relaxed drop-shadow-sm
                     transition-all duration-300 hover:text-cyan-500"
        >
          Building scalable web applications with clean code, efficient APIs, and smooth user experiences.
        </motion.p>

        {/* Buttons & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 mb-12"
        >
          <Button
            size="lg"
            onClick={handleDownloadResume}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>

          <div className="flex space-x-3">
            {[{ Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Mail, href: "mailto:contact@example.com" }].map(({ Icon, href }, i) => (
              <motion.div key={i} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="  relative z-10 border-gray-400 bg-transparent rounded-full transition-all duration-300
                    text-white hover:text-white
                    dark:border-gray-600 dark:text-gray-300 dark:hover:text-primary"
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div><br />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="cursor-pointer flex flex-col items-center space-y-2 text-white hover:text-cyan-400 transition-all group"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm uppercase tracking-wider group-hover:tracking-widest transition-all duration-300 drop-shadow-sm">
            Explore My Work
          </span>
          <ArrowDown className="h-5 w-5 animate-bounce group-hover:animate-pulse" />
        </motion.div>
      </div>
    </section>
  )
}
