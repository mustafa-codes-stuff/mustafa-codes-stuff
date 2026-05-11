"use client"

import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center space-x-3 mb-12">
          <div className="p-2 bg-indigo-500/10 rounded-lg">
            <GraduationCap className="h-6 w-6 text-indigo-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        </div>

        <div className="glass p-8 rounded-2xl border-l-4 border-l-indigo-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
            <div>
              <h3 className="text-2xl font-bold">Bachelor of Technology (ECE)</h3>
              <p className="text-xl text-indigo-500 font-medium">Jamia Millia Islamia, New Delhi</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="flex items-center text-muted-foreground text-sm gap-2">
                <Calendar className="h-4 w-4" /> 2016 - 2020
              </div>
              <div className="text-sm font-bold bg-indigo-500/10 text-indigo-500 px-3 py-1 rounded-full">
                CPI: 9.3
              </div>
            </div>
          </div>
          
          <div className="flex items-center text-muted-foreground gap-2 mt-4">
            <MapPin className="h-4 w-4" /> New Delhi, India
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-xl font-bold mb-2">Mustafa<span className="text-indigo-500">.</span></p>
          <p className="text-sm text-muted-foreground">Building high-impact user and platform systems.</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="text-sm font-medium">syedahmadmustafa660@gmail.com</p>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Syed Ahmad Mustafa. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
