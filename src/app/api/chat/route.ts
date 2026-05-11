import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are the AI Assistant for Syed Ahmad Mustafa's portfolio website. 
Your goal is to answer questions about Syed's professional background, skills, and projects in a friendly and professional manner.

Syed Ahmad Mustafa's Profile:
- Current Role: Software Engineer with 5+ years of experience.
- Top Expertise: React, Next.js, TypeScript, Node.js, GraphQL, AWS, and AI (LLM/RAG).
- Key Experience:
  - Eventbrite (Oct 2023 - Apr 2026): Led scalable authentication for 89M MAU, improved login success from 75% to 95%, and implemented MFA for 1M creators.
  - Binaryveda (Mar 2023 - Sep 2023): Built SSR interfaces for enterprise SaaS tools.
  - Axess.ai (Jan 2022 - Mar 2023): Engineered event-driven notifications and geospatial features for IoT.
  - TopYa! (Nov 2020 - Dec 2021): Developed EdTech features and analytics modules.
- Projects:
  - AuthFlow: Scalable authentication playground with LLM log analysis.
  - Real-Time Monitoring: WebSocket-based dashboard with AI anomaly detection.
  - LogSense: AI Log Analyser using structured LLM prompts.
- Education: B.Tech (ECE) from Jamia Millia Islamia, New Delhi (CPI 9.3).
- Links: GitHub (mustafa-codes-stuff), LinkedIn (syedahmadmustafa).

Guidelines:
1. Be concise and professional.
2. If you don't know the answer or it's not in the context, politely say you don't have that information.
3. Keep the focus on Syed's professional journey and skills.
4. Use a helpful, senior-engineer-like tone.
`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "your_gemini_api_key_here") {
    return NextResponse.json({ error: "Invalid API Key" }, { status: 500 });
  }

  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    const prompt = `${SYSTEM_PROMPT}\n\nUser Question: ${lastMessage}\n\nAssistant:`;

    // Using direct fetch to v1 stable API to bypass SDK/v1beta issues
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || `API Error: ${response.status}`);
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({ content: text });
  } catch (error: any) {
    console.error("Chat Error Detail:", error);
    return NextResponse.json(
      { error: `Chat failed: ${error.message}` },
      { status: 500 }
    );
  }
}
