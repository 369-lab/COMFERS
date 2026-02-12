"use client";

import { useState, useMemo } from "react";
import { cosmosTiers, cosmosItems, type CosmosItem } from "@/app/data/cosmos";

const F = {
  mono: "'IBM Plex Mono', monospace",
  sans: "'DM Sans', sans-serif",
};

const PAGE_SIZE = 80;

const TIER_ORDER = cosmosTiers.map((t) => t.name);
const TIER_LOOKUP = Object.fromEntries(cosmosTiers.map((t) => [t.name, t]));

const RARITY_COLORS: Record<string, { border: string; glow: string; label: string }> = {
  SURVIVAL:    { border: "#808080", glow: "rgba(128,128,128,0.15)", label: "#9CA3AF" },
  COMFORT:     { border: "#2E7D32", glow: "rgba(46,125,50,0.15)",  label: "#4CAF50" },
  FLEX:        { border: "#1565C0", glow: "rgba(21,101,192,0.2)",  label: "#42A5F5" },
  DREAM:       { border: "#7B1FA2", glow: "rgba(123,31,162,0.2)",  label: "#AB47BC" },
  GOD:         { border: "#FF6F00", glow: "rgba(255,111,0,0.25)",  label: "#FFA726" },
  META:        { border: "#C62828", glow: "rgba(198,40,40,0.25)",  label: "#EF5350" },
  EGO:         { border: "#FFD700", glow: "rgba(255,215,0,0.3)",   label: "#FFE082" },
  SINGULARITY: { border: "#00FFFF", glow: "rgba(0,255,255,0.35)",  label: "#00FFFF" },
};

export default function CosmosGallery() {
  const [tierFilter, setTierFilter] = useState<string>(TIER_ORDER[0]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return cosmosItems.filter((i) => i.tier === tierFilter);
  }, [tierFilter]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <p style={{ fontFamily: F.mono }} className="text-xs tracking-[0.3em] uppercase text-[#00ff88] mb-4">
          Archive
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Item Gallery
        </h2>
        <p className="text-[#555] mb-10 text-sm">
          {cosmosItems.length} unique motifs across 8 tiers.
        </p>

        {/* Tier filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "24px" }}>
          {TIER_ORDER.map((t) => {
            const td = TIER_LOOKUP[t];
            const r = RARITY_COLORS[t] || RARITY_COLORS.SURVIVAL;
            const active = tierFilter === t;
            return (
              <button
                key={t}
                onClick={() => { setTierFilter(t); setVisibleCount(PAGE_SIZE); }}
                style={{
                  fontFamily: F.mono, fontSize: "9px", fontWeight: active ? 600 : 400,
                  letterSpacing: "1px", padding: "4px 10px", borderRadius: "3px",
                  border: `1px solid ${active ? r.border : "rgba(255,255,255,0.06)"}`,
                  background: active ? `${r.border}12` : "transparent",
                  color: active ? r.label : "rgba(255,255,255,0.2)",
                  cursor: "pointer", transition: "all 0.15s",
                }}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Count */}
        <p style={{
          fontFamily: F.mono, fontSize: "9px", color: "rgba(255,255,255,0.15)",
          marginBottom: "16px", letterSpacing: "1px",
        }}>
          {filtered.length} ITEM{filtered.length !== 1 ? "S" : ""}
        </p>

        {/* Grid — matches trading card layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "12px",
        }}>
          {visible.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <button
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              style={{
                fontFamily: F.mono, fontSize: "10px", fontWeight: 600,
                letterSpacing: "1.5px", padding: "8px 24px", borderRadius: "4px",
                border: "1px solid rgba(0,255,136,0.2)",
                background: "rgba(0,255,136,0.05)",
                color: "#00ff88", cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,255,136,0.1)";
                e.currentTarget.style.borderColor = "rgba(0,255,136,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,255,136,0.05)";
                e.currentTarget.style.borderColor = "rgba(0,255,136,0.2)";
              }}
            >
              LOAD MORE ({filtered.length - visibleCount} REMAINING)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function PlaceholderArt({ item }: { item: CosmosItem }) {
  const r = RARITY_COLORS[item.tier] || RARITY_COLORS.SURVIVAL;
  const hue1 = (item.id * 37) % 360;
  const hue2 = (hue1 + 120) % 360;
  const patternSize = 8 + (item.id % 12);
  const rotation = (item.id * 13) % 360;

  return (
    <div style={{
      width: "100%", aspectRatio: "1", position: "relative",
      background: `linear-gradient(${rotation}deg, hsl(${hue1}, 12%, 6%) 0%, hsl(${hue2}, 8%, 4%) 100%)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.05,
        backgroundImage: `
          linear-gradient(${r.border}40 1px, transparent 1px),
          linear-gradient(90deg, ${r.border}40 1px, transparent 1px)
        `,
        backgroundSize: `${patternSize}px ${patternSize}px`,
      }} />
      <div style={{
        fontFamily: F.mono, fontSize: "32px", fontWeight: 700,
        color: `${r.border}12`,
        transform: `rotate(${(item.id * 7) % 30 - 15}deg)`,
      }}>?</div>
    </div>
  );
}

function ItemCard({ item }: { item: CosmosItem }) {
  const r = RARITY_COLORS[item.tier] || RARITY_COLORS.SURVIVAL;
  const isSingularity = item.tier === "SINGULARITY";
  const borderBg = isSingularity
    ? `linear-gradient(135deg, #00FFFF50 0%, #FF00FF90 25%, #FFD70090 50%, #00FF8890 75%, #00FFFF50 100%)`
    : `linear-gradient(135deg, ${r.border}50 0%, ${r.border}90 50%, ${r.border}50 100%)`;

  return (
    <div
      style={{
        borderRadius: "8px", overflow: "hidden",
        padding: "1.5px",
        background: borderBg,
        transition: "all 0.25s cubic-bezier(0.2,0.8,0.2,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03) translateY(-2px)";
        e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.4), 0 0 12px ${r.glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1) translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
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
            #{String(item.id).padStart(3, "0")}
          </span>
          <span style={{
            fontFamily: F.mono, fontSize: "6px", fontWeight: 600, letterSpacing: "1.5px",
            color: r.label, padding: "1px 5px", borderRadius: "2px",
            background: `${r.border}10`, border: `1px solid ${r.border}20`,
          }}>
            {item.tier}
          </span>
        </div>

        {/* Square placeholder art */}
        <div style={{
          margin: "0 6px", aspectRatio: "1", borderRadius: "3px",
          overflow: "hidden", border: "1px solid rgba(255,255,255,0.03)",
        }}>
          <PlaceholderArt item={item} />
        </div>

        {/* Name + category */}
        <div style={{ padding: "5px 8px 6px" }}>
          <p style={{
            fontFamily: F.sans, fontSize: "10px", fontWeight: 600,
            color: "rgba(255,255,255,0.75)", margin: 0,
            lineHeight: 1.2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {item.name}
          </p>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginTop: "3px",
          }}>
            <span style={{
              fontFamily: F.mono, fontSize: "7px",
              color: "rgba(255,255,255,0.15)", letterSpacing: "0.5px",
            }}>
              {item.category}
            </span>
            <span style={{
              fontFamily: F.mono, fontSize: "7px",
              color: "rgba(255,255,255,0.1)", letterSpacing: "0.5px",
            }}>
              {item.copies}x
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
