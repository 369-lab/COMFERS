export default function Mechanics() {
  return (
    <section id="mechanics" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-20" />

        <p className="text-xs tracking-[0.3em] uppercase text-[#00ff88] mb-6 font-mono">
          System
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          How It Works
        </h2>
        <p className="text-[#666] mb-20 max-w-2xl">
          Deterministic. Permanent.
        </p>

        {/* Drop Logic Flow */}
        <div className="grid md:grid-cols-4 gap-4 mb-20">
          {[
            { step: "01", title: "Mental State", desc: "Selects category", color: "#00ff88" },
            { step: "02", title: "Intensity", desc: "Sets tier", color: "#8b5cf6" },
            { step: "03", title: "Superpower", desc: "Special rules", color: "#06b6d4" },
            { step: "04", title: "Manifestation", desc: "Item drops", color: "#ec4899" },
          ].map((s, i) => (
            <div key={s.step} className="relative">
              <div className="border border-[#1a1a1a] rounded-lg p-6 bg-[#0a0a0a] h-full">
                <span className="text-xs font-mono mb-4 block" style={{ color: s.color }}>
                  {s.step}
                </span>
                <h4 className="font-bold mb-2">{s.title}</h4>
                <p className="text-sm text-[#555]">{s.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-[#333] z-10">
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Example */}
        <div className="border border-[#00ff88]/20 rounded-lg p-8 bg-[#0a0f0a]/50 mb-20">
          <h3 className="text-sm font-mono text-[#00ff88] tracking-wider mb-6">EXAMPLE: COMFER #42</h3>
          <div className="grid sm:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-xs text-[#555] mb-1">Mental State</p>
              <p className="font-semibold text-[#00ff88]">Ultimate Trading God Complex</p>
            </div>
            <div>
              <p className="text-xs text-[#555] mb-1">Intensity</p>
              <p className="font-semibold text-[#ec4899]">Beyond Cosmic Comprehension</p>
            </div>
            <div>
              <p className="text-xs text-[#555] mb-1">Trigger</p>
              <p className="font-semibold text-[#888]">Boss Eye Contact</p>
            </div>
          </div>
          <div className="border-t border-[#1a1a1a] pt-6">
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="text-[#555]">&rarr;</span>
              <span className="text-[#888]">God Tier category</span>
              <span className="text-[#555]">&rarr;</span>
              <span className="text-[#888]">Mythic+ multiplier</span>
              <span className="text-[#555]">&rarr;</span>
              <span className="text-[#06b6d4] font-semibold">Rarest Comfer in existence</span>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Comfers Supply", value: "69", sub: "fixed" },
            { label: "Cosmos Supply", value: "10,000+", sub: "expandable" },
            { label: "Drop Interval", value: "~3 Mo", sub: "base rate" },
            { label: "System Traits", value: "3", sub: "core" },
          ].map((fact) => (
            <div key={fact.label} className="border border-[#1a1a1a] rounded-lg p-6 bg-[#0a0a0a] text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#00ff88] mb-1">{fact.value}</p>
              <p className="text-xs text-[#888] mb-0.5">{fact.label}</p>
              <p className="text-[10px] text-[#444] font-mono">{fact.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
