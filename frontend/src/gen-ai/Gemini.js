import { GoogleGenerativeAI } from "@google/generative-ai";

// import dotenv from "dotenv";
// dotenv.config();
const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);

// const API_KEY = "AIzaSyD8P3sgaJEzGGsi6Y-rAtm8gobDETLWjKU";
// const API_KEY = "AIzaSyDutIptXVtQwUDkJKnZjI4ImyoA1wXueXc";
// const API_KEY = "AIzaSyA3g4rYwdpGQD4987Olb7pQM67kgrOTSOs"; using
// const API_KEY = "AIzaSyBPmBbfDBFQS5Hoo7sVnscF-PndQJCRhno";
// const API_KEY = "AIzaSyBQYAOT28diXBiMZvY9yPvi4j0TgJl22wM";

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 39,
  // maxOutputTokens: 8192,
  maxOutputTokens: 8000,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,

  history: [],
});

/////////////////////////////////////////////////////////////////////////////////////
