"use client";

import { useState, useEffect, useCallback } from "react";
import { uncomfers, VIBES, ENERGIES, GLITCHES, type Uncomfer } from "@/app/data/uncomfers";
import { TIERS } from "@/app/data/comfers";

const RARITY_COLORS: Record<string, { border: string; glow: string; label: string }> = {
  SURVIVAL:    { border: "#808080", glow: "rgba(128,128,128,0.15)", label: "#9CA3AF" },
  COMFORT:     { border: "#2E7D32", glow: "rgba(46,125,50,0.15)",  label: "#4CAF50" },
  FLEX:        { border: "#1565C0", glow: "rgba(21,101,192,0.2)",  label: "#42A5F5" },
  DREAM:       { border: "#7B1FA2", glow: "rgba(123,31,162,0.2)",  label: "#AB47BC" },
  GOD:         { border: "#FF6F00", glow: "rgba(255,111,0,0.25)",  label: "#FFA726" },
  META:        { border: "#C62828", glow: "rgba(198,40,40,0.25)",  label: "#EF5350" },
  EGO:         { border: "#FFD700", glow: "rgba(255,215,0,0.3)",   label: "#FFE082" },
  SINGULARITY: { border: "#00FFFF", glow: "rgba(0,255,255,0.35)",   label: "#00FFFF" },
};

const F = {
  mono: "'IBM Plex Mono', monospace",
  sans: "'DM Sans', sans-serif",
};

