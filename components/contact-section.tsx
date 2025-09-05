"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const validateForm = () => {
    const newErrors: typeof errors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    alert("Thank you! Your message has been sent.")
    setFormData({ name: "", email: "", message: "" })
    setErrors({})
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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
            toggleActions: "play none none reverse",
          },
        }
      )

      // Form animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )

      // Contact info animation
      gsap.fromTo(
        contactInfoRef.current?.children || [],
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.5,
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
 <section
  id="contact"
  ref={sectionRef}
  className="relative py-20 px-4 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden"
>
  <div className="container mx-auto max-w-6xl relative z-10">
    <h2
      ref={titleRef}
      className="text-3xl md:text-4xl font-bold text-center mb-16"
    >
      Let's Connect
      <span className="block w-16 h-1 bg-primary mx-auto mt-2 rounded-full"></span>
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div className="bg-white/20 dark:bg-gray-900/50 backdrop-blur-md p-8 rounded-xl shadow-lg transition-colors duration-500 relative z-10">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full border-2 rounded-lg p-3 bg-transparent placeholder-gray-400
                focus:outline-none focus:border-primary transition-colors duration-300
                ${errors.name ? "border-red-500" : formData.name ? "border-green-500" : "border-gray-500"}`}
              required
            />
            {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <Input
              type="email"
              name="email"
              placeholder="youremail@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full border-2 rounded-lg p-3 bg-transparent placeholder-gray-400
                focus:outline-none focus:border-primary transition-colors duration-300
                ${errors.email ? "border-red-500" : formData.email ? "border-green-500" : "border-gray-500"}`}
              required
            />
            {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email}</p>}
          </div>

          {/* Message Input */}
          <div>
            <Textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full border-2 rounded-lg p-3 bg-transparent placeholder-gray-400 min-h-[140px]
                focus:outline-none focus:border-primary transition-colors duration-300
                ${errors.message ? "border-red-500" : formData.message ? "border-green-500" : "border-gray-500"}`}
              required
            />
            {errors.message && <p className="text-red-500 mt-1 text-sm">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2 group bg-primary hover:bg-primary/90"
          >
            <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            Send Message
          </Button>
        </form>
      </div>

      {/* Contact Info */}
      <div ref={contactInfoRef} className="flex flex-col justify-center space-y-8 relative z-10">
        <div>
          <h3 className="text-2xl font-bold mb-2">Reach Me</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Whether you’re looking to collaborate on a project, discuss ideas, or just say hi, feel free to get in touch.
          </p>
        </div>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-700 dark:text-gray-300">sadhanasudha003@gmail.com</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Linkedin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-gray-700 dark:text-gray-300">
                <a href="https://www.linkedin.com/in/sadhanasudha/" target="_blank" className="underline">
                  linkedin.com/in/sadhanasudha
                </a>
              </p>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Github className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">GitHub</p>
              <p className="text-gray-700 dark:text-gray-300">
                <a href="https://github.com/sadhana8" target="_blank" className="underline">
                  github.com/sadhana
                </a>
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-700 dark:text-gray-300">Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Floating Bubbles / Shapes */}
  <div className="absolute -top-20 -left-10 w-40 h-40 rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-3xl animate-blob"></div>
  <div className="absolute -bottom-20 -right-10 w-60 h-60 rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-3xl animate-blob animation-delay-2000"></div>
  <div className="absolute -top-10 -right-20 w-32 h-32 rounded-full bg-pink-400/20 dark:bg-pink-600/20 blur-2xl animate-blob animation-delay-1000"></div>
  <div className="absolute -bottom-10 -left-20 w-24 h-24 rounded-full bg-yellow-400/20 dark:bg-yellow-600/20 blur-2xl animate-blob animation-delay-3000"></div>
</section>



  )
}

