"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

// ------------------- Skill Data -------------------
const skillCategories = [
  {
    title: "Frontend",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML / CSS3", level: 90 },
      { name: "React.js / Next.js", level: 75 },
      { name: "JavaScript / TypeScript", level: 70 },
      { name: "Tailwind CSS / Material UI", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "Responsive Design", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "🖥️",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js / Express.js", level: 75 },
      { name: "MongoDB / MySQL / Firebase", level: 70 },
      { name: "REST APIs / JSON", level: 80 },
      { name: "Authentication / JWT", level: 75 },
      { name: "Websocket.io / Leaflet.js" , level: 60 },
      ],
  },
  {
    title: "Programming & Core",
    icon: "📚",
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "C / Java / PHP", level: 70 },
      { name: "Object Oriented Programming Language", level: 90 },
      { name: "OS Concepts / Networking", level: 60 },
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Design Patterns / Performance", level: 65 },
    ],
  },
  {
    title: "Design & Animation",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "UI/UX Design", level: 85 },
      { name: "Figma / Canva", level: 75 },
      { name: "GSAP / Three.js", level: 70 },
      { name: "Framer Motion", level: 75 },
      { name: "CSS Animations", level: 80 },
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    color: "from-yellow-400 to-orange-500",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "Postman", level: 65 },
      { name: "VSCode / IDEs", level: 75 },
      { name: "Terminal / CLI", level: 70 },
      { name: "Slack / Collaboration", level: 60 },
      { name: "Deployment (Vercel, Netlify)", level: 70 },
      { name: "SDLC", level: 90 },
    ],
  },
]

// ------------------- Touch Hover Hook -------------------
function useTouchHover() {
  const [isTouch, setIsTouch] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const touchListener = () => setIsTouch(true)
      window.addEventListener("touchstart", touchListener, { once: true })
      return () => window.removeEventListener("touchstart", touchListener)
    }
  }, [])

  const toggleHover = () => {
    if (isTouch) setHovered((prev) => !prev)
  }

  return { hovered, toggleHover }
}

// ------------------- SkillCard -------------------
function SkillCard({ category, forceHover }: { category: any; forceHover?: boolean }) {
  const [hovered, setHovered] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const isHovered = hovered || forceHover

  useEffect(() => {
    if (!isHovered && !expanded) return
    category.skills.forEach((skill: any, index: number) => {
      const target = { val: 0 }
      gsap.to(target, {
        val: skill.level,
        duration: 1,
        delay: index * 0.1,
        onUpdate: function () {
          const el = document.getElementById(`skill-num-${category.title}-${index}`)
          if (el) el.innerText = `${Math.floor(target.val)}%`
        },
      })
    })
  }, [isHovered, expanded, category.skills, category.title])

  return (
    <div
      className="group relative transition-transform duration-500 flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div className="relative w-36 h-36 mb-4">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${category.color} opacity-30 blur-md transition-all duration-500`} />
        <div className="absolute inset-2 rounded-full bg-background/70 border border-border shadow-lg flex items-center justify-center">
          <span className="text-5xl">{category.icon}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-center mb-3">{category.title}</h3>

      {/* Skills */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${isHovered || expanded ? "h-auto" : "h-[180px]"}`}>
        <ul className="text-center space-y-3 px-2">
          {category.skills.map((skill: any, index: number) => (
            <li key={index} className="relative text-sm text-muted-foreground">
              {skill.name}
              <div className={`relative mt-1 h-3 bg-muted-foreground/20 rounded-full overflow-hidden transition-all duration-500 ${isHovered || expanded ? "opacity-100" : "opacity-0"}`}>
                <div
                  className="h-3 bg-gradient-to-r from-primary to-cyan-500 rounded-full transition-all duration-700"
                  style={{ width: isHovered || expanded ? `${skill.level}%` : "0%" }}
                />
                <span
                  id={`skill-num-${category.title}-${index}`}
                  className={`absolute right-2 top-0 text-xs text-white transition-opacity duration-500 ${isHovered || expanded ? "opacity-100" : "opacity-0"}`}
                >
                  0%
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Arrow */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center justify-center w-full mt-3 text-primary transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"}`}
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  )
}

// ------------------- SkillsSection -------------------
export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const skillsGridRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("All")

  const tabs = ["All", "Frontend", "Backend", "Programming & Core", "Design & Animation", "Tools"]

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

      gsap.fromTo(
        skillsGridRef.current?.children || [],
        { opacity: 0, y: 60, scale: 0.8, rotation: 10 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsGridRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-28 px-6 bg-gradient-to-b from-background to-muted/40 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-primary/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-cyan-400/20 blur-[140px] rounded-full"></div>

      <div className="container mx-auto max-w-8xl relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-10 tracking-tight"
        >
          Skills & Expertise
          <span className="block w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto mt-4 rounded-full shadow-lg"></span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-muted-foreground/10 text-muted-foreground hover:bg-primary/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          ref={skillsGridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12 justify-center"
        >
          {skillCategories
            .filter((cat) => activeTab === "All" || activeTab === cat.title)
            .map((category, index) => {
              const { hovered, toggleHover } = useTouchHover()
              return (
                <div key={index} onClick={toggleHover}>
                  <SkillCard category={category} forceHover={hovered} />
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
