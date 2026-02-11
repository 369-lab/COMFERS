"use client";

import { useState } from "react";
import { comfers, intensityTiers, mentalStateCategories, superpowerEffects, type Comfer } from "@/app/data/comfers";

const RARITY: Record<string, { border: string; glow: string; label: string }> = {
  Common:    { border: "#6B7280", glow: "rgba(107,114,128,0.15)", label: "#9CA3AF" },
  Uncommon:  { border: "#22C55E", glow: "rgba(34,197,94,0.15)",  label: "#4ADE80" },
  Rare:      { border: "#3B82F6", glow: "rgba(59,130,246,0.2)",  label: "#60A5FA" },
  Epic:      { border: "#A855F7", glow: "rgba(168,85,247,0.2)",  label: "#C084FC" },
  Legendary: { border: "#EAB308", glow: "rgba(234,179,8,0.25)",  label: "#FACC15" },
  Mythic:    { border: "#EF4444", glow: "rgba(239,68,68,0.25)",  label: "#F87171" },
  "Mythic+": { border: "#EC4899", glow: "rgba(236,72,153,0.25)", label: "#F472B6" },
  "God Tier":{ border: "#FBBF24", glow: "rgba(251,191,36,0.3)",  label: "#FDE68A" },
};

const BG_COLORS: Record<string, { bg: string; accent: string }> = {
  Midnight:  { bg: "#08090F", accent: "#111320" },
  Neon:      { bg: "#0A0E14", accent: "#0F1A20" },
  Vintage:   { bg: "#141008", accent: "#1E1810" },
  Frost:     { bg: "#0A0E14", accent: "#101824" },
  Inferno:   { bg: "#140808", accent: "#1E0E0E" },
  Gold:      { bg: "#100E08", accent: "#1A1610" },
  Cosmic:    { bg: "#0C0810", accent: "#14101E" },
  Pastel:    { bg: "#10101A", accent: "#181828" },
  Monochrome:{ bg: "#0A0A0A", accent: "#141414" },
  Original:  { bg: "#0C0C14", accent: "#1A1A28" },
};

const MENTAL_STATE_BG: Record<string, string> = {
  "Basic Trading FOMO": "Midnight",
  "Standard Portfolio Depression": "Frost",
  "Normal Degen Brain": "Monochrome",
  "Advanced Hopium Addiction": "Neon",
  "Enhanced HODL Psychosis": "Cosmic",
  "Chronic Refresh Syndrome": "Pastel",
  "Multi-Personality Order Book": "Vintage",
  "Leverage Madness": "Inferno",
  "Ultimate Trading God Complex": "Gold",
  "Elevated Buy High Disorder": "Original",
  "Chronic Green Candle Fever": "Neon",
  "Enlightened Trading Monk": "Gold",
  "Intense Fibonacci Obsession": "Cosmic",
  "Transcendent Chart Being": "Inferno",
};

const INTENSITY: Record<string, { level: number; max: number; color: string }> = {
  "Mildly":                       { level: 1, max: 7, color: "#6EE7B7" },
  "Severe":                       { level: 2, max: 7, color: "#FCD34D" },
  "Beyond Repair":                { level: 3, max: 7, color: "#60A5FA" },
  "Pokemon Evolution Stage":      { level: 3, max: 7, color: "#60A5FA" },
  "Critical":                     { level: 4, max: 7, color: "#FB923C" },
  "Terminal":                     { level: 5, max: 7, color: "#F87171" },
  "Third Eye Bleeding":           { level: 5, max: 7, color: "#C084FC" },
  "Beyond Cosmic Comprehension":  { level: 6, max: 7, color: "#818CF8" },
  "Reality Collapse":             { level: 7, max: 7, color: "#F472B6" },
};

const S = {
  mono: "'IBM Plex Mono', 'SF Mono', monospace",
  sans: "'DM Sans', 'Helvetica Neue', sans-serif",
  muted: "rgba(255,255,255,0.28)",
  dim: "rgba(255,255,255,0.12)",
  subtle: "rgba(255,255,255,0.06)",
};

function IntensityBar({ intensity }: { intensity: string }) {
  const c = INTENSITY[intensity] || { level: 1, max: 7, color: "#666" };
  return (
    <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
      {Array.from({ length: c.max }).map((_, i) => (
        <div key={i} style={{
          width: "22px", height: "6px", borderRadius: "1px",
          background: i < c.level ? c.color : "rgba(255,255,255,0.06)",
          opacity: i < c.level ? 1 : 0.5,
        }} />
      ))}
    </div>
  );
}

