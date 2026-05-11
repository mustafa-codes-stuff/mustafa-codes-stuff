"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "Eventbrite",
    role: "Senior Software Engineer",
    period: "Oct 2023 - Apr 2026",
    description: [
      "Led end-to-end development of a scalable authentication system for 89M MAU, improving login success from 75% to 95%.",
      "Designed a scalable authentication entry point with dynamic user classification and flow orchestration.",
      "Implemented a multi-method MFA system (Email OTP, TOTP, Biometrics) for 1M creators.",
      "Extended Auth0 using Actions and custom APIs for product-aligned auth flows."
    ],
    skills: ["Next.js", "TypeScript", "Auth0", "Playwright", "System Design"]
  },
  {
    company: "Binaryveda",
    role: "Frontend Engineer",
    period: "Mar 2023 - Sep 2023",
    description: [
      "Developed SSR interfaces using Next.js for a hospitality management tool.",
      "Implemented guest lifecycle features via structured, role-based interfaces.",
      "Collaborated with Godrej Group to deliver scalable enterprise SaaS solutions."
    ],
    skills: ["Next.js", "React", "Enterprise SaaS"]
  },
  {
    company: "Axess.ai",
    role: "Software Engineer",
    period: "Jan 2022 - Mar 2023",
    description: [
      "Engineered a scalable, event-driven notifications and search system.",
      "Built geospatial features using Google Maps (markers, geofencing).",
      "Developed real-time data visualization interfaces handling large datasets."
    ],
    skills: ["Node.js", "Google Maps API", "Real-time Data", "IoT"]
  },
  {
    company: "TopYa!",
    role: "Full Stack Developer",
    period: "Nov 2020 - Dec 2021",
    description: [
      "Developed full-stack features for an EdTech platform, including attendance and reporting systems.",
      "Built reporting and analytics modules with filtering and segmentation.",
      "Developed dynamic public-facing pages and admin interfaces."
    ],
    skills: ["Full Stack", "EdTech", "Analytics"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center space-x-3 mb-12">
          <div className="p-2 bg-indigo-500/10 rounded-lg">
            <Briefcase className="h-6 w-6 text-indigo-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-border last:border-0 pb-12 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-background" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-indigo-500 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-muted mt-2 md:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex items-start">
                    <span className="mr-2 mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-xs font-semibold px-2 py-1 rounded border border-border bg-background"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
