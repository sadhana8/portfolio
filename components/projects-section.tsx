"use client"

import { useRef, useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "Jobsewa Job Portal",
    description:
      "A comprehensive job portal for job seekers and recruiters, featuring job listings, applications, and user profiles. Uses TF-IDF and Cosine Similarity to recommend jobs based on resume–job description matching.",
    image: "/image.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Vercel", "TF-IDF", "Cosine Similarity"],
    github: "https://github.com/sadhana8/Jobsewa-jobportal",
    live: "https://jobsewa-jobportal-five.vercel.app/",
  },
  {
    title: "Storedoor E-commerce Website",
    description:
      "A feature-rich e-commerce platform built with Next.js and Sanity CMS, offering smooth product management, secure Stripe payments, and user authentication powered by Clerk.",
    image: "/image2.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Stripe", "Vercel", "Clerk"],
    github: "https://github.com/sadhana8/e-commerce",
    live: "https://e-commerce-six-kappa-57.vercel.app/",
  },
  {
    title: "ResyGo Restaurant Reservation System",
    description:
      "A modern restaurant reservation system allowing users to book tables, view availability, and manage reservations in real time. Built with MERN stack and Tailwind CSS.",
    image: "/resygo.png",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/sadhana8/Resygo-mernapp",
  },
  {
    title: "Quick Chat MERN Application",
    description:
      "A real-time chat platform with instant messaging, user authentication, and sleek modern UI.",
    image: "/quick-chat.png",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/sadhana8/QuickChat-MERN-App",
    live: "https://quick-chatapp.vercel.app/",
  },
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // GSAP title animation (desktop only)
  useEffect(() => {
    if (isMobile) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16 relative"
        >
          Featured Projects
          <span className="block w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-3 rounded-full"></span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            if (isMobile) {
              // --- Mobile version (no animations or hover) ---
              return (
                <div key={index} className="relative">
                  <Card className="relative bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-semibold">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-primary/30 to-purple-500/30 text-sm rounded-full border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                        {project.live && (
                          <Button size="sm" asChild>
                            <a href={project.live} target="_blank">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Live
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            }

            // --- Desktop version with Framer Motion & GSAP ---
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                className="group relative"
              >
                {/* Gradient Glow Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 via-purple-500/40 to-cyan-400/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <Card className="relative bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Tech Stack */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-4"
                      initial="hidden"
                      whileInView="show"
                      variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.1 } },
                      }}
                    >
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            show: { opacity: 1, y: 0 },
                          }}
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: i * 0.2,
                          }}
                          className="px-3 py-1 bg-gradient-to-r from-primary/30 to-purple-500/30 text-sm rounded-full backdrop-blur-sm border border-white/20 shadow-inner"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="relative overflow-hidden group/btn"
                      >
                        <a href={project.github} target="_blank" className="flex items-center space-x-2">
                          <Github className="h-4 w-4" />
                          <span>Code</span>
                          <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        </a>
                      </Button>

                      {project.live && (
                        <Button
                          size="sm"
                          asChild
                          className="relative overflow-hidden group/btn"
                        >
                          <a href={project.live} target="_blank" className="flex items-center space-x-2">
                            <ExternalLink className="h-4 w-4" />
                            <span>Live Demo</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* More Projects Button */}
        <div className="flex justify-center mt-16">
          {!isMobile ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                asChild
                className="relative overflow-hidden group/btn rounded-full px-8 py-5 text-lg font-medium"
              >
                <a
                  href="https://github.com/sadhana8?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="h-5 w-5" />
                  <span>View More Projects</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-purple-500/30 to-cyan-400/30 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 opacity-30 blur-lg rounded-full"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                  />
                </a>
              </Button>
            </motion.div>
          ) : (
            <Button
              size="lg"
              asChild
              className="rounded-full px-8 py-5 text-lg font-medium"
            >
              <a
                href="https://github.com/sadhana8?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 mr-2" />
                View More Projects
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
