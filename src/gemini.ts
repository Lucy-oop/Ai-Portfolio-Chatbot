import { GoogleGenerativeAI } from "@google/generative-ai";
import { portfolioContext } from "./portfolioContext";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// We use the gemini-1.5-flash model as it's fast and supports system instructions
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: portfolioContext,
});

// Initialize a chat session so it remembers the conversation history
export const chatSession = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Hello! Who are you?" }],
    },
    {
      role: "model",
      parts: [{ text: "Hi! I'm Lucy's AI Assistant. I can tell you about her skills, projects, or answer frontend development questions. What would you like to know?" }],
    },
  ],
});