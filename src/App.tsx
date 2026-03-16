import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import ChatArea from "./components/ChatArea";
import MessageInput from "./components/MessageInput";
import { chatSession } from "./gemini";
import type { Message } from "./components/types"

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Lucy's AI Assistant. I can tell you about her skills, explain her projects, or even answer frontend development questions. Try asking me something!",
      sender: "ai",
    },
  ]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = async (userText: string): Promise<void> => {
    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: "user"
    };
    setMessages((prev) => [...prev, newUserMsg]);
    setIsLoading(true);
  
    try {
      const result = await chatSession.sendMessage(userText);
      const aiResponse = result.response.text();
      const newAiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: "ai",
      };
      setMessages((prev) => [...prev, newAiMsg]);

    } catch (error) {
      console.error("Failed to get response:", error);

      const errorMsg: Message ={
        id: Date.now().toString(),
        text: "Oops! I'm having trouble connecting to my brain right now. Please try again later.",
        sender: "ai",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

   return (
    <div className="flex h-screen bg-gradient-to-br from-[#E8F5BD] via-[#C7EABB] to-[#A2CB8B] text-slate-800 font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col h-full max-w-4xl mx-auto w-full relative">
        <MobileHeader />

        <ChatArea messages={messages} isLoading={isLoading} />

        <MessageInput
          isLoading={isLoading}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}