"use client";

import { useState } from "react";
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

const PANEL_BORDER = "#555";
const PANEL_BG = "#0A0A0C";

/* ─── Collapsible card panel ─── */
function TraitPanel({
  num,
  title,
  subtitle,
  flavorNote,
  defaultOpen = false,
  children,
}: {
  num: string;
  title: string;
  subtitle: string;
  flavorNote?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-4">
      <div style={{
        borderRadius: "10px", padding: "1.5px",
        background: `linear-gradient(135deg, ${PANEL_BORDER}33 0%, ${PANEL_BORDER}80 50%, ${PANEL_BORDER}33 100%)`,
      }}>
        <div style={{ borderRadius: "8.5px", background: PANEL_BG }}>
          {/* Clickable header */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              width: "100%", padding: "16px 20px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: "none", border: "none", cursor: "pointer",
              borderRadius: open ? "8.5px 8.5px 0 0" : "8.5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{
                fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                color: "rgba(255,255,255,0.35)", letterSpacing: "1.5px",
                padding: "2px 8px", borderRadius: "2px",
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
              }}>{num}</span>
              <span style={{
                fontFamily: F.sans, fontSize: "16px", fontWeight: 700,
                color: "rgba(255,255,255,0.88)",
              }}>{title}</span>
              {flavorNote && (
                <span style={{
                  fontFamily: F.mono, fontSize: "7px",
                  color: "rgba(255,255,255,0.15)", letterSpacing: "1px",
                }}>FLAVOR</span>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{
                fontFamily: F.mono, fontSize: "8px", fontWeight: 500,
                color: "rgba(255,255,255,0.2)", letterSpacing: "2px",
              }}>{subtitle}</span>
              <span style={{
                fontFamily: F.mono, fontSize: "12px",
                color: "rgba(255,255,255,0.25)",
                transition: "transform 0.2s ease",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                display: "inline-block",
              }}>▾</span>
            </div>
          </button>

          {/* Collapsible content */}
          <div style={{
            maxHeight: open ? "2000px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
          }}>
            <div style={{ padding: "0 20px 20px" }}>
              {children}

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
          display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "32px",
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
        <TraitPanel num="01" title="Mental State" subtitle="WHAT YOU MANIFEST">
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
        <TraitPanel num="02" title="Intensity" subtitle="HOW HARD IT HITS">
          <StatsBox>
            {intensities.map(([name, pts], i) => (
              <StatsRow key={name} isLast={i === intensities.length - 1}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
                  <div style={{ display: "flex", gap: "2px", alignItems: "center", flexShrink: 0 }}>
                    {Array.from({ length: maxIntensity }).map((_, j) => (
                      <div key={j} style={{
                        width: "14px", height: "4px", borderRadius: "1px",
                        background: j < pts ? "#9CA3AF" : "rgba(255,255,255,0.04)",
                        opacity: j < pts ? 0.7 : 0.4,
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
                  color: "rgba(255,255,255,0.25)", letterSpacing: "1px",
                }}>{pts}PT</span>
              </StatsRow>
            ))}
          </StatsBox>
        </TraitPanel>

        {/* ─── TRAIT 03: Duration ─── */}
        <TraitPanel
          num="03" title="Duration" subtitle="HOW LONG IT LASTS"
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
        <TraitPanel num="05" title="Superpower" subtitle="RARE">
          <StatsBox>
            <StatsRow isLast={false}>
              <span style={{
                fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                color: "rgba(255,255,255,0.35)", letterSpacing: "1px",
              }}>BONUS</span>
              <span style={{
                fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                color: "rgba(255,255,255,0.35)", letterSpacing: "1px",
              }}>+{SUPERPOWER_BONUS}PT</span>
            </StatsRow>
            {superpowers.map(([name, effect], i) => (
              <StatsRow key={name} isLast={i === superpowers.length - 1}>
                <span style={{
                  fontFamily: F.sans, fontSize: "12px", fontWeight: 600,
                  color: "rgba(255,255,255,0.6)",
                }}>{name}</span>
                <span style={{
                  fontFamily: F.mono, fontSize: "9px",
                  color: "rgba(255,255,255,0.3)",
                }}>{effect}</span>
              </StatsRow>
            ))}
          </StatsBox>
        </TraitPanel>
      </div>
    </section>
  );
}
