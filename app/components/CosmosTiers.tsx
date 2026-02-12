"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const F = {
  mono: "'IBM Plex Mono', monospace",
  sans: "'DM Sans', sans-serif",
};

const tiers = [
  {
    name: "SURVIVAL",
    tier: "I",
    rarity: "Common",
    color: "#9CA3AF",
    colorClass: "text-gray-400 border-gray-400/20 bg-gray-400/5",
    uniqueMotifs: 64,
    copiesPerMotif: 108,
    totalCards: 6912,
    rarityPct: "52.89%",
    tagline: "What keeps you alive.",
    motifs: {
      Objects: ["Rusty Nail", "Bottle Cap", "Glass Shard (Green)", "Cardboard Scrap", "Electrical Tape Remnant", "Bent Wire", "Empty Tin Can", "Cigarette Butt", "Used Match", "Broken Shoelace"],
      Atmosphere: ["Dog Barking", "Subway Shaft Wind", "Dripping Pipe", "Static Noise", "Distant Siren", "Feeling of Cold", "Smell of Gasoline"],
      Abstraction: ["Spray Drip (Black)", "Charcoal Stroke", "Dirt Layer", "Grey Value #808080", "Scratches in Paint"],
      Concept: ["The Blind Spot", "The Provisional", "The Gap in the Fence", "Last Penny", "Error 404", "Falling Knife"],
    },
    footer: "This is the foundation. The baseline. The reminder that we all start here.",
  },
  {
    name: "COMFORT",
    tier: "II",
    rarity: "Uncommon",
    color: "#4CAF50",
    colorClass: "text-green-400 border-green-400/20 bg-green-400/5",
    uniqueMotifs: 64,
    copiesPerMotif: 65,
    totalCards: 4160,
    rarityPct: "31.83%",
    tagline: "First upgrades. Life gets easier.",
    motifs: {
      Objects: ["TV Remote", "Coffee Cup", "Wool Sock", "USB Stick", "House Key", "Tea Light", "Alarm Clock", "Pizza Box"],
      Atmosphere: ["Fridge Hum", "Rain on the Window", "Gentle Radio Voice", "Clicking of a Door Lock", "Typing on Keyboard"],
      Concept: ["The Comfort Zone", "The Standard", "The Nest", "Sunday Feeling", "Social Mask", "After-Work"],
    },
    footer: "You've made it past survival. You can breathe now.",
  },
  {
    name: "FLEX",
    tier: "III",
    rarity: "Rare",
    color: "#42A5F5",
    colorClass: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    uniqueMotifs: 64,
    copiesPerMotif: 45,
    totalCards: 2880,
    rarityPct: "22.04%",
    tagline: "Status signals. People notice.",
    motifs: {
      Objects: ["Hype Sneakers", "Smartwatch", "Gold Chain", "VIP Wristband", "Designer Hoodie", "Camera Lens"],
      Atmosphere: ["Club Bass", "Camera Shutter", "Notification Ping", "Engine Roar", "Cloud of Perfume"],
      Concept: ["The Curation", "Status Update", "Peak Performance", "Verified Badge", "PFP Frame", "Reach", "Attention"],
    },
    footer: "This is where you start signaling. This is where you start flexing.",
  },
  {
    name: "DREAM",
    tier: "IV",
    rarity: "Epic",
    color: "#AB47BC",
    colorClass: "text-purple-400 border-purple-400/20 bg-purple-400/5",
    uniqueMotifs: 64,
    copiesPerMotif: 30,
    totalCards: 1920,
    rarityPct: "14.69%",
    tagline: "Fantasy objects. What you check your portfolio for.",
    motifs: {
      Objects: ["Velvet Curtain", "Ivory Chess Piece", "Crystal Glass", "First Class Ticket", "Antique Coin", "Telescope"],
      Atmosphere: ["Crackling Fireplace", "Absolute Silence", "Harp Playing", "Sea Breeze", "Scent of Old Paper"],
      Concept: ["The Legacy", "The Escape", "The Promise", "Timelessness", "Longing", "The Island", "Inner Garden"],
    },
    footer: "This is the goal. The vision. The 3 AM portfolio check motivation.",
  },
  {
    name: "GOD",
    tier: "V",
    rarity: "Legendary",
    color: "#FFA726",
    colorClass: "text-yellow-500 border-yellow-500/20 bg-yellow-500/5",
    uniqueMotifs: 64,
    copiesPerMotif: 15,
    totalCards: 960,
    rarityPct: "7.35%",
    tagline: "Beyond money. Pure excess.",
    motifs: {
      Objects: ["Scepter", "Throne", "Globus Cruciger", "Biometric Eye", "Bunker Key", "Seal Ring", "Gold Bar", "Nuclear Briefcase"],
      Atmosphere: ["Thunder", "Choral Singing", "Ticking of the World Clock", "Heavy Footsteps", "Heartbeat of the System"],
      Concept: ["Providence", "Absolutism", "The Judgment", "Savior Complex", "Dominance", "Total Surveillance"],
    },
    footer: "Money becomes irrelevant. Power becomes default.",
  },
  {
    name: "META",
    tier: "VI",
    rarity: "Mythic",
    color: "#26C6DA",
    colorClass: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
    uniqueMotifs: 64,
    copiesPerMotif: 8,
    totalCards: 512,
    rarityPct: "3.92%",
    tagline: "Abstract concepts. Status transcended.",
    motifs: {
      Objects: ["Microchip", "Laser Beam", "Prism Cube", "Binary Code", "Neuro-Link", "Dyson Sphere", "Wormhole Gate"],
      Atmosphere: ["Digital Noise", "Zero Gravity", "Data Flow", "Bit-Crush", "Cosmic Radiation", "Telepathic Whisper"],
      Concept: ["The Simulation", "Deconstruction", "Algorithm", "Entropy Reversal", "Consciousness Upload"],
    },
    footer: "The things that money can't directly buy. But somehow, you have them.",
  },
  {
    name: "EGO",
    tier: "VII",
    rarity: "God Complex",
    color: "#EF5350",
    colorClass: "text-red-500 border-red-500/20 bg-red-500/5",
    uniqueMotifs: 64,
    copiesPerMotif: 2,
    totalCards: 128,
    rarityPct: "0.98%",
    tagline: "The self as universe. Creator's pride.",
    motifs: {
      Objects: ["The Blank Canvas", "The First Brushstroke", "The Beating Heart", "The Eyeball (Observer)", "Own Voice"],
      Atmosphere: ["Inhale / Exhale", "Echo of the Name", "Own Pulse (Loud)", "Internal Monologue", "Big Bang (Subjective)"],
      Concept: ["Solipsism", "Authorship", "Self-Dissolution", "Creator's Pride", "Madness", "God Complex", "The Will"],
    },
    footer: "You are the center. Everything orbits around you. Or so you believe.",
  },
  {
    name: "SINGULARITY",
    tier: "VIII",
    rarity: "The One",
    color: "#FFFFFF",
    colorClass: "text-white border-white/40 bg-white/10",
    uniqueMotifs: 64,
    copiesPerMotif: 1,
    totalCards: 64,
    rarityPct: "0.49%",
    tagline: "All-Unity. The end of the \"I\".",
    motifs: {
      Objects: ["The Point (Singular)", "The Perfect Circle", "The Zero", "Infinity Loop", "The \"We\" Logo", "The Source"],
      Atmosphere: ["Universal Resonance", "Omnipresence", "Synchronicity", "The Harmonic Frequency", "Breath of the World"],
      Concept: ["All-Unity", "\"We\"", "End of the \"I\"", "Transcendence", "Absolute Truth", "The Loom of Reality"],
    },
    footer: "One copy. One truth. Everything converges here.",
  },
];

