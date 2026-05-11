"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Loader2, Bot, User } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [showCallout, setShowCallout] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Mustafa's AI assistant. How can I help you today?" }
  ])
  const [input, setInput] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Callout effect on page load
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowCallout(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: "user", content: input } as const
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setShowCallout(false)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      })

      const data = await response.json()
      if (data.error) throw new Error(data.error)

      setMessages(prev => [...prev, { role: "assistant", content: data.content }])
    } catch (error: any) {
      console.error("Chat Error:", error)
      setMessages(prev => [...prev, { role: "assistant", content: error.message || "Sorry, I encountered an error. Please try again later." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] glass rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/20"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-indigo-500/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-indigo-500 rounded-full">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Portfolio Assistant</h3>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-muted-foreground uppercase font-semibold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex max-w-[85%] space-x-2 ${m.role === "user" ? "flex-row-reverse space-x-reverse" : "flex-row"}`}>
                    <div className={`p-2 rounded-full h-fit mt-1 ${m.role === "user" ? "bg-indigo-500" : "bg-secondary"}`}>
                      {m.role === "user" ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user" 
                        ? "bg-indigo-500 text-white rounded-tr-none" 
                        : "bg-secondary text-foreground rounded-tl-none border border-border/50"
                    }`}>
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary p-3 rounded-2xl rounded-tl-none border border-border/50 flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin text-indigo-500" />
                    <span className="text-xs text-muted-foreground">Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-background/50">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about Syed..."
                  className="w-full bg-secondary/50 border border-border rounded-2xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 disabled:opacity-50 disabled:hover:bg-indigo-500 transition-all"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence>
          {showCallout && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="absolute bottom-full right-0 mb-4 mr-2"
            >
              <div className="bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-xl whitespace-nowrap relative">
                Ask me about Mustafa! 👋
                <div className="absolute -bottom-1 right-6 w-3 h-3 bg-indigo-600 rotate-45" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={false}
          animate={showCallout ? { y: [0, -5, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            setIsOpen(true)
            setShowCallout(false)
          }}
          className="p-4 bg-indigo-500 text-white rounded-full shadow-2xl shadow-indigo-500/20 flex items-center justify-center group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          {isOpen ? <X className="h-6 w-6 relative z-10" /> : <MessageSquare className="h-6 w-6 relative z-10" />}
          
          {/* Animated ping effect when callout is shown */}
          {showCallout && (
            <span className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-20" />
          )}
        </motion.button>
      </div>
    </div>
  )
}
