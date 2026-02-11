export default function TraitSystem() {
  const mentalStates = [
    "Basic Trading FOMO",
    "Standard Portfolio Depression",
    "Advanced Hopium Addiction",
    "Enhanced HODL Psychosis",
    "Chronic Refresh Syndrome",
    "Multi-Personality Order Book",
    "Leverage Madness",
    "Ultimate Trading God Complex",
  ];

  const intensities = [
    { level: "Mildly", tier: "Common", color: "#9ca3af" },
    { level: "Severe", tier: "Uncommon", color: "#22c55e" },
    { level: "Critical", tier: "Epic", color: "#a855f7" },
    { level: "Terminal", tier: "Legendary", color: "#06b6d4" },
    { level: "Third Eye Bleeding", tier: "Mythic", color: "#ef4444" },
    { level: "Beyond Cosmic Comprehension", tier: "Mythic+", color: "#ec4899" },
    { level: "Reality Collapse", tier: "God Tier", color: "#fbbf24" },
  ];

  const superpowers = [
    { name: "Bought BTC 2008", effect: "1x Guaranteed Legendary" },
    { name: "Credit Card", effect: "1x Double Drop Event" },
    { name: "Bank Transfer", effect: "Guaranteed Rare Floor" },
    { name: "PayPal", effect: "+25% Faster Drops" },
  ];

  return (
    <section id="traits" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-20" />

        <p className="text-xs tracking-[0.3em] uppercase text-[#00ff88] mb-4 font-mono">
          System
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Traits
        </h2>
        <p className="text-[#555] mb-20 text-sm">
          Three traits define manifestation. Two add personality.
        </p>

        {/* TRAIT 1: Mental State */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#00ff88] font-mono text-xs border border-[#00ff88]/30 rounded px-2 py-1">01</span>
            <h3 className="text-xl font-bold">Mental State</h3>
            <span className="text-[#444] text-xs font-mono">WHAT you manifest</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {mentalStates.map((ms) => (
              <div
                key={ms}
                className="border border-[#1a1a1a] rounded-lg p-4 bg-[#0a0a0a] card-hover"
              >
                <h4 className="text-xs font-semibold text-[#e5e5e5]">{ms}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* TRAIT 2: Intensity */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#8b5cf6] font-mono text-xs border border-[#8b5cf6]/30 rounded px-2 py-1">02</span>
            <h3 className="text-xl font-bold">Intensity</h3>
            <span className="text-[#444] text-xs font-mono">HOW GOOD it gets</span>
          </div>

          <div className="space-y-2">
            {intensities.map((int) => (
              <div
                key={int.level}
                className="flex items-center gap-4 border border-[#1a1a1a] rounded-lg p-3 bg-[#0a0a0a]"
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: int.color, boxShadow: `0 0 8px ${int.color}30` }}
                />
                <span className="text-sm font-semibold flex-1">{int.level}</span>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded border"
                  style={{ color: int.color, borderColor: `${int.color}30` }}
                >
                  {int.tier}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* TRAIT 3: Superpower */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#06b6d4] font-mono text-xs border border-[#06b6d4]/30 rounded px-2 py-1">03</span>
            <h3 className="text-xl font-bold">Superpower</h3>
            <span className="text-[#444] text-xs font-mono">RARE</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {superpowers.map((sp) => (
              <div
                key={sp.name}
                className="border border-[#06b6d4]/15 rounded-lg p-5 bg-[#0a0e10]/50"
              >
                <h4 className="font-bold text-[#22d3ee] text-sm mb-1">{sp.name}</h4>
                <p className="text-xs text-[#555]">{sp.effect}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Flavor Traits */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#444]">Flavor Traits <span className="text-xs font-normal text-[#333]">(lore only)</span></h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-mono text-[#333] tracking-wider mb-3">DURATION</h4>
              <ul className="space-y-1.5 text-xs text-[#444]">
                <li>Until Pizza Arrives</li>
                <li>Until Girlfriend Becomes Real</li>
                <li>Until Mom Stops Being Disappointed</li>
                <li>Until Student Loans Disappear</li>
                <li>Until Heat Death of Universe</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono text-[#333] tracking-wider mb-3">TRIGGER</h4>
              <ul className="space-y-1.5 text-xs text-[#444]">
                <li>Beer Foam Chart Patterns</li>
                <li>Rain Makes Wife Leave Again</li>
                <li>Reddit FUD</li>
                <li>Microwave Beep</li>
                <li>Cat Walking On Keyboard Buy</li>
                <li>Porn</li>
                <li>Boss Eye Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
