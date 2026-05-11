"use client"

import { motion } from "framer-motion"
import { Code, LayoutTemplate, Database, Cloud, Terminal, CircleCheck } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: LayoutTemplate,
    skills: ["React", "Next.js", "Redux", "React Query", "Tailwind CSS", "Web Performance"]
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js (Express)", "GraphQL", "REST APIs", "Webhooks", "Event-driven architecture"]
  },
  {
    title: "Testing & Tools",
    icon: CircleCheck,
    skills: ["Playwright", "Jest", "React Testing Library", "Github", "JIRA", "Figma"]
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["AWS (Lambda, S3, etc.)", "Terraform", "CircleCI", "Docker", "Datadog"]
  },
  {
    title: "Databases & Queues",
    icon: Terminal,
    skills: ["MongoDB", "MySQL", "Redis", "RabbitMQ", "PostgreSQL"]
  },
  {
    title: "AI & Future Tech",
    icon: Code,
    skills: ["LLM API integration", "RAG architectures", "Prompt engineering"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Skillset</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my expertise across the full software development lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl group hover:border-indigo-500/50 transition-all"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full bg-secondary/50 border border-border group-hover:border-indigo-500/20 transition-all"
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
