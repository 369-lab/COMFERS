"use client";

import { useState, useMemo } from "react";
import { cosmosTiers, cosmosItems, type CosmosItem } from "@/app/data/cosmos";

const F = {
  mono: "'IBM Plex Mono', monospace",
  sans: "'DM Sans', sans-serif",
};

const CATEGORIES = ["Object", "Atmosphere", "Abstraction", "Concept"];
const PAGE_SIZE = 80;

const TIER_ORDER = cosmosTiers.map((t) => t.name);
const TIER_LOOKUP = Object.fromEntries(cosmosTiers.map((t) => [t.name, t]));

export default function CosmosGallery() {
  const [tierFilter, setTierFilter] = useState<string | null>(null);
  const [catFilter, setCatFilter] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    let items = cosmosItems;
    if (tierFilter) items = items.filter((i) => i.tier === tierFilter);
    if (catFilter) items = items.filter((i) => i.category === catFilter);
    return items;
  }, [tierFilter, catFilter]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const resetPage = () => setVisibleCount(PAGE_SIZE);

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
        <div style={{ marginBottom: "12px" }}>
          <div style={{
            fontFamily: F.mono, fontSize: "7px", fontWeight: 600,
            letterSpacing: "2px", color: "rgba(255,255,255,0.15)", marginBottom: "8px",
          }}>TIER</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
            <button
              onClick={() => { setTierFilter(null); resetPage(); }}
              style={{
                fontFamily: F.mono, fontSize: "9px", fontWeight: tierFilter === null ? 600 : 400,
                letterSpacing: "1px", padding: "4px 10px", borderRadius: "3px",
                border: `1px solid ${tierFilter === null ? "#00ff88" : "rgba(255,255,255,0.06)"}`,
                background: tierFilter === null ? "rgba(0,255,136,0.08)" : "transparent",
                color: tierFilter === null ? "#00ff88" : "rgba(255,255,255,0.2)",
                cursor: "pointer", transition: "all 0.15s",
              }}
            >
              ALL
            </button>
            {TIER_ORDER.map((t) => {
              const td = TIER_LOOKUP[t];
              const active = tierFilter === t;
              return (
                <button
                  key={t}
                  onClick={() => { setTierFilter(active ? null : t); resetPage(); }}
                  style={{
                    fontFamily: F.mono, fontSize: "9px", fontWeight: active ? 600 : 400,
                    letterSpacing: "1px", padding: "4px 10px", borderRadius: "3px",
                    border: `1px solid ${active ? td.color : "rgba(255,255,255,0.06)"}`,
                    background: active ? `${td.color}12` : "transparent",
                    color: active ? td.color : "rgba(255,255,255,0.2)",
                    cursor: "pointer", transition: "all 0.15s",
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category filter */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{
            fontFamily: F.mono, fontSize: "7px", fontWeight: 600,
            letterSpacing: "2px", color: "rgba(255,255,255,0.15)", marginBottom: "8px",
          }}>CATEGORY</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
            <button
              onClick={() => { setCatFilter(null); resetPage(); }}
              style={{
                fontFamily: F.mono, fontSize: "9px", fontWeight: catFilter === null ? 600 : 400,
                letterSpacing: "1px", padding: "4px 10px", borderRadius: "3px",
                border: `1px solid ${catFilter === null ? "#00ff88" : "rgba(255,255,255,0.06)"}`,
                background: catFilter === null ? "rgba(0,255,136,0.08)" : "transparent",
                color: catFilter === null ? "#00ff88" : "rgba(255,255,255,0.2)",
                cursor: "pointer", transition: "all 0.15s",
              }}
            >
              ALL
            </button>
            {CATEGORIES.map((cat) => {
              const active = catFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => { setCatFilter(active ? null : cat); resetPage(); }}
                  style={{
                    fontFamily: F.mono, fontSize: "9px", fontWeight: active ? 600 : 400,
                    letterSpacing: "1px", padding: "4px 10px", borderRadius: "3px",
                    border: `1px solid ${active ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.06)"}`,
                    background: active ? "rgba(255,255,255,0.06)" : "transparent",
                    color: active ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)",
                    cursor: "pointer", transition: "all 0.15s",
                  }}
                >
                  {cat.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Count */}
        <p style={{
          fontFamily: F.mono, fontSize: "9px", color: "rgba(255,255,255,0.15)",
          marginBottom: "16px", letterSpacing: "1px",
        }}>
          {filtered.length} ITEM{filtered.length !== 1 ? "S" : ""}
          {(tierFilter || catFilter) && ` (showing ${Math.min(visibleCount, filtered.length)})`}
        </p>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "8px",
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

function ItemCard({ item }: { item: CosmosItem }) {
  const td = TIER_LOOKUP[item.tier];
  const catIcon = { Object: "O", Atmosphere: "A", Abstraction: "X", Concept: "C" }[item.category] || "?";

  return (
    <div style={{
      borderRadius: "6px", padding: "1px",
      background: `linear-gradient(135deg, ${item.tierColor}30 0%, ${item.tierColor}60 50%, ${item.tierColor}30 100%)`,
    }}>
      <div style={{
        borderRadius: "5px", background: "#0A0A0C", padding: "10px 12px",
        display: "flex", flexDirection: "column", gap: "6px",
        minHeight: "72px",
      }}>
        {/* Top row: category tag + tier */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{
              fontFamily: F.mono, fontSize: "7px", fontWeight: 700,
              width: "14px", height: "14px", borderRadius: "2px",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              background: `${item.tierColor}10`, border: `1px solid ${item.tierColor}20`,
              color: item.tierColor,
            }}>{catIcon}</span>
            <span style={{
              fontFamily: F.mono, fontSize: "7px", fontWeight: 500,
              color: "rgba(255,255,255,0.15)", letterSpacing: "1px",
            }}>{item.category.toUpperCase()}</span>
          </div>
          <span style={{
            fontFamily: F.mono, fontSize: "6px", fontWeight: 600, letterSpacing: "1.5px",
            color: item.tierColor, padding: "1px 5px", borderRadius: "2px",
            background: `${item.tierColor}08`, border: `1px solid ${item.tierColor}15`,
          }}>
            {item.tier}
          </span>
        </div>

        {/* Name */}
        <p style={{
          fontFamily: F.sans, fontSize: "12px", fontWeight: 600,
          color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.3,
        }}>
          {item.name}
        </p>

        {/* Bottom: copies */}
        <span style={{
          fontFamily: F.mono, fontSize: "7px",
          color: "rgba(255,255,255,0.12)", letterSpacing: "0.5px",
        }}>
          {item.copies}x copies
        </span>
      </div>
    </div>
  );
}
