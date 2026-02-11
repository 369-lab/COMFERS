export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 gradient-bg grid-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff88]/5 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#8b5cf6]/5 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="relative z-10 text-center max-w-4xl">
        {/* Pre-title */}
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#444] mb-8 font-mono">
          The 69 Chosen Degenerates
        </p>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          <span className="text-[#00ff88] glow-green">COMFERS</span>
        </h1>
        <p className="text-2xl md:text-3xl text-[#333] mb-2 font-light">&times;</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12">
          <span className="text-[#8b5cf6] glow-purple">COSMOS OF CREAM</span>
        </h2>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-[#888] font-light italic mb-4">
          &ldquo;Manifesting abundance.&rdquo;
        </p>

        {/* Sub tagline */}
        <p className="text-sm md:text-base text-[#555] max-w-2xl mx-auto mb-16 leading-relaxed">
          Your mental disorder manifests your material reality.
          <br />
          From Basic FOMO to Ultimate God Complex &mdash; From Instant Noodles to Private Islands.
        </p>

        {/* Formula */}
        <div className="inline-block border border-[#1a1a1a] rounded-lg px-8 py-4 bg-[#0a0a0a]/80">
          <p className="font-mono text-sm md:text-base">
            <span className="text-[#00ff88]">Psychosis</span>
            <span className="text-[#333] mx-2">(Comfer)</span>
            <span className="text-[#555]">&times;</span>
            <span className="text-[#888] mx-2">Time</span>
            <span className="text-[#555]">=</span>
            <span className="text-[#8b5cf6] ml-2">Prosperity</span>
            <span className="text-[#333] mx-2">(Cosmos)</span>
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-float">
          <svg className="w-6 h-6 mx-auto text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
