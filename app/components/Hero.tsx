export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 gradient-bg grid-pattern overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff88]/5 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00FFFF]/5 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="relative z-10 text-center max-w-4xl">
        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          <span className="text-[#00ff88] glow-green">FROG69</span>
        </h1>
        <p className="text-2xl md:text-3xl text-[#333] mb-2 font-light">&times;</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12">
          <span className="text-[#00FFFF] glow-cyan">TRADING CARDS</span>
        </h2>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-[#888] font-light italic mb-4">
          &ldquo;Your Psychosis Determines Your Prosperity.&rdquo;
        </p>

        {/* Sub-tagline */}
        <p className="text-sm md:text-base text-[#555] max-w-2xl mx-auto mb-16">
          69 unique trading cards. Crypto-degenerate frogs. Varying mental states and intensities.
        </p>

        {/* Formula */}
        <div className="inline-block border border-[#1a1a1a] rounded-lg px-8 py-4 bg-[#0a0a0a]/80">
          <p className="font-mono text-sm md:text-base">
            <span className="text-[#00ff88]">Mental State</span>
            <span className="text-[#555] mx-3">+</span>
            <span className="text-[#888]">Intensity</span>
            <span className="text-[#555] mx-3">+</span>
            <span className="text-[#00FFFF]">Superpower</span>
            <span className="text-[#555] mx-3">=</span>
            <span className="text-[#FFD700]">Rarity</span>
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
