const { GoogleGenerativeAI } = require("@google/generative-ai");

async function findWorkingModel() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
  const models = [
    "gemini-1.5-flash",
    "models/gemini-1.5-flash",
    "gemini-1.5-pro",
    "models/gemini-1.5-pro",
    "gemini-pro",
    "models/gemini-pro",
    "gemini-1.5-flash-latest"
  ];

  for (const modelName of models) {
    try {
      console.log(`Testing model: ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("hi");
      console.log(`✅ Working model found: ${modelName}`);
      return;
    } catch (e) {
      console.log(`❌ Failed: ${modelName} (${e.status || e.message})`);
    }
  }
}

findWorkingModel();