function ComferCard({ comfer }: { comfer: Comfer }) {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const tier = intensityTiers[comfer.intensity]?.tier || "Common";
  const r = RARITY[tier] || RARITY.Common;
  const bgKey = MENTAL_STATE_BG[comfer.mentalState] || "Original";
  const bg = BG_COLORS[bgKey];
  const int = INTENSITY[comfer.intensity] || { color: "#999" };
  const category = mentalStateCategories[comfer.mentalState];

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
  };
  const tiltX = (mouse.y - 0.5) * (hovered ? 8 : 0);
  const tiltY = (mouse.x - 0.5) * (hovered ? -8 : 0);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse({ x: 0.5, y: 0.5 }); }}
      onMouseMove={onMove}
      style={{
        width: "100%", aspectRatio: "1080 / 1512", borderRadius: "12px",
        padding: "2px", cursor: "pointer",
        background: `linear-gradient(135deg, ${r.border}88 0%, ${r.border} 50%, ${r.border}88 100%)`,
        transform: `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${hovered ? 1.03 : 1})`,
        transition: hovered ? "transform 0.05s ease" : "transform 0.4s cubic-bezier(0.2,0.8,0.2,1)",
        boxShadow: hovered ? `0 24px 48px rgba(0,0,0,0.5), 0 0 24px ${r.glow}` : `0 8px 24px rgba(0,0,0,0.4)`,
        position: "relative",
      }}
    >
      {hovered && <div style={{
        position: "absolute", inset: 0, borderRadius: "12px", pointerEvents: "none", zIndex: 10,
        background: `radial-gradient(circle at ${mouse.x*100}% ${mouse.y*100}%, rgba(255,255,255,0.12) 0%, transparent 50%)`,
      }} />}

      <div style={{
        borderRadius: "10px", height: "100%", display: "flex", flexDirection: "column",
        background: bg.bg, overflow: "hidden", position: "relative",
      }}>

        {/* TOP: ID + RARITY */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "14px 16px 10px",
        }}>
          <span style={{ fontFamily: S.mono, fontSize: "10px", fontWeight: 500, color: S.muted, letterSpacing: "1.5px" }}>
            #{String(comfer.id).padStart(3, "0")} / 069
          </span>
          <span style={{
            fontFamily: S.mono, fontSize: "9px", fontWeight: 600, letterSpacing: "2px",
            color: r.label, padding: "3px 10px", borderRadius: "3px",
            background: `${r.border}12`, border: `1px solid ${r.border}30`,
          }}>
            {tier.toUpperCase()}
          </span>
        </div>

        {/* ART WINDOW */}
        <div style={{
          margin: "0 14px", flex: "0 0 42%", borderRadius: "6px",
          background: bg.accent, border: `1px solid ${S.subtle}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", overflow: "hidden",
        }}>
          <img
            src={comfer.image}
            alt={comfer.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "6px" }}
            loading="lazy"
          />
        </div>

        {/* NAME + SUPERPOWER */}
        <div style={{ padding: "12px 16px 4px" }}>
          <h3 style={{
            fontFamily: S.sans, fontSize: "16px", fontWeight: 700, margin: 0, lineHeight: 1.2,
            color: "rgba(255,255,255,0.9)", letterSpacing: "-0.2px",
          }}>
            {comfer.name}
          </h3>
          {comfer.superpower && (
            <span style={{
              display: "inline-block", marginTop: "6px",
              fontFamily: S.mono, fontSize: "8px", fontWeight: 600, letterSpacing: "1.5px",
              padding: "3px 8px", borderRadius: "2px",
              background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.2)", color: "#FACC15",
            }}>
              ★ {comfer.superpower.toUpperCase()}
            </span>
          )}
        </div>

        {/* STATS */}
        <div style={{
          margin: "8px 14px", padding: "10px 12px", borderRadius: "6px",
          background: S.subtle, border: `1px solid rgba(255,255,255,0.03)`,
        }}>
          {[
            { label: "MENTAL STATE", value: comfer.mentalState },
            { label: "INTENSITY", value: null },
            { label: "DURATION", value: comfer.duration },
            { label: "TRIGGER", value: comfer.trigger },
          ].map((stat, i) => (
            <div key={i} style={{
              marginBottom: i < 3 ? "8px" : 0, paddingBottom: i < 3 ? "8px" : 0,
              borderBottom: i < 3 ? `1px solid rgba(255,255,255,0.03)` : "none",
            }}>
              <div style={{
                fontFamily: S.mono, fontSize: "7.5px", fontWeight: 600,
                letterSpacing: "2px", color: S.muted, marginBottom: "3px",
              }}>{stat.label}</div>
              {stat.label === "INTENSITY" ? (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <IntensityBar intensity={comfer.intensity} />
                  <span style={{
                    fontFamily: S.mono, fontSize: "9px", fontWeight: 600,
                    color: int.color, letterSpacing: "0.3px",
                  }}>{comfer.intensity}</span>
                </div>
              ) : (
                <div style={{
                  fontFamily: S.sans, fontSize: "11px",
                  color: i === 0 ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.5)",
                  fontWeight: i === 0 ? 600 : 400, lineHeight: 1.3,
                }}>
                  {stat.value}
                  {i === 0 && category && (
                    <span style={{ marginLeft: "8px", fontSize: "9px", color: "rgba(0,255,136,0.5)", fontFamily: S.mono }}>
                      {category}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* LORE / SUPERPOWER EFFECT */}
        {comfer.superpower && (
          <div style={{ padding: "2px 16px 0", flex: 1 }}>
            <p style={{
              fontFamily: S.sans, fontSize: "9px", lineHeight: 1.55,
              color: "rgba(255,255,255,0.22)", margin: 0, fontStyle: "italic",
            }}>
              {superpowerEffects[comfer.superpower]}
            </p>
          </div>
        )}

        {/* FOOTER */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "10px 16px 14px", marginTop: "auto",
        }}>
          <span style={{ fontFamily: S.mono, fontSize: "7px", color: "rgba(255,255,255,0.12)", letterSpacing: "2px" }}>
            COMFERS
          </span>
          <div style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: r.border, opacity: 0.4,
          }} />
          <span style={{ fontFamily: S.mono, fontSize: "7px", color: "rgba(255,255,255,0.12)", letterSpacing: "2px" }}>
            COSMOS OF CREAM
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ComferCards() {
  const [filter, setFilter] = useState<string>("all");

  const tierOrder = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic", "Mythic+", "God Tier"];

  const filteredComfers = filter === "all"
    ? comfers
    : filter === "superpower"
      ? comfers.filter((c) => c.superpower)
      : comfers.filter((c) => intensityTiers[c.intensity]?.tier === filter);

  const tierCounts = tierOrder.map((t) => ({
    tier: t,
    count: comfers.filter((c) => intensityTiers[c.intensity]?.tier === t).length,
  })).filter((t) => t.count > 0);

  return (
    <section id="comfers" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <p style={{ fontFamily: S.mono }} className="text-xs tracking-[0.3em] uppercase text-[#00ff88] mb-6">
          Full Collection
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          All 69 Comfer Cards
        </h2>
        <p className="text-[#666] mb-12 max-w-2xl">
          Each card is a unique generator with its own psychosis profile. Hover to inspect.
        </p>

        {/* Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "36px" }}>
          <button
            onClick={() => setFilter("all")}
            style={{
              fontFamily: S.mono, fontSize: "9px", fontWeight: filter === "all" ? 700 : 400,
              letterSpacing: "1px", padding: "5px 12px", borderRadius: "4px",
              border: `1px solid ${filter === "all" ? "#00ff88" : "rgba(255,255,255,0.06)"}`,
              background: filter === "all" ? "rgba(0,255,136,0.1)" : "transparent",
              color: filter === "all" ? "#00ff88" : "rgba(255,255,255,0.25)",
              cursor: "pointer", transition: "all 0.2s",
            }}
          >
            ALL ({comfers.length})
          </button>
          <button
            onClick={() => setFilter("superpower")}
            style={{
              fontFamily: S.mono, fontSize: "9px", fontWeight: filter === "superpower" ? 700 : 400,
              letterSpacing: "1px", padding: "5px 12px", borderRadius: "4px",
              border: `1px solid ${filter === "superpower" ? "#FACC15" : "rgba(255,255,255,0.06)"}`,
              background: filter === "superpower" ? "rgba(234,179,8,0.1)" : "transparent",
              color: filter === "superpower" ? "#FACC15" : "rgba(255,255,255,0.25)",
              cursor: "pointer", transition: "all 0.2s",
            }}
          >
            ★ SUPERPOWERED ({comfers.filter((c) => c.superpower).length})
          </button>
          {tierCounts.map(({ tier, count }) => {
            const r = RARITY[tier] || RARITY.Common;
            const isActive = filter === tier;
            return (
              <button
                key={tier}
                onClick={() => setFilter(tier)}
                style={{
                  fontFamily: S.mono, fontSize: "9px", fontWeight: isActive ? 700 : 400,
                  letterSpacing: "1px", padding: "5px 12px", borderRadius: "4px",
                  border: `1px solid ${isActive ? r.border : "rgba(255,255,255,0.06)"}`,
                  background: isActive ? `${r.border}15` : "transparent",
                  color: isActive ? r.label : "rgba(255,255,255,0.25)",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {tier.toUpperCase()} ({count})
              </button>
            );
          })}
        </div>

        {/* Card Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "32px",
          justifyItems: "center",
        }}>
          {filteredComfers.map((comfer) => (
            <div key={comfer.id} style={{ width: "100%", maxWidth: "340px" }}>
              <ComferCard comfer={comfer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
