"use client";

import { useState } from "react";

const F = {
  mono: "'IBM Plex Mono', monospace",
  sans: "'DM Sans', sans-serif",
};

const tiers = [
  {
    name: "SURVIVAL",
    tier: "Common",
    color: "#808080",
    tagline: "What keeps you alive.",
    items: ["Ramen Bowl", "Instant Coffee", "Water Bottle", "Basic Phone", "Cheap Laptop", "Bus Ticket", "Subway Card", "Bread Loaf", "Tap Water", "Flip Phone"],
    mentalStates: ["Trading FOMO", "Degen Brain"],
    footer: "This is the foundation. The baseline. The reminder that we all start here.",
  },
  {
    name: "COMFORT",
    tier: "Uncommon",
    color: "#2E7D32",
    tagline: "First upgrades. Life gets easier.",
    items: ["Coffee Cup", "Proper Meal", "Pizza", "Phone", "Headphones", "Cab Ride", "Decent Apartment", "TV", "Comfortable Bed", "Air Conditioning"],
    mentalStates: ["Hopium Addiction", "HODL Psychosis"],
    footer: "You've made it past survival. You can breathe now.",
  },
  {
    name: "FLEX",
    tier: "Rare",
    color: "#1565C0",
    tagline: "Status signals. People notice.",
    items: ["Sneaker", "Hoodie", "Designer Bag", "Server Rack", "High-End Monitor", "Family Van", "Watch", "HiFi Equipment", "Standing Desk", "Gym Membership"],
    mentalStates: ["Leverage Madness"],
    footer: "This is where you start signaling. This is where you start flexing.",
  },
  {
    name: "DREAM",
    tier: "Epic",
    color: "#7B1FA2",
    tagline: "Fantasy objects. What you check your portfolio for.",
    items: ["Sports Car", "Penthouse", "Beach House", "Diamond Ring", "Diamonds", "Diamond Chain", "Gaming Room", "Home Theater", "Rooftop Pool", "Private Chef", "Emerging Art"],
    mentalStates: ["Fibonacci Obsession"],
    footer: "This is the goal. The vision. The 3 AM portfolio check motivation.",
  },
  {
    name: "GOD",
    tier: "Legendary",
    color: "#FF6F00",
    tagline: "Beyond money. Pure excess.",
    items: ["Private Jet", "100ft Yacht", "Private Island", "Mountain Ownership", "Spaceship", "Satellite", "Mega Mansion", "Art Collection", "River", "Wine Cellar"],
    mentalStates: ["Trading God Complex"],
    footer: "Money becomes irrelevant. Power becomes default.",
  },
  {
    name: "META",
    tier: "Mythic+",
    color: "#C62828",
    tagline: "Abstract concepts. Status transcended.",
    items: ["Bitcoin (Full Coin)", "Ethereum Stack", "Blue Checkmark", "Verified Status", "Freedom", "Time", "Influence", "Reputation", "Network", "Legacy"],
    mentalStates: ["Transcendent Chart Being"],
    footer: "The things that money can't directly buy. But somehow, you have them.",
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
        <p className="text-[#555] mb-10 text-sm max-w-xl">
          10,000+ hand-drawn items across 6 tiers. 8 mental states determine what you manifest.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {tiers.map((tier) => {
            const isOpen = openTier === tier.name;
            return (
              <div key={tier.name} style={{
                borderRadius: "10px", padding: "1.5px",
                background: `linear-gradient(135deg, #55555533 0%, #55555580 50%, #55555533 100%)`,
              }}>
                <div style={{ borderRadius: "8.5px", background: "#0A0A0C" }}>
                  {/* Clickable header */}
                  <button
                    onClick={() => setOpenTier(isOpen ? null : tier.name)}
                    style={{
                      width: "100%", padding: "16px 20px",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      background: "none", border: "none", cursor: "pointer",
                      borderRadius: isOpen ? "8.5px 8.5px 0 0" : "8.5px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{
                        fontFamily: F.mono, fontSize: "8px", fontWeight: 600,
                        color: tier.color, letterSpacing: "2px",
                        padding: "2px 8px", borderRadius: "2px",
                        background: `${tier.color}0F`, border: `1px solid ${tier.color}25`,
                      }}>{tier.tier.toUpperCase()}</span>
                      <span style={{
                        fontFamily: F.sans, fontSize: "16px", fontWeight: 700,
                        color: "rgba(255,255,255,0.88)",
                      }}>{tier.name} TIER</span>
                      <span style={{
                        fontFamily: F.sans, fontSize: "12px",
                        color: "rgba(255,255,255,0.25)",
                      }}>{tier.tagline}</span>
                    </div>
                    <span style={{
                      fontFamily: F.mono, fontSize: "12px",
                      color: "rgba(255,255,255,0.25)",
                      transition: "transform 0.2s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      display: "inline-block",
                    }}>▾</span>
                  </button>

                  {/* Collapsible content */}
                  <div style={{
                    maxHeight: isOpen ? "1000px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}>
                    <div style={{ padding: "0 20px 20px" }}>
                      {/* Items */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                        {tier.items.map((item) => (
                          <span key={item} style={{
                            fontFamily: F.sans, fontSize: "11px",
                            padding: "4px 10px", borderRadius: "4px",
                            background: `${tier.color}08`, border: `1px solid ${tier.color}15`,
                            color: `${tier.color}cc`,
                          }}>{item}</span>
                        ))}
                      </div>

                      {/* Mental states that trigger this tier */}
                      <div style={{
                        padding: "10px 12px", borderRadius: "4px",
                        background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.02)",
                        marginBottom: "12px",
                      }}>
                        <div style={{
                          fontFamily: F.mono, fontSize: "7px", fontWeight: 600,
                          letterSpacing: "2px", color: "rgba(255,255,255,0.15)", marginBottom: "6px",
                        }}>MANIFESTED BY</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          {tier.mentalStates.map((ms) => (
                            <span key={ms} style={{
                              fontFamily: F.sans, fontSize: "11px", fontWeight: 500,
                              color: "rgba(255,255,255,0.5)",
                            }}>{ms}</span>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <p style={{
                        fontFamily: F.mono, fontSize: "8px", color: "rgba(255,255,255,0.18)",
                        letterSpacing: "0.5px", lineHeight: 1.6, margin: 0,
                      }}>{tier.footer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
