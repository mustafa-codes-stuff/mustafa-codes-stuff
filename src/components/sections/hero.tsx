"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Rocket, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="section-padding flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 max-w-4xl"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-sm font-medium mb-6">
          <Sparkles className="h-4 w-4" />
          <span>Senior Software Engineer</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Building <span className="gradient-text">Scalable Systems</span> <br />
          with Modern Architecture
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm <span className="text-foreground font-semibold">Syed Ahmad Mustafa</span>, a Full Stack Engineer with 5+ years of experience specialized in building user-facing systems and high-growth platforms.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#projects" 
            className="group px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:opacity-90 transition-all"
          >
            View Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="#experience" 
            className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium border border-border hover:bg-secondary/80 transition-all"
          >
            Read Experience
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
