"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun, Github, Linkedin, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">
            Mustafa<span className="text-indigo-500">.</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#experience" className="hover:text-indigo-500 transition-colors">Experience</Link>
          <Link href="#skills" className="hover:text-indigo-500 transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-indigo-500 transition-colors">Projects</Link>
          <Link href="#education" className="hover:text-indigo-500 transition-colors">Education</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 mr-2 border-r pr-4 border-border">
            <Link href="https://github.com/mustafa-codes-stuff" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5 hover:text-indigo-500 transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/syedahmadmustafa" target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5 hover:text-indigo-500 transition-colors" />
            </Link>
          </div>
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full p-2 hover:bg-accent transition-colors"
          >
            {mounted && (
              theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-indigo-600" />
              )
            )}
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </div>
    </header>
  )
}
