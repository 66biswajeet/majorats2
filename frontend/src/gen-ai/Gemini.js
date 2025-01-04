import { GoogleGenerativeAI } from "@google/generative-ai";

// import dotenv from "dotenv";
// dotenv.config();
const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);

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
