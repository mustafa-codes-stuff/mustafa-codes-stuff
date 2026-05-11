"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Code2, Monitor, Search } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "AuthFlow",
    subtitle: "Scalable Authentication Playground",
    description: "Full-stack authentication system with login, MFA, session management, and LLM-based log analysis for failure diagnostics.",
    icon: Code2,
    tech: ["Next.js", "Node.js", "Redis", "PostgreSQL", "LLM API"],
    github: "https://github.com/mustafa-codes-stuff/authflow",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Real-Time Monitoring",
    subtitle: "Data Pipeline & Dashboard",
    description: "WebSocket-based streaming dashboard with anomaly detection and LLM-based explanations for observed data spikes.",
    icon: Monitor,
    tech: ["Next.js", "Node.js", "WebSockets", "LLM API"],
    github: "https://github.com/mustafa-codes-stuff/realtime-monitoring-dashboard",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "LogSense",
    subtitle: "AI Log Analyser",
    description: "Log analysis tool using structured LLM prompts to retrieve root cause insights and render them as JSON in a clean interface.",
    icon: Search,
    tech: ["Next.js", "Node.js", "LLM API", "TypeScript"],
    github: "https://github.com/mustafa-codes-stuff/logsense",
    color: "from-cyan-500 to-teal-500"
  }
]

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              A selection of my recent work focusing on scalability, real-time data, and AI integration.
            </p>
          </div>
          <Link 
            href="https://github.com/mustafa-codes-stuff" 
            target="_blank" 
            className="hidden md:flex items-center text-indigo-500 font-medium hover:underline gap-1"
          >
            View all on Github <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-background hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                <project.icon className="h-20 w-20 text-white/20 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform duration-500" />
                <project.icon className="h-12 w-12 text-white z-10" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold group-hover:text-indigo-500 transition-colors">{project.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{project.subtitle}</p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-secondary">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <Link 
                    href={project.github} 
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-semibold hover:text-indigo-500 transition-colors"
                  >
                    <Github className="h-4 w-4" /> Code
                  </Link>
                  <button className="flex items-center gap-2 text-sm font-semibold text-muted-foreground cursor-not-allowed">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
