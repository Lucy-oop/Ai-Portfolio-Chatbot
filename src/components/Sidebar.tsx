import { Code, Briefcase } from "lucide-react";
import Dog from "../assets/dog.png";

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col w-80 bg-white/70 backdrop-blur-md p-6 border-r border-[#C7EABB] shadow-lg">

      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full bg-[#84B179] flex items-center justify-center text-2xl font-bold text-white">
         <img src={Dog} className="w-12"/>
        </div>

        <div>
          <h1 className="text-xl font-bold text-[#6A7E3F]">Lucy</h1>
          <p className="text-slate-500 text-sm">Junior Frontend Developer</p>
        </div>
      </div>

      <div className="space-y-6 flex-1">

        <div>
          <h2 className="flex items-center gap-2 text-[#6A7E3F] font-semibold mb-3">
            <Code size={18} /> Tech Stack
          </h2>

          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Tailwind", "Next.js", "AI APIs"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#E8F5BD] text-slate-700 border border-[#C7EABB] rounded-full text-xs shadow-xl"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-[#6A7E3F] font-semibold mb-3">
            <Briefcase size={18} /> Featured Projects
          </h2>

          <ul className="space-y-2 text-sm text-slate-600">
            <li>• AI Code Reviewer</li>
            <li>• E-commerce Dashboard</li>
          </ul>
        </div>

      </div>

      <div className="text-xs text-slate-500 text-center">
        Powered by React & Google Gemini
      </div>
    </div>
  );
}