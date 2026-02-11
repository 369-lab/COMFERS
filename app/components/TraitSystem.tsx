"use client";

const F = {
  mono: "'IBM Plex Mono', monospace",
  sans: "'DM Sans', sans-serif",
};

const RARITY_COLORS: Record<string, { border: string; label: string }> = {
  Common:     { border: "#6B7280", label: "#9CA3AF" },
  Uncommon:   { border: "#22C55E", label: "#4ADE80" },
  Rare:       { border: "#3B82F6", label: "#60A5FA" },
  Epic:       { border: "#A855F7", label: "#C084FC" },
  Legendary:  { border: "#06B6D4", label: "#22D3EE" },
  Mythic:     { border: "#EF4444", label: "#F87171" },
  "Mythic+":  { border: "#EC4899", label: "#F472B6" },
  "God Tier": { border: "#FBBF24", label: "#FDE68A" },
};

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
    { level: "Mildly", tier: "Common", bars: 1 },
    { level: "Severe", tier: "Uncommon", bars: 2 },
    { level: "Critical", tier: "Epic", bars: 3 },
    { level: "Terminal", tier: "Legendary", bars: 4 },
    { level: "Third Eye Bleeding", tier: "Mythic", bars: 5 },
    { level: "Beyond Cosmic Comprehension", tier: "Mythic+", bars: 6 },
    { level: "Reality Collapse", tier: "God Tier", bars: 7 },
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

        <p style={{ fontFamily: F.mono }} className="text-xs tracking-[0.3em] uppercase text-[#00ff88] mb-4">
          System
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Traits
        </h2>
        <p className="text-[#555] mb-20 text-sm">
          Three traits define manifestation. Two add personality.
        </p>

        {/* TRAIT 1: Mental State — card-style panel */}
        <div className="mb-24">
          <div style={{
            borderRadius: "10px", padding: "1.5px",
            background: "linear-gradient(135deg, rgba(0,255,136,0.2) 0%, rgba(0,255,136,0.5) 50%, rgba(0,255,136,0.2) 100%)",
          }}>
            <div style={{
              borderRadius: "8.5px", background: "#08090F", padding: "20px",
            }}>
              {/* Card header */}
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                marginBottom: "16px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{
                    fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                    color: "#00ff88", letterSpacing: "1.5px",
                    padding: "2px 8px", borderRadius: "2px",
                    background: "rgba(0,255,136,0.06)", border: "1px solid rgba(0,255,136,0.15)",
                  }}>01</span>
                  <span style={{
                    fontFamily: F.sans, fontSize: "16px", fontWeight: 700,
                    color: "rgba(255,255,255,0.88)",
                  }}>Mental State</span>
                </div>
                <span style={{
                  fontFamily: F.mono, fontSize: "8px", fontWeight: 500,
                  color: "rgba(255,255,255,0.2)", letterSpacing: "2px",
                }}>WHAT YOU MANIFEST</span>
              </div>

              {/* Stats-style rows */}
              <div style={{
                background: "rgba(255,255,255,0.02)", borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.02)", padding: "2px 0",
              }}>
                {mentalStates.map((ms, i) => (
                  <div key={ms} style={{
                    padding: "8px 12px",
                    borderBottom: i < mentalStates.length - 1 ? "1px solid rgba(255,255,255,0.02)" : "none",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                    <span style={{
                      fontFamily: F.sans, fontSize: "12px", fontWeight: 500,
                      color: "rgba(255,255,255,0.6)",
                    }}>{ms}</span>
                    <span style={{
                      fontFamily: F.mono, fontSize: "7px",
                      color: "rgba(255,255,255,0.12)", letterSpacing: "1px",
                    }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TRAIT 2: Intensity — card-style panel */}
        <div className="mb-24">
          <div style={{
            borderRadius: "10px", padding: "1.5px",
            background: "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.5) 50%, rgba(139,92,246,0.2) 100%)",
          }}>
            <div style={{
              borderRadius: "8.5px", background: "#0C0810", padding: "20px",
            }}>
              {/* Card header */}
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                marginBottom: "16px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{
                    fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                    color: "#8b5cf6", letterSpacing: "1.5px",
                    padding: "2px 8px", borderRadius: "2px",
                    background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.15)",
                  }}>02</span>
                  <span style={{
                    fontFamily: F.sans, fontSize: "16px", fontWeight: 700,
                    color: "rgba(255,255,255,0.88)",
                  }}>Intensity</span>
                </div>
                <span style={{
                  fontFamily: F.mono, fontSize: "8px", fontWeight: 500,
                  color: "rgba(255,255,255,0.2)", letterSpacing: "2px",
                }}>HOW HARD IT HITS</span>
              </div>

              {/* Intensity rows with bars */}
              <div style={{
                background: "rgba(255,255,255,0.02)", borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.02)", padding: "2px 0",
              }}>
                {intensities.map((int, i) => {
                  const r = RARITY_COLORS[int.tier] || RARITY_COLORS.Common;
                  return (
                    <div key={int.level} style={{
                      padding: "8px 12px",
                      borderBottom: i < intensities.length - 1 ? "1px solid rgba(255,255,255,0.02)" : "none",
                      display: "flex", alignItems: "center", gap: "12px",
                    }}>
                      {/* Intensity bar */}
                      <div style={{ display: "flex", gap: "2px", alignItems: "center", flexShrink: 0 }}>
                        {Array.from({ length: 7 }).map((_, j) => (
                          <div key={j} style={{
                            width: "14px", height: "4px", borderRadius: "1px",
                            background: j < int.bars ? r.label : "rgba(255,255,255,0.04)",
                            opacity: j < int.bars ? 1 : 0.4,
                          }} />
                        ))}
                      </div>
                      {/* Level name */}
                      <span style={{
                        fontFamily: F.sans, fontSize: "12px", fontWeight: 500,
                        color: r.label, flex: 1, opacity: 0.8,
                      }}>{int.level}</span>
                      {/* Tier badge */}
                      <span style={{
                        fontFamily: F.mono, fontSize: "7px", fontWeight: 600, letterSpacing: "1.5px",
                        color: r.label, padding: "2px 6px", borderRadius: "2px",
                        background: `${r.border}10`, border: `1px solid ${r.border}20`,
                      }}>{int.tier.toUpperCase()}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* TRAIT 3: Superpower — card-style panel */}
        <div className="mb-24">
          <div style={{
            borderRadius: "10px", padding: "1.5px",
            background: "linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.5) 50%, rgba(6,182,212,0.2) 100%)",
          }}>
            <div style={{
              borderRadius: "8.5px", background: "#0A0E10", padding: "20px",
            }}>
              {/* Card header */}
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                marginBottom: "16px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{
                    fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                    color: "#22D3EE", letterSpacing: "1.5px",
                    padding: "2px 8px", borderRadius: "2px",
                    background: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.15)",
                  }}>03</span>
                  <span style={{
                    fontFamily: F.sans, fontSize: "16px", fontWeight: 700,
                    color: "rgba(255,255,255,0.88)",
                  }}>Superpower</span>
                </div>
                <span style={{
                  fontFamily: F.mono, fontSize: "8px", fontWeight: 500,
                  color: "rgba(255,255,255,0.2)", letterSpacing: "2px",
                }}>RARE</span>
              </div>

              {/* Superpower rows */}
              <div style={{
                background: "rgba(255,255,255,0.02)", borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.02)", padding: "2px 0",
              }}>
                {superpowers.map((sp, i) => (
                  <div key={sp.name} style={{
                    padding: "10px 12px",
                    borderBottom: i < superpowers.length - 1 ? "1px solid rgba(255,255,255,0.02)" : "none",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                    <span style={{
                      fontFamily: F.sans, fontSize: "12px", fontWeight: 600,
                      color: "#22D3EE",
                    }}>{sp.name}</span>
                    <span style={{
                      fontFamily: F.mono, fontSize: "9px",
                      color: "rgba(255,255,255,0.3)",
                    }}>{sp.effect}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Flavor Traits — subtle, minimal */}
        <div style={{
          borderRadius: "10px", padding: "1.5px",
          background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)",
        }}>
          <div style={{
            borderRadius: "8.5px", background: "#0A0A0A", padding: "20px",
          }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginBottom: "16px",
            }}>
              <span style={{
                fontFamily: F.sans, fontSize: "14px", fontWeight: 600,
                color: "rgba(255,255,255,0.35)",
              }}>Flavor Traits</span>
              <span style={{
                fontFamily: F.mono, fontSize: "8px", fontWeight: 500,
                color: "rgba(255,255,255,0.12)", letterSpacing: "2px",
              }}>LORE ONLY</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <div style={{
                  fontFamily: F.mono, fontSize: "7px", fontWeight: 600,
                  letterSpacing: "2px", color: "rgba(255,255,255,0.15)", marginBottom: "8px",
                }}>DURATION</div>
                {[
                  "Until Pizza Arrives",
                  "Until Girlfriend Becomes Real",
                  "Until Mom Stops Being Disappointed",
                  "Until Student Loans Disappear",
                  "Until Heat Death of Universe",
                ].map((d) => (
                  <div key={d} style={{
                    fontFamily: F.sans, fontSize: "10px",
                    color: "rgba(255,255,255,0.25)", padding: "3px 0",
                  }}>{d}</div>
                ))}
              </div>
              <div>
                <div style={{
                  fontFamily: F.mono, fontSize: "7px", fontWeight: 600,
                  letterSpacing: "2px", color: "rgba(255,255,255,0.15)", marginBottom: "8px",
                }}>TRIGGER</div>
                {[
                  "Beer Foam Chart Patterns",
                  "Rain Makes Wife Leave Again",
                  "Reddit FUD",
                  "Microwave Beep",
                  "Cat Walking On Keyboard Buy",
                  "Porn",
                  "Boss Eye Contact",
                ].map((t) => (
                  <div key={t} style={{
                    fontFamily: F.sans, fontSize: "10px",
                    color: "rgba(255,255,255,0.25)", padding: "3px 0",
                  }}>{t}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
