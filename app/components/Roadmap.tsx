export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Comfers Mint",
      description: "69 trading cards hit the chain. Foundation set.",
      status: "upcoming",
    },
    {
      phase: "Phase 2",
      title: "Cosmos Genesis Drop",
      description: "First items materialize for holders.",
      status: "upcoming",
    },
    {
      phase: "Phase 3",
      title: "Continuous Manifestation",
      description: "New drops every cycle. Nonstop.",
      status: "upcoming",
    },
    {
      phase: "Phase 4",
      title: "Secondary Market",
      description: "Cards and items become tradeable. Real value.",
      status: "upcoming",
    },
    {
      phase: "Phase 5",
      title: "Combine & Upgrade",
      description: "Combine and upgrade items. Evolve.",
      status: "upcoming",
    },
  ];

  return (
    <section id="roadmap" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-divider mb-20" />

        <p className="text-xs tracking-[0.3em] uppercase text-[#8b5cf6] mb-6 font-mono">
          Vision
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-20 tracking-tight">
          No Roadmap. A System.
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#00ff88]/30 via-[#8b5cf6]/30 to-transparent" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={phase.phase} className="relative pl-12">
                {/* Dot */}
                <div
                  className="absolute left-[10px] top-1.5 w-[11px] h-[11px] rounded-full border-2"
                  style={{
                    borderColor: index < 2 ? "#00ff88" : "#8b5cf6",
                    backgroundColor: index === 0 ? "#00ff88" : "transparent",
                  }}
                />

                <div>
                  <span className="text-xs font-mono text-[#444] tracking-wider">{phase.phase}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{phase.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
