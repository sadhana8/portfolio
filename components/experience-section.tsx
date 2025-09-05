// "use client"

// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// const experienceData = [
//   {
//     role: "Full-Stack Developer Intern",
//     company: "Tech Solutions Pvt. Ltd., Nepal",
//     duration: "Jun 2024 - Aug 2024",
//     description:
//       "Developed and maintained MERN stack applications. Implemented user authentication, dynamic dashboards, and responsive UI designs.",
//   },
//   {
//     role: "Frontend Developer",
//     company: "Creative Web Studio, Nepal",
//     duration: "Jan 2023 - May 2024",
//     description:
//       "Worked on React/Next.js projects, created reusable components, and integrated REST and GraphQL APIs.",
//   },
//   {
//     role: "Backend Developer",
//     company: "Softwaric College Projects, Nepal",
//     duration: "Sep 2022 - Dec 2022",
//     description:
//       "Built backend APIs with Node.js & Express.js, managed MongoDB databases, and implemented secure authentication for projects like Job Portal and Recipe Generator.",
//   },
// ]

// function ExperienceCard({ exp }: { exp: any }) {
//   return (
//     <div className="relative bg-background/70 dark:bg-gray-800 backdrop-blur-md border border-border rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
//       <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
//       <p className="text-muted-foreground mb-1 font-medium">{exp.company}</p>
//       <p className="text-sm text-primary mb-3">{exp.duration}</p>
//       <p className="text-sm text-muted-foreground">{exp.description}</p>
//     </div>
//   )
// }

// export default function ExperienceSection() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const titleRef = useRef<HTMLHeadingElement>(null)
//   const cardsRef = useRef<HTMLDivElement>(null)

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
//         cardsRef.current?.children || [],
//         { opacity: 0, y: 60, scale: 0.8 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1,
//           stagger: 0.15,
//           ease: "back.out(1.7)",
//           scrollTrigger: {
//             trigger: cardsRef.current,
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
//     <section id="experience" ref={sectionRef} className="relative py-28 px-6">
//       <h2
//         ref={titleRef}
//         className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-20 tracking-tight"
//       >
//         Experience
//         <span className="block w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto mt-4 rounded-full shadow-lg"></span>
//       </h2>

//       <div
//         ref={cardsRef}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
//       >
//         {experienceData.map((exp, idx) => (
//           <ExperienceCard key={idx} exp={exp} />
//         ))}
//       </div>
//     </section>
//   )
// }
