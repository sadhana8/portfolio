"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Youtube, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const copyrightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        socialRef.current?.children || [],
        { opacity: 0, scale: 0, rotation: 180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        copyrightRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          scrollTrigger: {
            trigger: copyrightRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const socialLinks = [
    { icon: Github, url: "https://github.com/sadhana8" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/sadhanasudha/" },
    { icon: Youtube, url: "www.youtube.com/@CodlerOfficial" },
    { icon: Mail, url: "sudhasadhana7@gmail.com" },
  ]

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-14 px-4 overflow-hidden"
    >
      {/* animated gradient waves */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.15),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.15),transparent_60%)] animate-pulse-slow" />

      {/* glowing top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 animate-gradient-x"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* left side */}
          <div className="text-center md:text-left">
            <h3
              ref={titleRef}
              className="text-3xl font-extrabold text-white mb-3"
            >
              Let&apos;s Connect
            </h3>
            <p className="text-gray-400 mb-4">
              Ready to bring your ideas to life? Let’s work together.
            </p>

            <div className="flex justify-center md:justify-start space-x-6 text-sm font-medium">
              <a href="#hire" className="relative group">
                <span className="text-gray-300 group-hover:text-white transition">
                  Hire Me
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <span className="text-gray-600">|</span>
              <a href="#contact" className="relative group">
                <span className="text-gray-300 group-hover:text-white transition">
                  Contact Me
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>

          {/* social icons */}
          <div
            ref={socialRef}
            className="flex justify-center md:justify-end space-x-5"
          >
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className={`
                    relative z-10 border-gray-400 bg-transparent rounded-full transition-all duration-300
                    text-white hover:text-white
                    dark:border-gray-600 dark:text-gray-300 dark:hover:text-primary
                  `}
                >
                  <Icon className="h-5 w-5" />
                </Button>

                {/* neon glow ring */}
                <div
                  className={`
                    absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500
                    bg-gradient-to-r from-primary to-purple-500
                  `}
                ></div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* copyright + back to top */}
        <div
          ref={copyrightRef}
          className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-center"
        >
          <p className="text-gray-400 text-sm md:text-base">
            © 2025{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              Sadhana Sudha ❤️
            </span>{" "}
            . All rights reserved.
          </p>

          <motion.button
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="mt-4 md:mt-0 flex items-center space-x-1 text-sm text-gray-300 hover:text-white transition"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
