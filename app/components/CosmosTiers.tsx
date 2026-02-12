"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cosmosTiers } from "@/app/data/cosmos";

const F = {
  mono: "'IBM Plex Mono', monospace",
  sans: "'DM Sans', sans-serif",
};

export default function CosmosTiers() {
  const [openTier, setOpenTier] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={sectionRef} id="cosmos" className="py-32 px-6" style={{ position: "relative", overflow: "hidden" }}>
      {/* Section flashlight */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
        background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.03) 0%, transparent 100%)`,
      }} />

      <div className="max-w-6xl mx-auto" style={{ position: "relative", zIndex: 2 }}>
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

        {/* Tier Accordions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {cosmosTiers.map((tier) => {
            const isOpen = openTier === tier.name;
            const allMotifs = Object.values(tier.motifs).flat();

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
                        fontFamily: F.mono, fontSize: "10px", fontWeight: 600,
                        color: tier.color, letterSpacing: "0.5px",
                        minWidth: "48px",
                      }}>{tier.rarityPct}</span>
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
                          {/* All motifs flat */}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
                            {allMotifs.map((item) => (
                              <span key={item} className={tier.colorClass} style={{
                                fontFamily: F.sans, fontSize: "11px",
                                padding: "4px 10px", borderRadius: "20px",
                                borderWidth: "1px", borderStyle: "solid",
                              }}>{item}</span>
                            ))}
                          </div>

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
