"use client";

import {
  mentalStatePoints,
  intensityPoints,
  durationPoints,
  triggerPoints,
  SUPERPOWER_BONUS,
  RARITY_THRESHOLDS,
  superpowerEffects,
} from "@/app/data/comfers";

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

/* ─── Shared card panel wrapper ─── */
function TraitPanel({
  num,
  title,
  subtitle,
  borderColor,
  bgTint,
  flavorNote,
  children,
}: {
  num: string;
  title: string;
  subtitle: string;
  borderColor: string;
  bgTint: string;
  flavorNote?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-16">
      <div style={{
        borderRadius: "10px", padding: "1.5px",
        background: `linear-gradient(135deg, ${borderColor}33 0%, ${borderColor}80 50%, ${borderColor}33 100%)`,
      }}>
        <div style={{ borderRadius: "8.5px", background: bgTint, padding: "20px" }}>
          {/* Card header */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "16px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{
                fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                color: borderColor, letterSpacing: "1.5px",
                padding: "2px 8px", borderRadius: "2px",
                background: `${borderColor}0F`, border: `1px solid ${borderColor}25`,
              }}>{num}</span>
              <span style={{
                fontFamily: F.sans, fontSize: "16px", fontWeight: 700,
                color: "rgba(255,255,255,0.88)",
              }}>{title}</span>
            </div>
            <span style={{
              fontFamily: F.mono, fontSize: "8px", fontWeight: 500,
              color: "rgba(255,255,255,0.2)", letterSpacing: "2px",
            }}>{subtitle}</span>
          </div>

          {/* Content */}
          {children}

          {/* Flavor note */}
          {flavorNote && (
            <div style={{
              marginTop: "12px", padding: "8px 10px", borderRadius: "4px",
              background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.03)",
            }}>
              <p style={{
                fontFamily: F.mono, fontSize: "8px", color: "rgba(255,255,255,0.18)",
                letterSpacing: "0.5px", lineHeight: 1.6, margin: 0,
              }}>{flavorNote}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Stats row container ─── */
function StatsBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.02)", borderRadius: "4px",
      border: "1px solid rgba(255,255,255,0.02)", padding: "2px 0",
    }}>
      {children}
    </div>
  );
}

