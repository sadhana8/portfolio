"use client"

import { useRef, useEffect } from "react"
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
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB","Vercel", "TF-IDF", "Cosine Similarity"],
  github: "https://github.com/sadhana8/Jobsewa-jobportal",
  live: "https://jobsewa-jobportal-five.vercel.app/",
}

  // {
  //   title: "3D Portfolio Website",
  //   description: "Interactive portfolio built with Three.js and GSAP animations",
  //   image: "/3d-portfolio-website.png",
  //   tech: ["Three.js", "React", "GSAP", "WebGL"],
  //   github: "#",
  //   live: "#",
  // },
  // {
  //   title: "AI Chat Application",
  //   description: "Real-time chat app with AI integration and modern UI",
  //   image: "/ai-chat-application.png",
  //   tech: ["Next.js", "OpenAI", "Socket.io", "Tailwind"],
  //   github: "#",
  //   live: "#",
  // },
  // {
  //   title: "Data Visualization Dashboard",
  //   description:
  //     "Interactive dashboard for complex data analysis and visualization",
  //   image: "/data-dashboard.png",
  //   tech: ["D3.js", "React", "Python", "FastAPI"],
  //   github: "#",
  //   live: "#",
  // },
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
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
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance relative"
        >
          Featured Projects
          <span className="block w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-3 rounded-full"></span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
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
                {/* Image with Gradient Overlay */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Card Content */}
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-pretty">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Tech stack tags with subtle floating animation */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial="hidden"
                    whileInView="show"
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.1 } },
                    }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
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
                          delay: techIndex * 0.2,
                        }}
                        className="px-3 py-1 bg-gradient-to-r from-primary/30 to-purple-500/30 text-sm rounded-full backdrop-blur-sm border border-white/20 shadow-inner"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="relative overflow-hidden group/btn"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        className="flex items-center space-x-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      asChild
                      className="relative overflow-hidden group/btn"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        className="flex items-center space-x-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
