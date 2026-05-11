import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Education, Footer } from "@/components/sections/extra";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Footer />
      
      {/* Future Chatbot Integration Placeholder */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          disabled
          className="p-4 bg-indigo-500 text-white rounded-full shadow-lg opacity-50 cursor-not-allowed flex items-center justify-center hover:scale-105 transition-transform"
          title="Chatbot coming soon!"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
        </button>
      </div>
    </main>
  );
}
