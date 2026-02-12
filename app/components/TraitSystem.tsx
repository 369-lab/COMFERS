"use client";

import { useState } from "react";
import {
  mentalStatePoints,
  intensityPoints,
  superpowerEffects,
  TIERS,
} from "@/app/data/comfers";

const F = {
  mono: "'IBM Plex Mono', monospace",
  sans: "'DM Sans', sans-serif",
};

const RARITY_COLORS: Record<string, { border: string; label: string }> = {
  COMMON:      { border: "#808080", label: "#9CA3AF" },
  UNCOMMON:    { border: "#2E7D32", label: "#4CAF50" },
  RARE:        { border: "#1565C0", label: "#42A5F5" },
  EPIC:        { border: "#7B1FA2", label: "#AB47BC" },
  LEGENDARY:   { border: "#FF6F00", label: "#FFA726" },
  MYTHIC:      { border: "#C62828", label: "#EF5350" },
  GOD_COMPLEX: { border: "#FFD700", label: "#FFE082" },
  AGI:         { border: "#00FFFF", label: "#00FFFF" },
};

const PANEL_BORDER = "#555";
const PANEL_BG = "#0A0A0C";

function tierDisplayName(tier: string): string {
  if (tier === "GOD_COMPLEX") return "GOD COMPLEX";
  return tier;
}

/* --- Collapsible card panel --- */
function TraitPanel({
  num,
  title,
  subtitle,
  defaultOpen = false,
  children,
}: {
  num: string;
  title: string;
  subtitle: string;
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Stats row container --- */
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
  const mentalStatesArr = Object.entries(mentalStatePoints).sort((a, b) => a[1] - b[1]);
  const intensitiesArr = Object.entries(intensityPoints).sort((a, b) => a[1] - b[1]);
  const superpowersArr = Object.entries(superpowerEffects);

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
          Every Comfer has a mental state, intensity, and optional superpower. Base score = mental state points + intensity points. Superpowers boost your tier.
        </p>

        {/* --- RARITY TIERS --- */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "32px",
        }}>
          {TIERS.slice().reverse().map((t) => {
            const r = RARITY_COLORS[t.name];
            return (
              <div key={t.name} style={{
                display: "flex", alignItems: "center", gap: "6px",
                padding: "4px 10px", borderRadius: "4px",
                background: `${r.border}08`, border: `1px solid ${r.border}18`,
              }}>
                <span style={{
                  fontFamily: F.mono, fontSize: "8px", fontWeight: 600,
                  color: r.label, letterSpacing: "1.5px",
                }}>{tierDisplayName(t.name)}</span>
                <span style={{
                  fontFamily: F.mono, fontSize: "7px",
                  color: "rgba(255,255,255,0.15)",
                }}>{t.count}x</span>
              </div>
            );
          })}
        </div>

        {/* --- TRAIT 01: Mental State --- */}
        <TraitPanel num="01" title="Mental State" subtitle="1-8 POINTS">
          <StatsBox>
            {mentalStatesArr.map(([name, pts], i) => (
              <StatsRow key={name} isLast={i === mentalStatesArr.length - 1}>
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

        {/* --- TRAIT 02: Intensity --- */}
        <TraitPanel num="02" title="Intensity" subtitle="1-8 POINTS">
          <StatsBox>
            {intensitiesArr.map(([name, pts], i) => (
              <StatsRow key={name} isLast={i === intensitiesArr.length - 1}>
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

        {/* --- TRAIT 03: Superpower --- */}
        <TraitPanel num="03" title="Superpower" subtitle="TIER BOOST">
          <StatsBox>
            {superpowersArr.map(([name, effect], i) => (
              <StatsRow key={name} isLast={i === superpowersArr.length - 1}>
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
