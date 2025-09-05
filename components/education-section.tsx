// "use client"

// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// const educationData = [
//   {
//     degree: "Bachelor in Computer Applications (BCA)",
//     institution: "Softwaric College, Nepal",
//     duration: "2019 - 2022",
//     description:
//       "Focused on software development, database management, and web technologies. Participated in various projects including job portal and travel dashboard apps.",
//   },
//   {
//     degree: "Higher Secondary Education (Science)",
//     institution: "Janakpur Higher Secondary School, Nepal",
//     duration: "2017 - 2019",
//     description:
//       "Completed science stream with focus on mathematics and computer science. Achieved high grades in programming and IT subjects.",
//   },
//   {
//     degree: "Secondary Education (SLC)",
//     institution: "Janakpur Secondary School, Nepal",
//     duration: "2015 - 2017",
//     description:
//       "Completed school leaving certificate with distinction in computer fundamentals and mathematics.",
//   },
// ]

// function EducationCard({ edu }: { edu: any }) {
//   return (
//     <div className="relative bg-background/70 dark:bg-gray-800 backdrop-blur-md border border-border rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
//       <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
//       <p className="text-muted-foreground mb-1 font-medium">{edu.institution}</p>
//       <p className="text-sm text-primary mb-3">{edu.duration}</p>
//       <p className="text-sm text-muted-foreground">{edu.description}</p>
//     </div>
//   )
// }

// export default function EducationSection() {
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
//     <section id="education" ref={sectionRef} className="relative py-28 px-6">
//       <h2
//         ref={titleRef}
//         className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-20 tracking-tight"
//       >
//         Education
//         <span className="block w-24 h-1 bg-gradient-to-r from-primary to-cyan-500 mx-auto mt-4 rounded-full shadow-lg"></span>
//       </h2>

//       <div
//         ref={cardsRef}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
//       >
//         {educationData.map((edu, idx) => (
//           <EducationCard key={idx} edu={edu} />
//         ))}
//       </div>
//     </section>
//   )
// }
