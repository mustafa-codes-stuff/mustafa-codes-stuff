"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Code, Server, Cpu, Database } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="section-padding flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] relative overflow-hidden gap-12">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 max-w-2xl lg:text-left text-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-sm font-medium mb-6"
        >
          <Sparkles className="h-4 w-4" />
          <span>Software Engineer</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Architecting <br />
          <span className="gradient-text">Scalable Future</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl lg:mx-0 mx-auto leading-relaxed">
          I'm <span className="text-foreground font-semibold">Syed Ahmad Mustafa</span>. I specialize in building high-impact user and platform systems, serving 89M+ monthly active users with modern, resilient architectures.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
          <Link 
            href="#projects" 
            className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="#about" 
            className="px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold border border-border hover:bg-secondary/80 transition-all"
          >
            About Me
          </Link>
        </div>
      </motion.div>

      {/* Visual Element / SVGs */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative hidden lg:flex items-center justify-center w-full lg:w-1/2 h-[500px]"
      >
        <div className="relative w-full max-w-md aspect-square">
          {/* Main Illustration Wrapper */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" />
          </div>
          
          {/* Floating Icons representing architecture */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 glass p-4 rounded-2xl shadow-xl"
          >
            <Code className="h-8 w-8 text-indigo-500" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-10 right-10 glass p-5 rounded-2xl shadow-xl"
          >
            <Server className="h-10 w-10 text-purple-500" />
          </motion.div>

          <motion.div 
            animate={{ x: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -right-4 glass p-4 rounded-2xl shadow-xl"
          >
            <Cpu className="h-8 w-8 text-blue-500" />
          </motion.div>

          <motion.div 
            animate={{ x: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-1/3 -left-10 glass p-6 rounded-2xl shadow-xl"
          >
            <Database className="h-10 w-10 text-emerald-500" />
          </motion.div>

          {/* Center Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full text-indigo-500/20" viewBox="0 0 400 400">
            <motion.path 
              d="M100 50 Q 200 200 300 350" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path 
              d="M300 100 Q 150 200 50 300" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              animate={{ strokeDashoffset: [0, 20] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <circle cx="200" cy="200" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50" />
            <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-30" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
