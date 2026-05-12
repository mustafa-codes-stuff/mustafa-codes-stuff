"use client"

import { motion } from "framer-motion"
import { Code, Monitor, Search } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "AuthFlow",
    subtitle: "Scalable Authentication Playground",
    description: "Full-stack authentication system with login, MFA, session management, and LLM-based log analysis for failure diagnostics.",
    icon: Code,
    tech: ["Next.js", "Node.js", "Redis", "PostgreSQL", "LLM API"],
    github: "https://github.com/mustafa-codes-stuff/authflow",
    demo: null,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Real-Time Monitoring",
    subtitle: "Data Pipeline & Dashboard",
    description: "WebSocket-based streaming dashboard with anomaly detection and LLM-based explanations for observed data spikes.",
    icon: Monitor,
    tech: ["Next.js", "Node.js", "WebSockets", "LLM API"],
    github: "https://github.com/mustafa-codes-stuff/realtime-monitoring-dashboard",
    demo: null,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "LogSense",
    subtitle: "AI Log Analyser",
    description: "Log analysis tool using structured LLM prompts to retrieve root cause insights and render them as JSON in a clean interface.",
    icon: Search,
    tech: ["Next.js", "Node.js", "LLM API", "TypeScript"],
    github: "https://github.com/mustafa-codes-stuff/logsense",
    demo: "https://logsense-hazel.vercel.app/",
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
            View all on Github 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    Code
                  </Link>
                  {project.demo && (
                    <Link 
                      href={project.demo} 
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-semibold text-indigo-500 hover:underline transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
