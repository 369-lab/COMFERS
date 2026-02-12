"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const F = {
  mono: "'IBM Plex Mono', monospace",
  sans: "'DM Sans', sans-serif",
};

const traitsData = [
  {
    id: "01",
    title: "Mental State",
    subtitle: "CORE TRAIT",
    words: [
      { text: "Trading FOMO", rarity: "Common" },
      { text: "Degen Brain", rarity: "Common" },
      { text: "Hopium Addiction", rarity: "Uncommon" },
      { text: "HODL Psychosis", rarity: "Rare" },
      { text: "Leverage Madness", rarity: "Epic" },
      { text: "Fibonacci Obsession", rarity: "Legendary" },
      { text: "Trading God Complex", rarity: "God Complex" },
      { text: "Transcendent Chart Being", rarity: "The One" },
    ],
  },
  {
    id: "02",
    title: "Intensity",
    subtitle: "POWER LEVEL",
    words: [
      { text: "Barely There", rarity: "Common" },
      { text: "Noticeable", rarity: "Common" },
      { text: "Strong", rarity: "Uncommon" },
      { text: "Overwhelming", rarity: "Rare" },
      { text: "Consuming", rarity: "Epic" },
      { text: "Reality-Breaking", rarity: "Legendary" },
      { text: "Beyond Mortal", rarity: "God Complex" },
      { text: "From Beyond", rarity: "The One" },
    ],
  },
  {
    id: "03",
    title: "Duration",
    subtitle: "TIME SPAN",
    words: [
      { text: "Fleeting", rarity: "Common" },
      { text: "Brief", rarity: "Uncommon" },
      { text: "Sustained", rarity: "Rare" },
      { text: "Persistent", rarity: "Epic" },
      { text: "Chronic", rarity: "Legendary" },
      { text: "Permanent", rarity: "Mythic" },
      { text: "Eternal", rarity: "The One" },
    ],
  },
  {
    id: "04",
    title: "Trigger",
    subtitle: "CATALYST",
    words: [
      { text: "Price Alert", rarity: "Common" },
      { text: "Chart Pattern", rarity: "Uncommon" },
      { text: "Whale Movement", rarity: "Rare" },
      { text: "Market Crash", rarity: "Epic" },
      { text: "Deep Trauma", rarity: "Legendary" },
      { text: "Divine Spark", rarity: "God Complex" },
      { text: "Cosmic Alignment", rarity: "The One" },
    ],
  },
  {
    id: "05",
    title: "Superpower",
    subtitle: "TIER BOOST",
    words: [
      { text: "None", rarity: "Common" },
      { text: "PayPal Pay Later Bug", rarity: "Uncommon" },
      { text: "Credit Card Glitch", rarity: "Rare" },
      { text: "Endless Instant Bank Transfers", rarity: "Epic" },
      { text: "Bought BTC 2008", rarity: "The One" },
    ],
  },
];

const rarityColors: Record<string, string> = {
  Common: "text-gray-400 border-gray-400/20 bg-gray-400/5",
  Uncommon: "text-green-400 border-green-400/20 bg-green-400/5",
  Rare: "text-blue-400 border-blue-400/20 bg-blue-400/5",
  Epic: "text-purple-400 border-purple-400/20 bg-purple-400/5",
  Legendary: "text-yellow-500 border-yellow-500/20 bg-yellow-500/5",
  Mythic: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
  "God Complex": "text-red-500 border-red-500/20 bg-red-500/5",
  "The One": "text-white border-white/40 bg-white/10",
};

const RARITY_ORDER = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic", "God Complex", "The One"];

export default function TraitSystem() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          Every Comfer has a mental state, intensity, and optional superpower. Each trait word maps to a rarity tier.
        </p>

        {/* Rarity Legend */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "32px",
        }}>
          {RARITY_ORDER.map((rarity) => (
            <span key={rarity} className={rarityColors[rarity]} style={{
              fontFamily: F.mono, fontSize: "8px", fontWeight: 600,
              letterSpacing: "1.5px", padding: "3px 10px", borderRadius: "20px",
              borderWidth: "1px", borderStyle: "solid",
            }}>
              {rarity.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Trait Accordions */}
        <div className="space-y-3">
          {traitsData.map((trait, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={trait.id} style={{
                borderRadius: "10px", padding: "1.5px",
                background: "linear-gradient(135deg, #55555533 0%, #55555580 50%, #55555533 100%)",
              }}>
                <div style={{ borderRadius: "8.5px", background: "#0A0A0C", overflow: "hidden" }}>
                  {/* Clickable header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group"
                    style={{
                      width: "100%", padding: "16px 20px",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      background: "none", border: "none", cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{
                        fontFamily: F.mono, fontSize: "9px", fontWeight: 600,
                        color: "rgba(255,255,255,0.35)", letterSpacing: "1.5px",
                        padding: "2px 8px", borderRadius: "2px",
                        background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                      }}>{trait.id}</span>
                      <span style={{
                        fontFamily: F.sans, fontSize: "16px", fontWeight: 700,
                        color: "rgba(255,255,255,0.88)",
                      }}>{trait.title}</span>
                      <span className="hidden sm:inline" style={{
                        fontFamily: F.mono, fontSize: "8px", fontWeight: 500,
                        color: "rgba(255,255,255,0.2)", letterSpacing: "2px",
                      }}>{trait.subtitle}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{
                        fontFamily: F.mono, fontSize: "9px",
                        color: "rgba(255,255,255,0.15)", letterSpacing: "1px",
                      }}>{trait.words.length} TRAITS</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown style={{ width: "16px", height: "16px", color: "rgba(255,255,255,0.25)" }} />
                      </motion.div>
                    </div>
                  </button>

                  {/* Collapsible content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div style={{ padding: "0 20px 20px" }}>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                            {trait.words.map((word, i) => (
                              <div
                                key={i}
                                className={rarityColors[word.rarity] || "text-white border-white/20"}
                                style={{
                                  fontFamily: F.sans, fontSize: "12px",
                                  padding: "5px 14px", borderRadius: "20px",
                                  borderWidth: "1px", borderStyle: "solid",
                                  transition: "all 0.3s ease",
                                }}
                              >
                                {word.text}
                                <span style={{
                                  fontFamily: F.mono, fontSize: "8px",
                                  marginLeft: "6px", opacity: 0.5,
                                  letterSpacing: "0.5px",
                                }}>({word.rarity})</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