function StatsRow({
  children,
  isLast = false,
}: {
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div style={{
      padding: "8px 12px",
      borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.02)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      {children}
    </div>
  );
}

export default function TraitSystem() {
  const mentalStates = Object.entries(mentalStatePoints).sort((a, b) => a[1] - b[1]);
  const intensities = Object.entries(intensityPoints).sort((a, b) => a[1] - b[1]);
  const durations = Object.entries(durationPoints).sort((a, b) => a[1] - b[1]);
  const triggers = Object.entries(triggerPoints).sort((a, b) => a[1] - b[1]);
  const superpowers = Object.entries(superpowerEffects);

  const maxIntensity = Math.max(...Object.values(intensityPoints));

  return (
    <section id="traits" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-20" />

        <p style={{ fontFamily: F.mono }} className="text-xs tracking-[0.3em] uppercase text-[#00ff88] mb-4">
          System
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Traits & Rarity
        </h2>
        <p className="text-[#555] mb-6 text-sm max-w-xl">
          Every Comfer has 5 traits. Each trait earns points based on scarcity. Total points determine rarity.
        </p>

        {/* ─── RARITY SCALE ─── */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "40px",
        }}>
          {RARITY_THRESHOLDS.slice().reverse().map((t) => {
            const r = RARITY_COLORS[t.tier];
            return (
              <div key={t.tier} style={{
                display: "flex", alignItems: "center", gap: "6px",
                padding: "4px 10px", borderRadius: "4px",
                background: `${r.border}08`, border: `1px solid ${r.border}18`,
              }}>
                <span style={{
                  fontFamily: F.mono, fontSize: "8px", fontWeight: 600,
                  color: r.label, letterSpacing: "1.5px",
                }}>{t.tier.toUpperCase()}</span>
                <span style={{
                  fontFamily: F.mono, fontSize: "7px",
                  color: "rgba(255,255,255,0.15)",
                }}>{t.min}+</span>
              </div>
            );
          })}
        </div>

        {/* ─── TRAIT 01: Mental State ─── */}
        <TraitPanel
          num="01" title="Mental State" subtitle="WHAT YOU MANIFEST"
          borderColor="#00ff88" bgTint="#08090F"
        >
          <StatsBox>
            {mentalStates.map(([name, pts], i) => (
              <StatsRow key={name} isLast={i === mentalStates.length - 1}>
                <span style={{
                  fontFamily: F.sans, fontSize: "12px", fontWeight: 500,
                  color: "rgba(255,255,255,0.6)",
                }}>{name}</span>
                <span style={{
                  fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                  color: "rgba(255,255,255,0.25)", letterSpacing: "1px",
                }}>{pts}PT</span>
              </StatsRow>
            ))}
          </StatsBox>
        </TraitPanel>

        {/* ─── TRAIT 02: Intensity ─── */}
        <TraitPanel
          num="02" title="Intensity" subtitle="HOW HARD IT HITS"
          borderColor="#8b5cf6" bgTint="#0C0810"
        >
          <StatsBox>
            {intensities.map(([name, pts], i) => (
              <StatsRow key={name} isLast={i === intensities.length - 1}>
                {/* Intensity bar */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                  <div style={{ display: "flex", gap: "2px", alignItems: "center", flexShrink: 0 }}>
                    {Array.from({ length: maxIntensity }).map((_, j) => (
                      <div key={j} style={{
                        width: "14px", height: "4px", borderRadius: "1px",
                        background: j < pts ? "#C084FC" : "rgba(255,255,255,0.04)",
                        opacity: j < pts ? 0.8 : 0.4,
                      }} />
                    ))}
                  </div>
                  <span style={{
                    fontFamily: F.sans, fontSize: "12px", fontWeight: 500,
                    color: "rgba(255,255,255,0.5)", flex: 1,
                  }}>{name}</span>
                </div>
                <span style={{
                  fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                  color: "#C084FC", letterSpacing: "1px", opacity: 0.6,
                }}>{pts}PT</span>
              </StatsRow>
            ))}
          </StatsBox>
        </TraitPanel>

        {/* ─── TRAIT 03: Duration ─── */}
        <TraitPanel
          num="03" title="Duration" subtitle="HOW LONG IT LASTS"
          borderColor="#f59e0b" bgTint="#100E08"
          flavorNote="Flavor trait — defines character personality, not mechanics."
        >
          <StatsBox>
            {durations.map(([name, pts], i) => (
              <StatsRow key={name} isLast={i === durations.length - 1}>
                <span style={{
                  fontFamily: F.sans, fontSize: "12px", fontWeight: 500,
                  color: "rgba(255,255,255,0.5)",
                }}>{name}</span>
                <span style={{
                  fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                  color: "rgba(255,255,255,0.25)", letterSpacing: "1px",
                }}>{pts}PT</span>
              </StatsRow>
            ))}
          </StatsBox>
        </TraitPanel>

        {/* ─── TRAIT 04: Trigger ─── */}
        <TraitPanel
          num="04" title="Trigger" subtitle="WHAT SETS IT OFF"
          borderColor="#ef4444" bgTint="#140808"
          flavorNote="Flavor trait — defines character personality, not mechanics."
        >
          <StatsBox>
            {triggers.map(([name, pts], i) => (
              <StatsRow key={name} isLast={i === triggers.length - 1}>
                <span style={{
                  fontFamily: F.sans, fontSize: "12px", fontWeight: 500,
                  color: "rgba(255,255,255,0.5)",
                }}>{name}</span>
                <span style={{
                  fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                  color: "rgba(255,255,255,0.25)", letterSpacing: "1px",
                }}>{pts}PT</span>
              </StatsRow>
            ))}
          </StatsBox>
        </TraitPanel>

        {/* ─── TRAIT 05: Superpower ─── */}
        <TraitPanel
          num="05" title="Superpower" subtitle="RARE"
          borderColor="#06b6d4" bgTint="#0A0E10"
        >
          <StatsBox>
            <StatsRow isLast={false}>
              <span style={{
                fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                color: "#22D3EE", letterSpacing: "1px",
              }}>BONUS</span>
              <span style={{
                fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                color: "#22D3EE", letterSpacing: "1px",
              }}>+{SUPERPOWER_BONUS}PT</span>
            </StatsRow>
            {superpowers.map(([name, effect], i) => (
              <StatsRow key={name} isLast={i === superpowers.length - 1}>
                <span style={{
                  fontFamily: F.sans, fontSize: "12px", fontWeight: 600,
                  color: "#22D3EE", opacity: 0.8,
                }}>{name}</span>
                <span style={{
                  fontFamily: F.mono, fontSize: "9px",
                  color: "rgba(255,255,255,0.3)",
                }}>{effect}</span>
              </StatsRow>
            ))}
          </StatsBox>
        </TraitPanel>

        {/* ─── POINT SYSTEM SUMMARY ─── */}
        <div style={{
          borderRadius: "10px", padding: "1.5px",
          background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 100%)",
        }}>
          <div style={{
            borderRadius: "8.5px", background: "#0A0A0B", padding: "20px",
          }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginBottom: "16px",
            }}>
              <span style={{
                fontFamily: F.sans, fontSize: "14px", fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
              }}>How Rarity Works</span>
              <span style={{
                fontFamily: F.mono, fontSize: "8px",
                color: "rgba(255,255,255,0.15)", letterSpacing: "2px",
              }}>POINT SYSTEM</span>
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px",
              marginBottom: "16px",
            }}>
              {[
                { label: "Mental State", range: `${Math.min(...Object.values(mentalStatePoints))}–${Math.max(...Object.values(mentalStatePoints))}`, color: "#00ff88" },
                { label: "Intensity", range: `${Math.min(...Object.values(intensityPoints))}–${Math.max(...Object.values(intensityPoints))}`, color: "#8b5cf6" },
                { label: "Duration", range: `${Math.min(...Object.values(durationPoints))}–${Math.max(...Object.values(durationPoints))}`, color: "#f59e0b" },
                { label: "Trigger", range: `${Math.min(...Object.values(triggerPoints))}–${Math.max(...Object.values(triggerPoints))}`, color: "#ef4444" },
              ].map((item) => (
                <div key={item.label} style={{
                  padding: "8px 10px", borderRadius: "4px",
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.02)",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{
                    fontFamily: F.sans, fontSize: "11px", fontWeight: 500,
                    color: item.color, opacity: 0.7,
                  }}>{item.label}</span>
                  <span style={{
                    fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                    color: "rgba(255,255,255,0.25)", letterSpacing: "0.5px",
                  }}>{item.range} PT</span>
                </div>
              ))}
            </div>

            <div style={{
              padding: "8px 10px", borderRadius: "4px",
              background: "rgba(6,182,212,0.03)", border: "1px solid rgba(6,182,212,0.08)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginBottom: "16px",
            }}>
              <span style={{
                fontFamily: F.sans, fontSize: "11px", fontWeight: 500,
                color: "#22D3EE", opacity: 0.7,
              }}>Superpower Bonus</span>
              <span style={{
                fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                color: "#22D3EE", opacity: 0.5, letterSpacing: "0.5px",
              }}>+{SUPERPOWER_BONUS} PT</span>
            </div>

            <p style={{
              fontFamily: F.mono, fontSize: "8px", color: "rgba(255,255,255,0.15)",
              letterSpacing: "0.5px", lineHeight: 1.6, margin: 0,
            }}>
              Total points = sum of all trait points. Flavor traits (Duration, Trigger) contribute to rarity score but have no effect on mechanics. Only the Comfer knows why it matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
