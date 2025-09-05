// "use client"

// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { GitHub, ExternalLink } from "lucide-react"

// gsap.registerPlugin(ScrollTrigger)

// const projects = [
//   {
//     title: "Job Portal",
//     description: "Full-stack MERN job portal with user authentication and role-based dashboard.",
//     tech: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
//     github: "https://github.com/yourusername/job-portal",
//     live: "#",
//     image: "/projects/jobportal.png",
//   },
//   {
//     title: "Recipe Generator",
//     description: "AI-powered recipe generator using OpenAI API and React frontend.",
//     tech: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
//     github: "https://github.com/yourusername/recipe-generator",
//     live: "#",
//     image: "/projects/recipe.png",
//   },
//   {
//     title: "Travel Dashboard",
//     description: "Interactive travel analytics dashboard with real-time charts and filters.",
//     tech: ["Next.js", "Chart.js", "MongoDB", "Tailwind CSS"],
//     github: "https://github.com/yourusername/travel-dashboard",
//     live: "#",
//     image: "/projects/travel.png",
//   },
// ]

// function ProjectCard({ project }: { project: any }) {
//   return (
//     <div className="group relative bg-background/70 backdrop-blur-lg border border-border rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
//       {/* Project image */}
//       <div className="w-full h-48 overflow-hidden rounded-t-2xl">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />
//       </div>

//       {/* Project info */}
//       <div className="p-5 flex flex-col justify-between h-48">
//         <div>
//           <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//           <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
//           <div className="flex flex-wrap gap-2">
//             {project.tech.map((tech: string, idx: number) => (
//               <span
//                 key={idx}
//                 className="text-xs px-2 py-1 rounded bg-primary/20 text-primary font-medium"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-3 mt-4">
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 px-3 py-2 bg-gray-800 text-white rounded hover:bg-primary transition-colors"
//           >
//             <GitHub className="w-4 h-4" /> GitHub
//           </a>
//           {project.live && (
//             <a
//               href={project.live}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1 px-3 py-2 bg-gray-800 text-white rounded hover:bg-cyan-500 transition-colors"
//             >
//               <ExternalLink className="w-4 h-4" /> Live
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function ProjectsSection() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const titleRef = useRef<HTMLHeadingElement>(null)
//   const projectsGridRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       )

//       gsap.fromTo(
//         projectsGridRef.current?.children || [],
//         { opacity: 0, y: 60, scale: 0.8 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1,
//           stagger: 0.15,
//           ease: "back.out(1.7)",
//           scrollTrigger: {
//             trigger: projectsGridRef.current,
//             start: "top 85%",
//             end: "bottom 15%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className="py-28 px-6 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden"
//     >
//       <div className="container mx-auto max-w-7xl relative z-10">
//         <h2
//           ref={titleRef}
//           className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-20 tracking-tight"
//         >
//           My Projects
//           <span className="block w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto mt-4 rounded-full shadow-lg"></span>
//         </h2>

//         <div
//           ref={projectsGridRef}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
//         >
//           {projects.map((project, idx) => (
//             <ProjectCard key={idx} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
