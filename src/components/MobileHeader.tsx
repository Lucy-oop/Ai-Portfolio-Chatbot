export default function MobileHeader() {
  return (
    <div className="md:hidden p-4 border-b border-[#C7EABB] bg-white/70 backdrop-blur-md flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[#84B179] flex items-center justify-center font-bold text-white">
        L
      </div>

      <div>
        <h1 className="font-bold text-sm">Lucy</h1>
        <p className="text-xs text-slate-500">Interactive AI Portfolio</p>
      </div>
    </div>
  );
}