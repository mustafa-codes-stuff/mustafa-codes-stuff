const { GoogleGenerativeAI } = require("@google/generative-ai");

async function listModels() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
  try {
    const models = await genAI.listModels();
    console.log("Available Models:");
    models.models.forEach(m => console.log(m.name));
  } catch (e) {
    console.error("Error listing models:", e);
  }
}

listModels();