export default function CosmosTiers() {
  const [openTier, setOpenTier] = useState<string | null>(null);

  return (
    <section id="cosmos" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-20" />

        <p style={{ fontFamily: F.mono }} className="text-xs tracking-[0.3em] uppercase text-[#00ff88] mb-4">
          Manifestation
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Cosmos of Cream
        </h2>
        <p className="text-[#555] mb-6 text-sm max-w-xl">
          17,536 hand-drawn items across 8 tiers. From survival basics to singular transcendence.
        </p>

        {/* Distribution Table */}
        <div style={{
          marginBottom: "32px", borderRadius: "8px", overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: "60px 1fr 80px 80px 80px",
            padding: "8px 16px", background: "rgba(255,255,255,0.02)",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}>
            {["TIER", "NAME", "MOTIFS", "TOTAL", "RARITY"].map((h) => (
              <span key={h} style={{
                fontFamily: F.mono, fontSize: "7px", fontWeight: 600,
                letterSpacing: "2px", color: "rgba(255,255,255,0.2)",
              }}>{h}</span>
            ))}
          </div>
          {tiers.map((t, i) => (
            <div key={t.name} style={{
              display: "grid", gridTemplateColumns: "60px 1fr 80px 80px 80px",
              padding: "6px 16px", alignItems: "center",
              borderBottom: i < tiers.length - 1 ? "1px solid rgba(255,255,255,0.02)" : "none",
            }}>
              <span style={{ fontFamily: F.mono, fontSize: "10px", color: t.color, fontWeight: 600 }}>{t.tier}</span>
              <span style={{ fontFamily: F.sans, fontSize: "11px", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{t.name}</span>
              <span style={{ fontFamily: F.mono, fontSize: "10px", color: "rgba(255,255,255,0.25)" }}>{t.uniqueMotifs}</span>
              <span style={{ fontFamily: F.mono, fontSize: "10px", color: "rgba(255,255,255,0.25)" }}>{t.totalCards.toLocaleString()}</span>
              <span style={{ fontFamily: F.mono, fontSize: "10px", color: t.color, fontWeight: 500 }}>{t.rarityPct}</span>
            </div>
          ))}
        </div>

        {/* Tier Accordions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {tiers.map((tier) => {
            const isOpen = openTier === tier.name;
            const motifCategories = Object.entries(tier.motifs) as [string, string[]][];

            return (
              <div key={tier.name} style={{
                borderRadius: "10px", padding: "1.5px",
                background: `linear-gradient(135deg, #55555533 0%, #55555580 50%, #55555533 100%)`,
              }}>
                <div style={{ borderRadius: "8.5px", background: "#0A0A0C", overflow: "hidden" }}>
                  {/* Clickable header */}
                  <button
                    onClick={() => setOpenTier(isOpen ? null : tier.name)}
                    style={{
                      width: "100%", padding: "16px 20px",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      background: "none", border: "none", cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                      <span style={{
                        fontFamily: F.mono, fontSize: "8px", fontWeight: 600,
                        color: tier.color, letterSpacing: "2px",
                        padding: "2px 8px", borderRadius: "2px",
                        background: tier.name === "SINGULARITY" ? "rgba(255,255,255,0.08)" : `${tier.color}0F`,
                        border: tier.name === "SINGULARITY" ? "1px solid rgba(255,255,255,0.25)" : `1px solid ${tier.color}25`,
                      }}>{tier.rarity.toUpperCase()}</span>
                      <span style={{
                        fontFamily: F.sans, fontSize: "16px", fontWeight: 700,
                        color: "rgba(255,255,255,0.88)",
                      }}>{tier.name}</span>
                      <span className="hidden md:inline" style={{
                        fontFamily: F.sans, fontSize: "12px",
                        color: "rgba(255,255,255,0.25)",
                      }}>{tier.tagline}</span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{
                        fontFamily: F.mono, fontSize: "12px",
                        color: "rgba(255,255,255,0.25)",
                        display: "inline-block", flexShrink: 0,
                      }}
                    >▾</motion.span>
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
                          {/* Motifs by category */}
                          {motifCategories.map(([category, items]) => (
                            <div key={category} style={{ marginBottom: "14px" }}>
                              <div style={{
                                fontFamily: F.mono, fontSize: "7px", fontWeight: 600,
                                letterSpacing: "2px", color: "rgba(255,255,255,0.15)", marginBottom: "8px",
                              }}>{category.toUpperCase()}</div>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                {items.map((item) => (
                                  <span key={item} className={tier.colorClass} style={{
                                    fontFamily: F.sans, fontSize: "11px",
                                    padding: "4px 10px", borderRadius: "20px",
                                    borderWidth: "1px", borderStyle: "solid",
                                  }}>{item}</span>
                                ))}
                              </div>
                            </div>
                          ))}

                          {/* Stats row */}
                          <div style={{
                            display: "flex", gap: "16px", flexWrap: "wrap",
                            padding: "10px 12px", borderRadius: "4px",
                            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.02)",
                            marginBottom: "12px",
                          }}>
                            {[
                              { label: "MOTIFS", val: String(tier.uniqueMotifs) },
                              { label: "COPIES/MOTIF", val: String(tier.copiesPerMotif) },
                              { label: "TOTAL CARDS", val: tier.totalCards.toLocaleString() },
                              { label: "RARITY", val: tier.rarityPct },
                            ].map((s) => (
                              <div key={s.label}>
                                <div style={{
                                  fontFamily: F.mono, fontSize: "7px", fontWeight: 600,
                                  letterSpacing: "2px", color: "rgba(255,255,255,0.12)", marginBottom: "2px",
                                }}>{s.label}</div>
                                <div style={{
                                  fontFamily: F.mono, fontSize: "11px", fontWeight: 600,
                                  color: tier.color,
                                }}>{s.val}</div>
                              </div>
                            ))}
                          </div>

                          {/* Footer */}
                          <p style={{
                            fontFamily: F.mono, fontSize: "8px", color: "rgba(255,255,255,0.18)",
                            letterSpacing: "0.5px", lineHeight: 1.6, margin: 0,
                          }}>{tier.footer}</p>
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
