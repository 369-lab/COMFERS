export default function TraitSystem() {
  const mentalStates = [
    { state: "Basic Trading FOMO", category: "Tech & Gadgets", icon: "📱" },
    { state: "Portfolio Depression", category: "Food & Beverage", icon: "🍜" },
    { state: "Hopium Addiction", category: "Digital Assets", icon: "💎" },
    { state: "HODL Psychosis", category: "Vehicles & Real Estate", icon: "🏠" },
    { state: "Chronic Refresh Syndrome", category: "Watches & Jewelry", icon: "⌚" },
    { state: "Multi-Personality Order Book", category: "Fashion & Accessories", icon: "👔" },
    { state: "Leverage Madness", category: "Experiences & High-Risk", icon: "🎰" },
    { state: "Ultimate Trading God Complex", category: "God Tier & Meta", icon: "👑" },
  ];

  const intensities = [
    { level: "Mildly", tier: "Common", example: "Ramen, Basic Phone", color: "#9ca3af" },
    { level: "Severe", tier: "Uncommon/Rare", example: "Jordan 1s, MacBook Pro", color: "#22c55e" },
    { level: "Critical", tier: "Epic", example: "Rolex, Tesla", color: "#a855f7" },
    { level: "Terminal", tier: "Legendary", example: "Lamborghini, Penthouse", color: "#f59e0b" },
    { level: "Third Eye Bleeding", tier: "Mythic Boost", example: "Enhanced drops", color: "#ef4444" },
    { level: "Beyond Cosmic Comprehension", tier: "Mythic+", example: "Premium drops", color: "#ec4899" },
    { level: "Reality Collapse", tier: "God Tier", example: "Guaranteed God Tier", color: "#fbbf24" },
  ];

  const superpowers = [
    { name: "Bought BTC 2008", effect: "1x Guaranteed Legendary Item", rarity: "Ultra Rare" },
    { name: "Credit Card", effect: "1x Double Drop Event", rarity: "Rare" },
    { name: "Bank Transfer", effect: "Guaranteed Rare Floor (never Common)", rarity: "Rare" },
    { name: "PayPal", effect: "Faster Drop Interval (+25%)", rarity: "Rare" },
  ];

  return (
    <section id="traits" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-20" />

        <p className="text-xs tracking-[0.3em] uppercase text-[#00ff88] mb-6 font-mono">
          System
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          The Trait System
        </h2>
        <p className="text-[#666] mb-20 max-w-2xl">
          Three core traits define what each Comfer manifests. Two flavor traits add personality.
        </p>

        {/* TRAIT 1: Mental State */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#00ff88] font-mono text-xs border border-[#00ff88]/30 rounded px-2 py-1">01</span>
            <h3 className="text-2xl font-bold">Mental State</h3>
            <span className="text-[#555] text-sm">&mdash; Determines WHAT you manifest</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mentalStates.map((ms) => (
              <div
                key={ms.state}
                className="border border-[#1a1a1a] rounded-lg p-5 bg-[#0a0a0a] card-hover"
              >
                <div className="text-2xl mb-3">{ms.icon}</div>
                <h4 className="text-sm font-semibold mb-1 text-[#e5e5e5]">{ms.state}</h4>
                <p className="text-xs text-[#00ff88] font-mono">{ms.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TRAIT 2: Intensity */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#8b5cf6] font-mono text-xs border border-[#8b5cf6]/30 rounded px-2 py-1">02</span>
            <h3 className="text-2xl font-bold">Intensity</h3>
            <span className="text-[#555] text-sm">&mdash; Determines HOW GOOD it gets</span>
          </div>

          <div className="space-y-3">
            {intensities.map((int) => (
              <div
                key={int.level}
                className="flex items-center gap-4 border border-[#1a1a1a] rounded-lg p-4 bg-[#0a0a0a] card-hover"
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: int.color, boxShadow: `0 0 10px ${int.color}40` }}
                />
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold">{int.level}</span>
                </div>
                <div className="hidden sm:block">
                  <span
                    className="text-xs font-mono px-2 py-1 rounded border"
                    style={{ color: int.color, borderColor: `${int.color}40` }}
                  >
                    {int.tier}
                  </span>
                </div>
                <div className="text-xs text-[#555] hidden md:block">{int.example}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TRAIT 3: Superpower */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#f59e0b] font-mono text-xs border border-[#f59e0b]/30 rounded px-2 py-1">03</span>
            <h3 className="text-2xl font-bold">Superpower</h3>
            <span className="text-[#555] text-sm">&mdash; Guaranteed Advantage (Rare)</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {superpowers.map((sp) => (
              <div
                key={sp.name}
                className="border border-[#f59e0b]/20 rounded-lg p-6 bg-[#0f0d0a]/50 card-hover"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-[#f59e0b]">{sp.name}</h4>
                  <span className="text-[10px] text-[#f59e0b]/60 font-mono uppercase">{sp.rarity}</span>
                </div>
                <p className="text-sm text-[#888]">{sp.effect}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Flavor Traits */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#555]">Flavor Traits <span className="text-xs font-normal text-[#333]">(Lore only, no system relevance)</span></h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-mono text-[#444] tracking-wider mb-4">DURATION</h4>
              <ul className="space-y-2 text-sm text-[#555]">
                <li>Until Pizza Arrives <span className="text-[#333]">(30-45 min)</span></li>
                <li>Until Girlfriend Becomes Real <span className="text-[#333]">(impossible)</span></li>
                <li>Until Mom Stops Being Disappointed <span className="text-[#333]">(forever)</span></li>
                <li>Until Student Loans Disappear <span className="text-[#333]">(generational)</span></li>
                <li>Until Heat Death of Universe <span className="text-[#333]">(literal end)</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono text-[#444] tracking-wider mb-4">TRIGGER</h4>
              <ul className="space-y-2 text-sm text-[#555]">
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
