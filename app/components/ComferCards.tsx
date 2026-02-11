"use client";

import { useState, useEffect, useCallback } from "react";
import { comfers, intensityLevels, superpowerEffects, getComferRarity, type Comfer } from "@/app/data/comfers";

const RARITY_COLORS: Record<string, { border: string; glow: string; label: string }> = {
  Common:     { border: "#6B7280", glow: "rgba(107,114,128,0.15)", label: "#9CA3AF" },
  Uncommon:   { border: "#22C55E", glow: "rgba(34,197,94,0.15)",  label: "#4ADE80" },
  Rare:       { border: "#3B82F6", glow: "rgba(59,130,246,0.2)",  label: "#60A5FA" },
  Epic:       { border: "#A855F7", glow: "rgba(168,85,247,0.2)",  label: "#C084FC" },
  Legendary:  { border: "#06B6D4", glow: "rgba(6,182,212,0.25)",  label: "#22D3EE" },
  Mythic:     { border: "#EF4444", glow: "rgba(239,68,68,0.25)",  label: "#F87171" },
  "Mythic+":  { border: "#EC4899", glow: "rgba(236,72,153,0.25)", label: "#F472B6" },
  "God Tier": { border: "#FBBF24", glow: "rgba(251,191,36,0.3)",  label: "#FDE68A" },
};

const BG_COLORS: Record<string, { bg: string; accent: string }> = {
  Midnight:   { bg: "#08090F", accent: "#111320" },
  Neon:       { bg: "#0A0E14", accent: "#0F1A20" },
  Vintage:    { bg: "#141008", accent: "#1E1810" },
  Frost:      { bg: "#0A0E14", accent: "#101824" },
  Inferno:    { bg: "#140808", accent: "#1E0E0E" },
  Gold:       { bg: "#100E08", accent: "#1A1610" },
  Cosmic:     { bg: "#0C0810", accent: "#14101E" },
  Pastel:     { bg: "#10101A", accent: "#181828" },
  Monochrome: { bg: "#0A0A0A", accent: "#141414" },
  Original:   { bg: "#0C0C14", accent: "#1A1A28" },
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

const INTENSITY_MAX = 8;

function getIntensityLevel(intensity: string): number {
  return intensityLevels[intensity] || 1;
}

const F = {
  mono: "'IBM Plex Mono', monospace",
  sans: "'DM Sans', sans-serif",
};

function IntensityBar({ intensity, color }: { intensity: string; color: string }) {
  const lvl = getIntensityLevel(intensity);
  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      {Array.from({ length: INTENSITY_MAX }).map((_, i) => (
        <div key={i} style={{
          width: "18px", height: "5px", borderRadius: "1px",
          background: i < lvl ? color : "rgba(255,255,255,0.05)",
          opacity: i < lvl ? 1 : 0.4,
        }} />
      ))}
    </div>
  );
}

