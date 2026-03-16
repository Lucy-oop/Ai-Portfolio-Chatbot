import { useRef, useEffect } from "react";
import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Message } from "./types";

type ChatAreaProps = {
  messages: Message[];
  isLoading: boolean;
};

export default function ChatArea({ messages, isLoading }: ChatAreaProps) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white/40 backdrop-blur-md rounded-2xl m-4 shadow-lg border border-[#C7EABB]">

      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex gap-4 ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {msg.sender === "ai" && (
            <div className="w-8 h-8 rounded-full bg-[#84B179] flex items-center justify-center shrink-0 text-white">
              <Bot size={18} />
            </div>
          )}

          <div
            className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-sm ${
              msg.sender === "user"
                ? "bg-[#84B179] text-white rounded-tr-none border border-[#6A7E3F]"
                : "bg-white text-slate-700 rounded-tl-none border border-[#6A7E3F]"
            }`}
          >
            <ReactMarkdown>
              {msg.text}
            </ReactMarkdown>
          </div>

          {msg.sender === "user" && (
            <div className="w-8 h-8 rounded-full bg-[#A2CB8B] flex items-center justify-center shrink-0 text-white">
              <User size={18} />
            </div>
          )}
        </div>
      ))}

      {isLoading && (
        <div className="flex gap-4 justify-start">
          <div className="w-8 h-8 rounded-full bg-[#84B179] flex items-center justify-center shrink-0 text-white">
            <Bot size={18} />
          </div>

          <div className="bg-white border border-[#C7EABB] rounded-2xl rounded-tl-none px-5 py-4 flex items-center gap-1">
            <div className="w-2 h-2 bg-[#84B179] rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div className="w-2 h-2 bg-[#84B179] rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-2 h-2 bg-[#84B179] rounded-full animate-bounce" />
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}