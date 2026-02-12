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
    rarity: "Survival",
    color: "#9CA3AF",
    colorClass: "text-gray-400 border-gray-400/20 bg-gray-400/5",
    uniqueMotifs: 64,
    copiesPerMotif: 108,
    totalCards: 6912,
    rarityPct: "52.89%",
    tagline: "What keeps you alive.",
    motifs: {
      Object: ["Rusty Nail", "Bottle Cap", "Glass Shard (Green)", "Cardboard Tear-Off", "Electrical Tape Remnant", "Bent Wire", "Empty Tin Can", "Cigarette Butt", "Used Match", "Broken Shoelace", "Oil Stain on Asphalt", "Crumpled Receipt", "Plastic Bag (White)", "Broken Key", "Found One-Cent Coin", "Chewing Gum Impression", "Filter Material", "Sooted Glass", "Aluminum Foil Ball", "Old Padlock", "Rat Hole", "Bouillon Cube", "Fabric Scrap", "Power Thief Cable", "WiFi Antenna (Improvised)", "Abandoned Nest", "Ruin Fragment"],
      Atmosphere: ["Dog Barking", "Subway Shaft Wind", "Dripping Pipe", "Static Noise", "Siren in the Distance", "Feeling of Cold", "Gasoline Smell", "Hunger Rhythm", "Shadow Hand", "Flickering Street Lamp", "Rainwater Puddle"],
      Abstraction: ["Spray Drip (Black)", "Charcoal Stroke", "Dirt Layer", "Gray Value #808080", "Scratch in Paint", "Dust Layer", "Fingerprint (Soot)", "Crack in Concrete", "Coarse Linen", "Frayed Edge", "Pixel Error (Analog)", "VHS Noise", "Chalk X", "Rust Texture", "Sharp Edge"],
      Concept: ["The Blind Spot", "The Makeshift", "The Gap in the Fence", "Last Penny", "Error 404", "Falling Knife", "Expired Deadline", "System Deficiency", "Emergency", "The Silent Witness", "Survival Instinct"],
    },
    footer: "This is the foundation. The baseline. The reminder that we all start here.",
  },
  {
    name: "COMFORT",
    tier: "II",
    rarity: "Comfort",
    color: "#4CAF50",
    colorClass: "text-green-400 border-green-400/20 bg-green-400/5",
    uniqueMotifs: 64,
    copiesPerMotif: 65,
    totalCards: 4160,
    rarityPct: "31.83%",
    tagline: "First upgrades. Life gets easier.",
    motifs: {
      Object: ["TV Remote", "Coffee Cup", "Wool Sock", "USB Stick", "House Key", "Tea Light", "Alarm Clock", "Pizza Box", "Houseplant", "Towel (Soft)", "Toaster", "Glasses", "Notepad", "Ballpoint Pen", "Hot Water Bottle", "House Slipper", "Headphone Cable", "Shampoo Bottle", "Oven Light", "Thermostat", "Full Battery", "Chocolate Bar", "Curtain (Half-Open)", "Newspaper Stack", "Feather Duster", "Piggy Bank", "Receipt Scanner", "eBook Reader", "Bluetooth Speaker"],
      Atmosphere: ["Refrigerator Humming", "Rain on Window", "Radio Voice (Gentle)", "Door Lock Clicking", "Keyboard Typing", "Coffee Machine Gurgling", "Rustling of Bedsheets", "Shower Water", "Smell of Fresh Bread", "Warm Heating", "Stable Signal", "Fabric Softener", "Fan Breeze"],
      Abstraction: ["Checkered Pattern", "Pastel Surface", "Soft Focus", "Smooth Edge", "Paper Texture", "Subtle Shadow", "Symmetrical Grid", "Light Blue #ADD8E6", "Highlighter Stroke", "Masking Tape Trace", "Digital Photo"],
      Concept: ["The Comfort Zone", "The Standard", "The Nest", "Waiting Queue", "Sunday Feeling", "Social Mask", "End of Workday", "Habit", "Small Profit", "Security", "Coziness"],
    },
    footer: "You've made it past survival. You can breathe now.",
  },
  {
    name: "FLEX",
    tier: "III",
    rarity: "Flex",
    color: "#42A5F5",
    colorClass: "text-blue-400 border-blue-400/20 bg-blue-400/5",
    uniqueMotifs: 64,
    copiesPerMotif: 45,
    totalCards: 2880,
    rarityPct: "22.04%",
    tagline: "Status signals. People notice.",
    motifs: {
      Object: ["Hype Sneaker", "Smartwatch", "Gold Chain", "VIP Wristband", "Designer Hoodie", "Energy Drink", "Dumbbell", "Camera Lens", "Ring Light", "Membership Card", "Fiber Optic Cable", "Sports Car Silhouette", "Rolex Case", "Champagne Cork", "Protein Shake", "Yoga Mat", "Wireless Earbuds", "High-End Laptop", "Glossy Magazine", "Business Card (Leather)", "The Mirror", "Conference Pass", "Standing Table", "Second Monitor", "Smoothie Maker", "Avocado Toast", "Organic Chicken"],
      Atmosphere: ["Club Bass", "Camera Shutter", "Notification Ping", "Air Conditioning Hum", "Applause (Muffled)", "Ice Cubes in Glass", "Engine Roar", "Perfume Cloud", "Flash Photography Storm", "Key Clacking (Mechanical)", "Influencer Glow", "Noise Cancelling"],
      Abstraction: ["Neon Outline", "Chrome Effect", "Vector Line", "Glossy Finish", "Lens Reflection", "Gold Accent", "Magenta #FF00FF", "Hard Contour", "Gradient (Blue-Violet)", "Perfect Circle"],
      Concept: ["The Curation", "Status Update", "Peak Performance", "Verified Badge", "PFP Frame", "Rare Trait", "Portfolio Snapshot", "Reach", "Attention", "Waitlist Spot", "Beta Access", "Premium Upgrade", "Skip the Line", "The Spotlight", "Vanity"],
    },
    footer: "This is where you start signaling. This is where you start flexing.",
  },
  {
    name: "DREAM",
    tier: "IV",
    rarity: "Dream",
    color: "#AB47BC",
    colorClass: "text-purple-400 border-purple-400/20 bg-purple-400/5",
    uniqueMotifs: 64,
    copiesPerMotif: 30,
    totalCards: 1920,
    rarityPct: "14.69%",
    tagline: "Fantasy objects. What you check your portfolio for.",
    motifs: {
      Object: ["Velvet Curtain", "Ivory Chess Piece", "Crystal Glass", "First-Class Ticket", "Antique Coin", "Telescope", "Marble Egg", "Golden Fountain Pen", "Wine Cellar Key", "Silk Scarf", "Compass (Brass)", "Sealed Letter", "Oil Portrait", "Globe (Hand-Painted)", "Pocket Watch", "Paperweight", "Rock Candy Sugar", "Orchid", "Silver Spoon", "Travel Journal", "Private Chef", "Infinity Pool", "Butler Bell", "Cinema Screen", "Original Sketch", "Concert Grand Piano", "Antique Statue", "Museum Loan", "Soundproof Room", "Rare Wine", "Cryo Chamber", "Oxygen Tent"],
      Atmosphere: ["Fireplace Crackling", "Absolute Silence", "Harp Playing", "Opera Singing (Distant)", "Ocean Waves", "Wind in Sails", "Scent of Old Paper", "Quill Scratching", "Heavy Breathing", "Bell Chiming"],
      Abstraction: ["Gold Glaze", "Deep Light", "Marbling", "Floating Particles", "Oil Sheen", "Dark Blue #00008B", "Chiaroscuro", "Baroque Flourish", "Soft Transition", "Patina"],
      Concept: ["The Legacy", "The Escape", "The Promise", "Timelessness", "The Golden Ratio", "Longing", "The Island", "Infinite Horizon", "The Inner Garden", "Muse", "Visionary", "Greed"],
    },
    footer: "This is the goal. The vision. The 3 AM portfolio check motivation.",
  },
  {
    name: "GOD",
    tier: "V",
    rarity: "God",
    color: "#FFA726",
    colorClass: "text-yellow-500 border-yellow-500/20 bg-yellow-500/5",
    uniqueMotifs: 64,
    copiesPerMotif: 15,
    totalCards: 960,
    rarityPct: "7.35%",
    tagline: "Beyond money. Pure excess.",
    motifs: {
      Object: ["Scepter", "Throne", "Imperial Orb", "Biometric Eye", "Satellite Dish", "Bunker Key", "Signet Ring", "Marble Column", "Flagpole", "Book of Law", "Checkmate Position", "Gold Bar", "Nuclear Briefcase", "Oil Barrel", "Credit Card (Platinum)", "Trade Fleet", "Currency Printing Press", "Megaphone", "Helmet (Ceremonial)", "Private Jet", "Rejuvenation Treatment", "Clone Seed", "Organ Reserve", "Cybernetic Arm", "Global Kill Switch", "Mind Reader", "Data Monopoly", "Underwater Base", "Skyscraper Peak", "Private Army", "Drone Swarm", "Force Field", "Eternal Flame"],
      Atmosphere: ["Thunder", "Choral Singing", "Ticking of the World Clock", "Commanding Tone", "Helicopter Rotor", "Crowd (Cheering)", "Alarm Bell", "Heavy Footsteps", "Absolute Silence (Pressure)", "Heartbeat of the System"],
      Abstraction: ["Radial Symmetry", "Monumental Form", "Blueprint Grid", "Purple #800080", "Eagle Silhouette", "Architectural Plan", "Vertical Line", "Granite Texture", "Steel Shine", "Solid Black"],
      Concept: ["Providence", "Absolutism", "The Judgment", "Savior Complex", "Dominance", "Historical Narrative", "The Eye of God", "Inviolability", "Total Surveillance", "Protocol", "The Dominion"],
    },
    footer: "Money becomes irrelevant. Power becomes default.",
  },
  {
    name: "META",
    tier: "VI",
    rarity: "Meta",
    color: "#26C6DA",
    colorClass: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5",
    uniqueMotifs: 64,
    copiesPerMotif: 8,
    totalCards: 512,
    rarityPct: "3.92%",
    tagline: "Abstract concepts. Status transcended.",
    motifs: {
      Object: ["Microchip", "Laser Beam", "Prism Cube", "Server Rack", "Binary Code", "Neuro-Link", "Holo Projector", "Black Hole", "Dyson Sphere", "Wormhole Gate", "DNA Helix (Digital)", "Source Code Excerpt", "Quantum Processor", "Fiber Optic Bundle", "Motherboard", "Silicon Wafer", "Glitch Artifact", "Satellite Antenna", "Orbital Ring", "Fusion Reactor", "Matter Converter", "Interstellar Network", "Telepathy Node", "Stardust Essence", "Galactic Archive", "Monolith", "Asteroid Mining"],
      Atmosphere: ["Digital Noise", "Frequency Beeping", "Zero Gravity", "Data Flow", "Bit Crush", "Cosmic Radiation", "Synthesizer Pad", "Electric Humming", "Breaking Sound Barrier", "Telepathic Whisper", "Pulsar Rhythm", "Vacuum Decay", "Gravitational Wave", "Voyager Signal"],
      Abstraction: ["Matrix Grid", "Fractal Geometry", "Waveform", "Distortion (Warp)", "Hex Code Layer", "Cyan #00FFFF", "Neon Interference", "Transparent Layer", "Isometric View", "Polygon Mesh", "Dark Matter", "4D Vision"],
      Concept: ["The Simulation", "Deconstruction", "Algorithm", "Information Density", "Logic Gate", "Entropy Reversal", "Universal Language", "The Akashic Field", "Time Leasing", "Consciousness Upload", "The Dissolution"],
    },
    footer: "The things that money can't directly buy. But somehow, you have them.",
  },
  {
    name: "EGO",
    tier: "VII",
    rarity: "Ego",
    color: "#EF5350",
    colorClass: "text-red-500 border-red-500/20 bg-red-500/5",
    uniqueMotifs: 64,
    copiesPerMotif: 2,
    totalCards: 128,
    rarityPct: "0.98%",
    tagline: "The self as universe. Creator's pride.",
    motifs: {
      Object: ["The Blank Canvas", "The First Brushstroke", "The Beating Heart", "The Eyeball (Observer)", "Fingerprint", "One's Own Voice", "Brain Convolution", "Mask (Removed)", "Mirror Reflection (Distorted)", "First Word", "The Writing Hand", "Self-Portrait (Abstract)", "Diary (Encrypted)", "Single Lens", "Pulse Generator", "Nerve Strand", "Thought Bubble (Empty)", "The Inner Compass", "Shadow Figure", "The Burning Self", "The First Stone", "The Prism of Time"],
      Atmosphere: ["Inhale / Exhale", "Echo of Name", "White Noise", "Own Pulse (Loud)", "Total Focus Silence", "Cracking of Joints", "Internal Monologue", "The Sound of Blood", "Wind in Empty Space", "Big Bang (Subjective)"],
      Abstraction: ["Expressive Stroke", "Overlay (7-Fold)", "Focal Point (Central)", "Light Cone", "Color Splash (Red)", "Unfinished Line", "Deep Black #000000", "Scratch Texture", "Negative Space", "Dynamic Gesture"],
      Concept: ["Solipsism", "The Vision", "Authorship", "The Architect", "Self-Dissolution", "Creator's Pride", "Isolation", "Manifestation", "The Observer of the Observer", "Madness", "God Complex", "Thread of Fate", "Introspection", "Uniqueness", "Resistance", "The Will", "Fragmentation", "Intuition", "One's Own Legend", "Final Thought", "Prophetic Vision", "The Creation"],
    },
    footer: "You are the center. Everything orbits around you. Or so you believe.",
  },
  {
    name: "SINGULARITY",
    tier: "VIII",
    rarity: "Singularity",
    color: "#FFFFFF",
    colorClass: "text-white border-white/40 bg-white/10",
    uniqueMotifs: 64,
    copiesPerMotif: 1,
    totalCards: 64,
    rarityPct: "0.49%",
    tagline: "All-Unity. The end of the \"I\".",
    motifs: {
      Object: ["The Point (Singular)", "The Perfect Circle", "The Zero", "The Infinity Loop", "The \"We\" Logo", "The Light Ray (White)", "The Empty Surface", "The Everything", "The Nothing", "The Origin", "The End", "The Golden Mean", "The Vanishing Point", "The Root", "The Open Gate", "The Total Sum", "The Echo of All", "The Light Point (Distant)", "The Connected Hand", "The One Eye", "The White Canvas (Filled)", "Totem of Power (Neutral)"],
      Atmosphere: ["Resonance (Universal)", "Omnipresence", "The \"Om\"", "Synchronicity", "End of Time", "Beginning of Being", "The Harmonic Frequency", "The Collective Whisper", "Breath of the World", "The Silence After Applause", "The Heartbeat of the Multiverse", "Eternal Silence"],
      Abstraction: ["Pure Texture (Light)", "The Perfect White", "Total Blackness (Velvet)", "Dissolution of Form", "Flicker (Interdimensional)", "Golden Mist", "Invisible Grid", "Transcendent Shine", "The Final Plane", "Colorless Light"],
      Concept: ["The All-Unity", "We", "The End of \"I\"", "The Circle Closes", "Transcendence", "Harmony of Opposites", "Absolute Truth", "Timeless Presence", "Fusion", "The Loom of Reality", "Manifested Thought", "Multiversal Presence", "The Absence of Fear", "Pure Energy Form", "Information Without Carrier", "The Center of the Multiverse", "The Architecture of Being", "The \"We\" Feeling (Cosmic)", "The Goal", "The Arrival"],
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