function PlaceholderArt({ id, tier, size = 200 }: { id: number; tier: string; size?: number }) {
  const r = RARITY_COLORS[tier] || RARITY_COLORS.SURVIVAL;
  // Deterministic pattern from id
  const hue1 = (id * 37) % 360;
  const hue2 = (hue1 + 120) % 360;
  const patternSize = 8 + (id % 12);
  const rotation = (id * 13) % 360;

  return (
    <div style={{
      width: "100%", aspectRatio: "1", position: "relative",
      background: `linear-gradient(${rotation}deg, hsl(${hue1}, 15%, 8%) 0%, hsl(${hue2}, 10%, 5%) 100%)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    }}>
      {/* Grid pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.06,
        backgroundImage: `
          linear-gradient(${r.border}40 1px, transparent 1px),
          linear-gradient(90deg, ${r.border}40 1px, transparent 1px)
        `,
        backgroundSize: `${patternSize}px ${patternSize}px`,
      }} />
      {/* Center glyph */}
      <div style={{
        fontFamily: F.mono, fontSize: `${size * 0.2}px`, fontWeight: 700,
        color: `${r.border}15`, letterSpacing: "-2px",
        transform: `rotate(${(id * 7) % 30 - 15}deg)`,
      }}>
        ?
      </div>
      {/* ID badge */}
      <div style={{
        position: "absolute", bottom: "6px", right: "6px",
        fontFamily: F.mono, fontSize: "7px", fontWeight: 600,
        color: `${r.border}30`, letterSpacing: "1px",
      }}>
        U-{String(id).padStart(3, "0")}
      </div>
    </div>
  );
}

function CardPopup({ uncomfer, onClose }: { uncomfer: Uncomfer; onClose: () => void }) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [hovered, setHovered] = useState(false);

  const tier = uncomfer.tier;
  const r = RARITY_COLORS[tier] || RARITY_COLORS.SURVIVAL;

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

  const isSingularity = tier === "SINGULARITY";
  const borderBg = isSingularity
    ? `linear-gradient(135deg, #00FFFF 0%, #FF00FF 25%, #FFD700 50%, #00FF88 75%, #00FFFF 100%)`
    : `linear-gradient(135deg, ${r.border}66 0%, ${r.border} 50%, ${r.border}66 100%)`;

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
          background: borderBg,
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
          background: "#0A0A0C", overflow: "hidden", position: "relative",
        }}>
          {/* Header */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "12px 14px 8px",
          }}>
            <span style={{ fontFamily: F.mono, fontSize: "9px", fontWeight: 500, color: "rgba(255,255,255,0.25)", letterSpacing: "1.5px" }}>
              U-{String(uncomfer.id).padStart(3, "0")} / 420
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{
                fontFamily: F.mono, fontSize: "8px", fontWeight: 600, letterSpacing: "2px",
                color: r.label, padding: "2px 8px", borderRadius: "2px",
                background: `${r.border}10`, border: `1px solid ${r.border}25`,
              }}>
                {tier}
              </span>
            </div>
          </div>

          {/* Placeholder Art */}
          <div style={{
            margin: "0 12px", borderRadius: "4px",
            overflow: "hidden", border: "1px solid rgba(255,255,255,0.04)",
          }}>
            <PlaceholderArt id={uncomfer.id} tier={tier} size={300} />
          </div>

          {/* Name + Glitch */}
          <div style={{ padding: "10px 14px 4px" }}>
            <h3 style={{
              fontFamily: F.sans, fontSize: "15px", fontWeight: 700, margin: 0, lineHeight: 1.2,
              color: "rgba(255,255,255,0.88)", letterSpacing: "-0.2px",
            }}>
              {uncomfer.name}
            </h3>
            {uncomfer.glitch !== "None" && (
              <span style={{
                display: "inline-block", marginTop: "5px",
                fontFamily: F.mono, fontSize: "7px", fontWeight: 600, letterSpacing: "1.5px",
                padding: "2px 6px", borderRadius: "2px",
                background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.2)", color: "#ec4899",
              }}>
                {uncomfer.glitch.toUpperCase()}
              </span>
            )}
          </div>

          {/* Stats */}
          <div style={{
            margin: "6px 12px 8px", padding: "8px 10px", borderRadius: "4px",
            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.02)",
          }}>
            {[
              { label: "VIBE", value: uncomfer.vibe },
              { label: "ENERGY", value: uncomfer.energy },
              { label: "GLITCH", value: uncomfer.glitch },
            ].map((stat, i) => (
              <div key={i} style={{
                marginBottom: i < 2 ? "6px" : 0, paddingBottom: i < 2 ? "6px" : 0,
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.02)" : "none",
              }}>
                <div style={{
                  fontFamily: F.mono, fontSize: "7px", fontWeight: 600,
                  letterSpacing: "2px", color: "rgba(255,255,255,0.2)", marginBottom: "2px",
                }}>{stat.label}</div>
                <div style={{
                  fontFamily: F.sans, fontSize: "10px",
                  color: "rgba(255,255,255,0.55)", fontWeight: 500,
                }}>{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "8px 14px 12px",
          }}>
            <span style={{ fontFamily: F.mono, fontSize: "6px", color: "rgba(255,255,255,0.08)", letterSpacing: "2px" }}>
              UNCOMFERS
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

type FilterType = "all" | "glitch" | { trait: string; value: string };

export default function UncomferCards() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");
  const [filterMenu, setFilterMenu] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(60);

  const selectedUncomfer = selected !== null ? uncomfers.find((u) => u.id === selected) || null : null;

  const onClose = useCallback(() => setSelected(null), []);

  const filteredUncomfers = (() => {
    if (filter === "all") return uncomfers;
    if (filter === "glitch") return uncomfers.filter((u) => u.glitch !== "None");
    const { trait, value } = filter;
    if (trait === "rarity") return uncomfers.filter((u) => u.tier === value);
    if (trait === "vibe") return uncomfers.filter((u) => u.vibe === value);
    if (trait === "energy") return uncomfers.filter((u) => u.energy === value);
    return uncomfers;
  })();

  const visibleUncomfers = filteredUncomfers.slice(0, visibleCount);
  const hasMore = visibleCount < filteredUncomfers.length;

  const tierOrder = TIERS.map((t) => t.name);

  const filterGroups: { label: string; id: string; options: { label: string; value: string; color?: string }[] }[] = [
    {
      label: "RARITY", id: "rarity",
      options: tierOrder
        .filter((t) => uncomfers.some((u) => u.tier === t))
        .map((t) => ({ label: t, value: t, color: RARITY_COLORS[t]?.label })),
    },
    {
      label: "VIBE", id: "vibe",
      options: VIBES.filter((v) => uncomfers.some((u) => u.vibe === v)).map((v) => ({ label: v, value: v })),
    },
    {
      label: "ENERGY", id: "energy",
      options: ENERGIES.filter((e) => uncomfers.some((u) => u.energy === e)).map((e) => ({ label: e, value: e })),
    },
  ];

  const isActive = (trait: string, value: string) =>
    typeof filter === "object" && filter.trait === trait && filter.value === value;

  return (
    <section id="uncomfers" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <p style={{ fontFamily: F.mono }} className="text-xs tracking-[0.3em] uppercase text-[#ec4899] mb-4">
          Collection II
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          The 420 Uncomfers
        </h2>
        <p className="text-[#555] mb-10 text-sm">
          Coming soon. Click to preview.
        </p>

        {/* Filter Bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "24px", alignItems: "center" }}>
          <button
            onClick={() => { setFilter("all"); setFilterMenu(null); setVisibleCount(60); }}
            style={{
              fontFamily: F.mono, fontSize: "9px", fontWeight: filter === "all" ? 600 : 400,
              letterSpacing: "1px", padding: "4px 10px", borderRadius: "3px",
              border: `1px solid ${filter === "all" ? "#ec4899" : "rgba(255,255,255,0.06)"}`,
              background: filter === "all" ? "rgba(236,72,153,0.08)" : "transparent",
              color: filter === "all" ? "#ec4899" : "rgba(255,255,255,0.2)",
              cursor: "pointer", transition: "all 0.15s",
            }}
          >
            ALL ({uncomfers.length})
          </button>
          <button
            onClick={() => { setFilter("glitch"); setFilterMenu(null); setVisibleCount(60); }}
            style={{
              fontFamily: F.mono, fontSize: "9px", fontWeight: filter === "glitch" ? 600 : 400,
              letterSpacing: "1px", padding: "4px 10px", borderRadius: "3px",
              border: `1px solid ${filter === "glitch" ? "#00FFFF" : "rgba(255,255,255,0.06)"}`,
              background: filter === "glitch" ? "rgba(0,255,255,0.08)" : "transparent",
              color: filter === "glitch" ? "#00FFFF" : "rgba(255,255,255,0.2)",
              cursor: "pointer", transition: "all 0.15s",
            }}
          >
            GLITCHED ({uncomfers.filter((u) => u.glitch !== "None").length})
          </button>

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
                        setVisibleCount(60);
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
                        {uncomfers.filter((u) => {
                          if (group.id === "rarity") return u.tier === opt.value;
                          return u[group.id as keyof Uncomfer] === opt.value;
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
            {filteredUncomfers.length} RESULT{filteredUncomfers.length !== 1 ? "S" : ""}
          </p>
        )}

        {/* Card Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "12px",
        }}>
          {visibleUncomfers.map((uncomfer) => {
            const tier = uncomfer.tier;
            const r = RARITY_COLORS[tier] || RARITY_COLORS.SURVIVAL;
            const isSingularity = tier === "SINGULARITY";
            const gridBorderBg = isSingularity
              ? `linear-gradient(135deg, #00FFFF50 0%, #FF00FF90 25%, #FFD70090 50%, #00FF8890 75%, #00FFFF50 100%)`
              : `linear-gradient(135deg, ${r.border}50 0%, ${r.border}90 50%, ${r.border}50 100%)`;
            return (
              <button
                key={uncomfer.id}
                onClick={() => setSelected(uncomfer.id)}
                className="group"
                style={{
                  borderRadius: "8px", overflow: "hidden",
                  padding: "1.5px",
                  background: gridBorderBg,
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
                title={`U-${uncomfer.id} ${uncomfer.name}`}
              >
                <div style={{
                  borderRadius: "6.5px", background: "#0A0A0C",
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
                      U-{String(uncomfer.id).padStart(3, "0")}
                    </span>
                    <span style={{
                      fontFamily: F.mono, fontSize: "6px", fontWeight: 600, letterSpacing: "1.5px",
                      color: r.label, padding: "1px 5px", borderRadius: "2px",
                      background: `${r.border}10`, border: `1px solid ${r.border}20`,
                    }}>
                      {tier}
                    </span>
                  </div>

                  {/* Placeholder art */}
                  <div style={{
                    margin: "0 6px", borderRadius: "3px",
                    overflow: "hidden", border: "1px solid rgba(255,255,255,0.03)",
                  }}>
                    <PlaceholderArt id={uncomfer.id} tier={tier} />
                  </div>

                  {/* Name + footer */}
                  <div style={{ padding: "5px 8px 6px" }}>
                    <p style={{
                      fontFamily: F.sans, fontSize: "10px", fontWeight: 600,
                      color: "rgba(255,255,255,0.75)", margin: 0,
                      lineHeight: 1.2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {uncomfer.name}
                    </p>
                    <div style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      marginTop: "3px",
                    }}>
                      <span style={{
                        fontFamily: F.mono, fontSize: "7px",
                        color: "rgba(255,255,255,0.15)", letterSpacing: "0.5px",
                      }}>
                        {uncomfer.vibe.length > 18
                          ? uncomfer.vibe.substring(0, 18) + "..."
                          : uncomfer.vibe}
                      </span>
                      {uncomfer.glitch !== "None" && (
                        <div style={{
                          width: "5px", height: "5px", borderRadius: "50%",
                          background: "#ec4899", opacity: 0.7,
                        }} />
                      )}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Load More */}
        {hasMore && (
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <button
              onClick={() => setVisibleCount((prev) => prev + 60)}
              style={{
                fontFamily: F.mono, fontSize: "10px", fontWeight: 600,
                letterSpacing: "1.5px", padding: "8px 24px", borderRadius: "4px",
                border: "1px solid rgba(236,72,153,0.2)",
                background: "rgba(236,72,153,0.05)",
                color: "#ec4899", cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(236,72,153,0.1)";
                e.currentTarget.style.borderColor = "rgba(236,72,153,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(236,72,153,0.05)";
                e.currentTarget.style.borderColor = "rgba(236,72,153,0.2)";
              }}
            >
              LOAD MORE ({filteredUncomfers.length - visibleCount} REMAINING)
            </button>
          </div>
        )}
      </div>

      {/* Card Popup */}
      {selectedUncomfer && <CardPopup uncomfer={selectedUncomfer} onClose={onClose} />}
    </section>
  );
}
