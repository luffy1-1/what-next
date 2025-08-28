// app/components/GlassCard.tsx
export default function CardTwo() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div
        className="
        relative 
        p-10 
        w-80 
        rounded-3xl 
        border border-white/40 
        bg-white/10 
        backdrop-blur-xl 
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      "
      >
        {/* subtle highlight */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-white/10 opacity-40 pointer-events-none"></div>

        <h2 className="relative text-white text-2xl font-bold mb-3">
          ✨ Glass Effect
        </h2>
        <p className="relative text-white/80 text-sm">
          A frosted-glass design with strong blur, borders, and gradient
          overlay.
        </p>
      </div>
    </div>
  );
}
