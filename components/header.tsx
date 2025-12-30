"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Download, Menu, X } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()

  // Detect dark mode dynamically
  useEffect(() => {
    const checkDarkMode = () => setIsDark(document.documentElement.classList.contains("dark"))
    checkDarkMode()

    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  // Header background based on scroll and theme
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    isDark
      ? ["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]         // Dark mode
      : ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"] // Light mode
  )

  const headerBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"])
  const headerTextColor = isDark ? "text-white" : "text-gray-900"

  // const handleDownloadResume = () => {
  //   const link = document.createElement("a")
  //   link.href = "/resume2.pdf"
  //   link.download = "resume2.pdf"
  //   link.click()
  // }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: headerBackground,
        backdropFilter: headerBlur,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-purple-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Glowing bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-accent to-purple-500 opacity-60 blur-[1px]" />

      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -100, rotate: -180 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: "backOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 -z-10 w-12 h-12 blur-md"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sadhana
          </div>
        </motion.div>

        {/* Desktop nav */}
        <nav className={`hidden md:flex text-xl items-center space-x-10 ${headerTextColor}`}>
          {["home", "about", "skills", "projects", "contact"].map((section, index) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className="relative hover:text-primary transition-all duration-300 group capitalize"
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{section}</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center space-x-4">
          {/* Resume button */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "backOut" }}
          >
            {/* <Button
              onClick={handleDownloadResume}
              className="hidden md:flex items-center space-x-2 relative overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </Button> */}
            {/* <Button
              asChild
              className="flex items-center space-x-2 w-fit hover:scale-105 transition-transform duration-300"
            >
              <a
                href="/flip-resume/index.html" // 👈 link to your flip resume HTML file
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Resume</span>
              </a>
            </Button> */}

          </motion.div>

          {/* Theme toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "backOut" }}
          >
            <ThemeToggle />
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:scale-110 transition-transform duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Mobile menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-6 py-6 flex flex-col space-y-6">
            {["home", "about", "skills", "projects", "contact"].map((section, index) => (
              <motion.a
                key={section}
                href={`#${section}`}                 // ✅ works like desktop anchors
                onClick={() => setIsMobileMenuOpen(false)}  // ✅ closes menu after click
                className={`text-left capitalize ${headerTextColor} hover:text-primary transition-all duration-300`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -50 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
              >
                {section}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -50 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Button
          onClick={handleDownloadResume}
          className="flex items-center space-x-2 w-fit hover:scale-105 transition-transform duration-300"
        >
          <Download className="h-4 w-4" />
          <span>Resume</span>
        </Button>
              {/* <Button
                asChild
                className="flex items-center space-x-2 w-fit hover:scale-105 transition-transform duration-300"
              >
                <a
                  href="/flip-resume/index.html" // 👈 link to your flip resume HTML file
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Resume</span>
                </a>
              </Button> */}

            </motion.div>
          </nav>
        </div>
      </motion.div>

    </motion.header>
  )
}
