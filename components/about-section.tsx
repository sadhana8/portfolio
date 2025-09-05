"use client"
import React, { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown, ChevronUp } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [readMore, setReadMore] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { trigger: titleRef.current, start: "top 80%", toggleActions: "play none none reverse" }
      })
      gsap.fromTo(contentRef.current, { opacity: 0, x: -80 }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: { trigger: contentRef.current, start: "top 80%", toggleActions: "play none none reverse" }
      })
      gsap.fromTo(imageRef.current, { opacity: 0, x: 80, rotate: 5 }, {
        opacity: 1,
        x: 0,
        rotate: 0,
        duration: 1,
        scrollTrigger: { trigger: imageRef.current, start: "top 80%", toggleActions: "play none none reverse" }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const educationData = [
    {
      id: "bca",
      title: "BCA in Computer Applications",
      institution: "Everest College, Kathmandu",
      affiliation: "Tribhuvan University",
      duration: "Running",
      grade: "A",
      activities: "Web Development, Database Management, Software Engineering, Networking, college projects, mini MERN & Next.js apps, version control, coding challenges, tech workshops, enhancing practical skills and industry knowledge."
    },
    {
      id: "technical",
      title: "Technical & Vocational Education on Compuetr Engineering(Class 9-12)",
      institution: "Shree Yagyabalkya Sanskrit Secondary School, Dhanusha",
      affiliation: "National Examination Board",
      duration: "2016 - 2021",
      grade: "A",
      activities: "Computer Engineering, programming (C, C++, Java, HTML), database management, electronics & hardware labs, IT workshops, hands-on projects, practical skills in computer systems and software development."
    }
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-24 px-6 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      {/* Neon Background Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title */}
        <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold text-center mb-16 leading-tight">
          About Me
          <span className="block w-20 h-1 bg-primary mx-auto mt-3 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div ref={contentRef}>
            <Card className="bg-gradient-to-br from-background via-muted/20 to-background border border-white/10 shadow-xl rounded-2xl hover:shadow-2xl transition duration-500">
              <CardContent className="p-12">
                <p className={`text-lg mb-4 text-muted-foreground ${!readMore ? "line-clamp-6" : ""}`}>
                  Hello! I'm <span className="text-primary font-semibold">Sadhana</span>, a <span className="text-primary font-semibold">Full-Stack Developer</span> focused on <span className="text-primary font-semibold">backend technologies</span>. I build scalable web applications using Node.js, Express.js, and MongoDB. I enjoy designing APIs, managing databases, and creating backend systems that work smoothly and reliably.
                  <br />
                  During my studies, I completed a <span className="text-primary font-semibold">BCA in Computer Applications</span> at Everest College, Kathmandu, and a <span className="text-primary font-semibold">Diploma in Computer Engineering</span> from Shree Yagyabalkya Sanskrit Secondary School. I gained practical experience through college projects, mini MERN & Next.js apps, open-source contributions, and OJT training. I also participated in coding challenges, tech workshops, and online developer communities.
                  <br />
                  Additionally, I am enrolled in <span className="text-primary font-semibold">Tribhuvan University</span>.
                </p>

                <button
                  onClick={() => setReadMore(!readMore)}
                  className="flex items-center gap-2 text-primary font-semibold mt-2 hover:underline"
                >
                  {readMore ? "Show Less" : "Read More"} {readMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Image */}
          <div ref={imageRef} className="flex justify-center relative">
            <div className="relative group w-80 h-120">
              {/* Neon Aura Glow */}
              <div className="absolute inset-0 rounded-2xl blur-3xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-60 transition duration-700"></div>

              {/* Glass Frame */}
              <div className="relative w-full h-full rounded-2xl p-1 bg-gradient-to-tr from-primary/40 via-blue-500/40 to-purple-500/40 backdrop-blur-md shadow-[0_8px_40px_rgb(0,0,0,0.4)] group-hover:scale-105 transform transition duration-500">
                <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none"></div>
                <div className="w-full h-full rounded-2xl overflow-hidden bg-background/90 border border-white/20">
                  <img
                    src="/about.jpg"
                    alt="Developer Portrait"
                    className="w-full h-full object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating Neon Frame */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/50 shadow-[0_0_25px_rgba(59,130,246,0.6)] pointer-events-none animate-[pulseFrame_3s_ease-in-out_infinite]"></div>

              {/* Illustration Objects */}
              <div className="absolute -top-4 -left-6 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-bounce-slow"></div>
              <div className="absolute -bottom-6 -right-8 w-6 h-6 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full animate-spin-slow"></div>
              <div className="absolute top-1/2 -right-10 w-5 h-5 bg-orange-200 rounded-full animate-bounce-slow"></div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Education</h3>
          <span className="block w-20 h-1 bg-primary mx-auto mt-2 rounded-full"></span>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="w-full sm:w-1/2 perspective"
                onMouseEnter={() => setHoveredCard(edu.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card
                  className={`relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 cursor-pointer transform transition-all duration-500
                    hover:scale-105 hover:shadow-3xl
                    ${hoveredCard === edu.id ? "h-[400px] sm:h-[420px]" : "h-[220px]"} 
                    bg-gradient-to-br from-background via-muted/20 to-background`}
                >
                  <CardContent className="p-6 h-full relative flex flex-col justify-center">
                    {/* Minimal View */}
                    <div className={`transition-opacity duration-500 ${hoveredCard === edu.id ? "opacity-0" : "opacity-100"}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">
                          {edu.id === "bca" ? "B" : "T"}
                        </div>
                        <h4 className="text-primary font-semibold text-lg">{edu.title}</h4>
                      </div>
                      <p className="text-muted-foreground mt-1">{edu.institution}</p>
                    </div>

                    {/* Full Details View */}
                    <div className={`absolute inset-0 bg-gradient-to-b from-black/20 to-black/70 text-white p-6 flex flex-col justify-start rounded-2xl transition-opacity duration-500 ${hoveredCard === edu.id ? "opacity-100" : "opacity-0"}`}>
                      <h4 className="text-primary font-bold text-lg mb-2">{edu.title}</h4>
                      <p className="mb-1"><span className="font-semibold">Institution:</span> {edu.institution}</p>
                      <p className="mb-1"><span className="font-semibold">Affiliation:</span> {edu.affiliation}</p>
                      <p className="mb-1"><span className="font-semibold">Duration:</span> {edu.duration}</p>
                      <p className="mb-1"><span className="font-semibold">Grade:</span> {edu.grade}</p>
                      <p className="mt-2 text-sm">{edu.activities}</p>

                      {/* Floating Icons / Highlights */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce-slow"></div>
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping-slow"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Perspective / Animations */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .perspective:hover .card-content {
          transform: rotateY(5deg) rotateX(3deg);
        }
        .animate-ping-slow {
          animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </section>
  )
}
