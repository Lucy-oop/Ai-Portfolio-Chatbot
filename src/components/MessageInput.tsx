import React, { useState } from "react";
import { Send } from "lucide-react";

type MessageInputProps = {
  isLoading: boolean;
  onSendMessage: (text: string) => void;
};

export default function MessageInput({ isLoading, onSendMessage }: MessageInputProps) {
  const [input, setInput] = useState<string>("");

  const suggestionChips: string[] = [
    "What programming languages does Lucy know?",
    "What libraries and frameworks does Lucy use?",
    "What AI and productivity tools does Lucy use?",
    "Why should we hire Lucy?"
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    onSendMessage(input.trim());
    setInput("");
  };

  return (
    <div className="p-4 bg-white/70 backdrop-blur-md border-t border-[#C7EABB] rounded-2xl">

      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {suggestionChips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => setInput(chip)}
            className="whitespace-nowrap px-4 py-2 bg-[#E8F5BD] hover:bg-[#C7EABB] text-slate-700 text-xs rounded-full transition-colors border border-[#C7EABB]"
          >
            {chip}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about my skills or frontend questions..."
          className="w-full bg-white text-slate-700 rounded-xl pl-4 pr-12 py-4 focus:outline-none focus:ring-2 focus:ring-[#84B179] transition-all border border-[#C7EABB] shadow-sm"
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="absolute right-2 p-2 bg-[#84B179] hover:bg-[#6fa45f] disabled:bg-[#C7EABB] rounded-lg transition-colors text-white shadow-md border border-[#6A7E3F]"
        >
          <Send size={20} className="text-[#6A7E3F]"/>
        </button>
      </form>
    </div>
  );
}