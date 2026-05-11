"use client"

import { motion } from "framer-motion"
import { User, Cpu, Code2, Globe } from "lucide-react"

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-indigo-500/10 rounded-lg">
                <User className="h-6 w-6 text-indigo-500" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Full Stack Engineer with <span className="text-foreground font-semibold">5+ years of experience</span> building and scaling user-facing and platform-level systems in high-growth environments. 
              </p>
              <p>
                Expertise in frontend and frontend architecture, with strong proficiency in <span className="text-foreground font-semibold">React, Next.js, and TypeScript</span>, complemented by backend development in <span className="text-foreground font-semibold">Node.js, GraphQL, and AWS</span>.
              </p>
              <p>
                I have contributed to large-scale applications serving tens of millions of users, including system design and scaling of authentication flows, performance optimization, and multi-factor identity systems.
              </p>
              <p>
                Currently building projects involving <span className="text-indigo-500 font-semibold">LLM API integrations and RAG-based workflows</span> to expand into AI-driven applications. I seek senior roles to design and scale high-impact user and platform systems in product-led companies.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { 
                icon: Globe, 
                title: "Scale", 
                text: "Scaling systems for 89M+ monthly active users.",
                color: "bg-blue-500/10 text-blue-500"
              },
              { 
                icon: Cpu, 
                title: "AI First", 
                text: "Pioneering LLM and RAG integrations in modern apps.",
                color: "bg-purple-500/10 text-purple-500"
              },
              { 
                icon: Code2, 
                title: "Architecture", 
                text: "Expert in scalable frontend & backend orchestration.",
                color: "bg-emerald-500/10 text-emerald-500"
              },
              { 
                icon: User, 
                title: "Leadership", 
                text: "Mentoring teams and leading high-impact initiatives.",
                color: "bg-orange-500/10 text-orange-500"
              }
            ].map((item, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-border/50 hover:border-indigo-500/30 transition-all group">
                <div className={`p-3 rounded-xl w-fit mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