function CardPopup({ comfer, onClose }: { comfer: Comfer; onClose: () => void }) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [hovered, setHovered] = useState(false);

  const rarity = getComferRarity(comfer);
  const tier = rarity.tier;
  const r = RARITY_COLORS[tier] || RARITY_COLORS.Common;
  const bgKey = MENTAL_STATE_BG[comfer.mentalState] || "Original";
  const bg = BG_COLORS[bgKey];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
  };
  const tiltX = (mouse.y - 0.5) * (hovered ? 6 : 0);
  const tiltY = (mouse.x - 0.5) * (hovered ? -6 : 0);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setMouse({ x: 0.5, y: 0.5 }); }}
        onMouseMove={onMove}
        style={{
          width: "min(340px, 90vw)", borderRadius: "12px",
          padding: "2px", cursor: "default",
          background: `linear-gradient(135deg, ${r.border}66 0%, ${r.border} 50%, ${r.border}66 100%)`,
          transform: `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${hovered ? 1.02 : 1})`,
          transition: hovered ? "transform 0.05s ease" : "transform 0.4s cubic-bezier(0.2,0.8,0.2,1)",
          boxShadow: `0 24px 64px rgba(0,0,0,0.6), 0 0 32px ${r.glow}`,
          position: "relative",
        }}
      >
        {hovered && <div style={{
          position: "absolute", inset: 0, borderRadius: "12px", pointerEvents: "none", zIndex: 10,
          background: `radial-gradient(circle at ${mouse.x*100}% ${mouse.y*100}%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
        }} />}

        <div style={{
          borderRadius: "10px", display: "flex", flexDirection: "column",
          background: bg.bg, overflow: "hidden", position: "relative",
        }}>

          {/* Header */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "12px 14px 8px",
          }}>
            <span style={{ fontFamily: F.mono, fontSize: "9px", fontWeight: 500, color: "rgba(255,255,255,0.25)", letterSpacing: "1.5px" }}>
              #{String(comfer.id).padStart(3, "0")} / 069
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{
                fontFamily: F.mono, fontSize: "8px", fontWeight: 600, letterSpacing: "1px",
                color: "rgba(255,255,255,0.25)",
              }}>
                {rarity.points}PT
              </span>
              <span style={{
                fontFamily: F.mono, fontSize: "8px", fontWeight: 600, letterSpacing: "2px",
                color: r.label, padding: "2px 8px", borderRadius: "2px",
                background: `${r.border}10`, border: `1px solid ${r.border}25`,
              }}>
                {tier.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Square Art */}
          <div style={{
            margin: "0 12px", aspectRatio: "1", borderRadius: "4px",
            overflow: "hidden", border: `1px solid rgba(255,255,255,0.04)`,
          }}>
            <img src={comfer.image} alt={comfer.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>

          {/* Name + Superpower */}
          <div style={{ padding: "10px 14px 4px" }}>
            <h3 style={{
              fontFamily: F.sans, fontSize: "15px", fontWeight: 700, margin: 0, lineHeight: 1.2,
              color: "rgba(255,255,255,0.88)", letterSpacing: "-0.2px",
            }}>
              {comfer.name}
            </h3>
            {comfer.superpower && (
              <span style={{
                display: "inline-block", marginTop: "5px",
                fontFamily: F.mono, fontSize: "7px", fontWeight: 600, letterSpacing: "1.5px",
                padding: "2px 6px", borderRadius: "2px",
                background: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.15)", color: "#22D3EE",
              }}>
                {comfer.superpower.toUpperCase()}
              </span>
            )}
          </div>

          {/* Stats */}
          <div style={{
            margin: "6px 12px 8px", padding: "8px 10px", borderRadius: "4px",
            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.02)",
          }}>
            {[
              { label: "MENTAL STATE", value: comfer.mentalState },
              { label: "INTENSITY", value: null },
              { label: "DURATION", value: comfer.duration },
              { label: "TRIGGER", value: comfer.trigger },
            ].map((stat, i) => (
              <div key={i} style={{
                marginBottom: i < 3 ? "6px" : 0, paddingBottom: i < 3 ? "6px" : 0,
                borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.02)" : "none",
              }}>
                <div style={{
                  fontFamily: F.mono, fontSize: "7px", fontWeight: 600,
                  letterSpacing: "2px", color: "rgba(255,255,255,0.2)", marginBottom: "2px",
                }}>{stat.label}</div>
                {stat.label === "INTENSITY" ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <IntensityBar intensity={comfer.intensity} color={r.label} />
                    <span style={{
                      fontFamily: F.mono, fontSize: "8px", fontWeight: 600,
                      color: r.label, letterSpacing: "0.3px",
                    }}>{comfer.intensity}</span>
                  </div>
                ) : (
                  <div style={{
                    fontFamily: F.sans, fontSize: "10px",
                    color: i === 0 ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.4)",
                    fontWeight: i === 0 ? 600 : 400,
                  }}>{stat.value}</div>
                )}
              </div>
            ))}
          </div>

          {/* Superpower effect */}
          {comfer.superpower && (
            <div style={{ padding: "0 14px 6px" }}>
              <p style={{
                fontFamily: F.sans, fontSize: "8px", lineHeight: 1.5,
                color: "rgba(255,255,255,0.18)", margin: 0, fontStyle: "italic",
              }}>
                {superpowerEffects[comfer.superpower]}
              </p>
            </div>
          )}

          {/* Footer */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "8px 14px 12px",
          }}>
            <span style={{ fontFamily: F.mono, fontSize: "6px", color: "rgba(255,255,255,0.08)", letterSpacing: "2px" }}>
              COMFERS
            </span>
            <div style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: r.border, opacity: 0.3,
            }} />
            <span style={{ fontFamily: F.mono, fontSize: "6px", color: "rgba(255,255,255,0.08)", letterSpacing: "2px" }}>
              COSMOS OF CREAM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

type FilterType = "all" | "superpower" | { trait: string; value: string };

export default function ComferCards() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");
  const [filterMenu, setFilterMenu] = useState<string | null>(null);

  const selectedComfer = selected !== null ? comfers.find((c) => c.id === selected) || null : null;

  const onClose = useCallback(() => setSelected(null), []);

  const filteredComfers = (() => {
    if (filter === "all") return comfers;
    if (filter === "superpower") return comfers.filter((c) => c.superpower);
    const { trait, value } = filter;
    if (trait === "rarity") return comfers.filter((c) => getComferRarity(c).tier === value);
    if (trait === "mentalState") return comfers.filter((c) => c.mentalState === value);
    if (trait === "intensity") return comfers.filter((c) => c.intensity === value);
    if (trait === "duration") return comfers.filter((c) => c.duration === value);
    if (trait === "trigger") return comfers.filter((c) => c.trigger === value);
    return comfers;
  })();

  const tierOrder = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic", "Mythic+", "God Tier"];
  const uniqueValues = (key: keyof Comfer) => [...new Set(comfers.map((c) => c[key] as string))];

  const filterGroups: { label: string; id: string; options: { label: string; value: string; color?: string }[] }[] = [
    {
      label: "RARITY", id: "rarity",
      options: tierOrder
        .filter((t) => comfers.some((c) => getComferRarity(c).tier === t))
        .map((t) => ({ label: t, value: t, color: RARITY_COLORS[t]?.label })),
    },
    {
      label: "MENTAL STATE", id: "mentalState",
      options: uniqueValues("mentalState").map((v) => ({ label: v, value: v })),
    },
    {
      label: "INTENSITY", id: "intensity",
      options: uniqueValues("intensity").map((v) => ({ label: v, value: v })),
    },
    {
      label: "DURATION", id: "duration",
      options: uniqueValues("duration").map((v) => ({ label: v, value: v })),
    },
    {
      label: "TRIGGER", id: "trigger",
      options: uniqueValues("trigger").map((v) => ({ label: v, value: v })),
    },
  ];

  const isActive = (trait: string, value: string) =>
    typeof filter === "object" && filter.trait === trait && filter.value === value;

  return (
    <section id="comfers" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <p style={{ fontFamily: F.mono }} className="text-xs tracking-[0.3em] uppercase text-[#00ff88] mb-4">
          Collection
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          The 69 Comfers
        </h2>
        <p className="text-[#555] mb-10 text-sm">
          Click to inspect.
        </p>

        {/* Filter Bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "24px", alignItems: "center" }}>
          <button
            onClick={() => { setFilter("all"); setFilterMenu(null); }}
            style={{
              fontFamily: F.mono, fontSize: "9px", fontWeight: filter === "all" ? 600 : 400,
              letterSpacing: "1px", padding: "4px 10px", borderRadius: "3px",
              border: `1px solid ${filter === "all" ? "#00ff88" : "rgba(255,255,255,0.06)"}`,
              background: filter === "all" ? "rgba(0,255,136,0.08)" : "transparent",
              color: filter === "all" ? "#00ff88" : "rgba(255,255,255,0.2)",
              cursor: "pointer", transition: "all 0.15s",
            }}
          >
            ALL ({comfers.length})
          </button>
          <button
            onClick={() => { setFilter("superpower"); setFilterMenu(null); }}
            style={{
              fontFamily: F.mono, fontSize: "9px", fontWeight: filter === "superpower" ? 600 : 400,
              letterSpacing: "1px", padding: "4px 10px", borderRadius: "3px",
              border: `1px solid ${filter === "superpower" ? "#22D3EE" : "rgba(255,255,255,0.06)"}`,
              background: filter === "superpower" ? "rgba(6,182,212,0.08)" : "transparent",
              color: filter === "superpower" ? "#22D3EE" : "rgba(255,255,255,0.2)",
              cursor: "pointer", transition: "all 0.15s",
            }}
          >
            SUPERPOWER ({comfers.filter((c) => c.superpower).length})
          </button>

          {/* Trait filter dropdowns */}
          {filterGroups.map((group) => (
            <div key={group.id} style={{ position: "relative" }}>
              <button
                onClick={() => setFilterMenu(filterMenu === group.id ? null : group.id)}
                style={{
                  fontFamily: F.mono, fontSize: "9px", fontWeight: 400,
                  letterSpacing: "1px", padding: "4px 10px", borderRadius: "3px",
                  border: `1px solid ${
                    typeof filter === "object" && filter.trait === group.id
                      ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)"
                  }`,
                  background: typeof filter === "object" && filter.trait === group.id
                    ? "rgba(255,255,255,0.04)" : "transparent",
                  color: typeof filter === "object" && filter.trait === group.id
                    ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)",
                  cursor: "pointer", transition: "all 0.15s",
                }}
              >
                {group.label} {filterMenu === group.id ? "−" : "+"}
              </button>

              {filterMenu === group.id && (
                <div style={{
                  position: "absolute", top: "100%", left: 0, marginTop: "4px",
                  background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "4px", padding: "4px", zIndex: 50, minWidth: "180px",
                  maxHeight: "240px", overflowY: "auto",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                }}>
                  {group.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setFilter({ trait: group.id, value: opt.value });
                        setFilterMenu(null);
                      }}
                      style={{
                        display: "block", width: "100%", textAlign: "left",
                        fontFamily: F.sans, fontSize: "10px", padding: "5px 8px",
                        borderRadius: "2px", border: "none", cursor: "pointer",
                        background: isActive(group.id, opt.value) ? "rgba(255,255,255,0.06)" : "transparent",
                        color: opt.color || (isActive(group.id, opt.value) ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)"),
                        transition: "all 0.1s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = isActive(group.id, opt.value) ? "rgba(255,255,255,0.06)" : "transparent"; }}
                    >
                      {opt.label}
                      <span style={{ float: "right", color: "rgba(255,255,255,0.15)" }}>
                        {comfers.filter((c) => {
                          if (group.id === "rarity") return getComferRarity(c).tier === opt.value;
                          return c[group.id as keyof Comfer] === opt.value;
                        }).length}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Result count */}
        {filter !== "all" && (
          <p style={{ fontFamily: F.mono, fontSize: "9px", color: "rgba(255,255,255,0.15)", marginBottom: "16px", letterSpacing: "1px" }}>
            {filteredComfers.length} RESULT{filteredComfers.length !== 1 ? "S" : ""}
          </p>
        )}

        {/* Card Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "12px",
        }}>
          {filteredComfers.map((comfer) => {
            const rarity = getComferRarity(comfer);
            const tier = rarity.tier;
            const r = RARITY_COLORS[tier] || RARITY_COLORS.Common;
            const bgKey = MENTAL_STATE_BG[comfer.mentalState] || "Original";
            const bg = BG_COLORS[bgKey];
            return (
              <button
                key={comfer.id}
                onClick={() => setSelected(comfer.id)}
                className="group"
                style={{
                  borderRadius: "8px", overflow: "hidden",
                  padding: "1.5px",
                  background: `linear-gradient(135deg, ${r.border}50 0%, ${r.border}90 50%, ${r.border}50 100%)`,
                  cursor: "pointer",
                  transition: "all 0.25s cubic-bezier(0.2,0.8,0.2,1)",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03) translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.4), 0 0 12px ${r.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                title={`#${comfer.id} ${comfer.name}`}
              >
                <div style={{
                  borderRadius: "6.5px", background: bg.bg,
                  overflow: "hidden", display: "flex", flexDirection: "column",
                }}>
                  {/* Mini header */}
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "6px 8px 4px",
                  }}>
                    <span style={{
                      fontFamily: F.mono, fontSize: "7px", fontWeight: 500,
                      color: "rgba(255,255,255,0.2)", letterSpacing: "1px",
                    }}>
                      #{String(comfer.id).padStart(3, "0")}
                    </span>
                    <span style={{
                      fontFamily: F.mono, fontSize: "6px", fontWeight: 600, letterSpacing: "1.5px",
                      color: r.label, padding: "1px 5px", borderRadius: "2px",
                      background: `${r.border}10`, border: `1px solid ${r.border}20`,
                    }}>
                      {tier.toUpperCase()}
                    </span>
                  </div>

                  {/* Square art */}
                  <div style={{
                    margin: "0 6px", aspectRatio: "1", borderRadius: "3px",
                    overflow: "hidden", border: "1px solid rgba(255,255,255,0.03)",
                  }}>
                    <img
                      src={comfer.image} alt={comfer.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      loading="lazy"
                    />
                  </div>

                  {/* Name + footer */}
                  <div style={{ padding: "5px 8px 6px" }}>
                    <p style={{
                      fontFamily: F.sans, fontSize: "10px", fontWeight: 600,
                      color: "rgba(255,255,255,0.75)", margin: 0,
                      lineHeight: 1.2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {comfer.name}
                    </p>
                    <div style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      marginTop: "3px",
                    }}>
                      <span style={{
                        fontFamily: F.mono, fontSize: "7px",
                        color: "rgba(255,255,255,0.15)", letterSpacing: "0.5px",
                      }}>
                        {comfer.mentalState.length > 18
                          ? comfer.mentalState.substring(0, 18) + "..."
                          : comfer.mentalState}
                      </span>
                      {comfer.superpower && (
                        <div style={{
                          width: "5px", height: "5px", borderRadius: "50%",
                          background: "#22D3EE", opacity: 0.7,
                        }} />
                      )}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Card Popup */}
      {selectedComfer && <CardPopup comfer={selectedComfer} onClose={onClose} />}
    </section>
  );
}
