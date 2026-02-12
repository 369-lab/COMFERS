export interface Uncomfer {
  id: number;
  name: string;
  image: string;
  vibe: string;
  energy: string;
  glitch: string;
  tier: string;
}

// Vibe traits (the uncomfer's emotional frequency)
export const VIBES = [
  "Mildly Unhinged", "Chronically Online", "Suspiciously Calm", "Aggressively Zen",
  "Passively Chaotic", "Quietly Feral", "Softly Panicking", "Loudly Lost",
  "Peacefully Deranged", "Gently Spiraling", "Casually Doomed", "Elegantly Broken",
  "Stoically Melting", "Romantically Ruined", "Poetically Wrecked", "Beautifully Buffering",
];

// Energy traits (how the uncomfer moves through the world)
export const ENERGIES = [
  "NPC Energy", "Main Character Syndrome", "Side Quest Specialist", "Tutorial Skipper",
  "Cutscene Watcher", "Save Scummer", "Speedrun Mentality", "Idle Animation",
  "Lag Spike Personified", "AFK But Present", "Respawn Addict", "Glitch Walker",
  "Loading Screen Dweller", "Error 418 Teapot", "Patch Notes Reader", "Beta Tester Aura",
];

// Glitch traits (unique anomalies)
export const GLITCHES = [
  "None",
  "Inverted Gravity", "Double Shadow", "Pixel Bleed", "Time Stutter",
  "Echo Voice", "Mirror Walk", "Phase Shift", "Color Drift",
  "Sound Leak", "Memory Overflow", "Texture Pop", "Frame Skip",
  "Clipping Error", "Infinite Loop", "Null Pointer", "Stack Overflow",
  "Phantom Input", "Render Tear", "Z-Fighting", "Desync",
];

// Creative uncomfer name parts
const prefixes = [
  "Rug", "Moon", "Paper", "Diamond", "Gas", "Whale", "Shrimp", "Bag",
  "Pump", "Dump", "Fud", "Shill", "Ape", "Degen", "Cope", "Hopium",
  "Rekt", "Based", "Cringe", "Ratio", "Ngmi", "Wagmi", "Gwei", "Wei",
  "Mint", "Burn", "Stake", "Yield", "Airdrop", "Snapshot", "Fork", "Merge",
  "Ledger", "Seed", "Hash", "Block", "Node", "Validator", "Oracle", "Bridge",
  "Swap", "Pool", "Farm", "Vault", "Dao", "Token", "Nonce", "Mempool",
  "Slippage", "Impermanent", "Flash", "Sandwich", "Front", "Back", "Mev", "Dust",
  "Cold", "Hot", "Multi", "Phantom", "Meta", "Layer", "Roll", "Zero",
];

const suffixes = [
  "Holder", "Flipper", "Maxi", "Runner", "Chaser", "Hunter", "Seeker", "Dweller",
  "Walker", "Drifter", "Crawler", "Lurker", "Watcher", "Breaker", "Maker", "Shaker",
  "Dreamer", "Screamer", "Schemer", "Redeemer", "Believer", "Achiever", "Receiver", "Deceiver",
  "Ghost", "Golem", "Wraith", "Specter", "Shadow", "Echo", "Void", "Glitch",
  "Brain", "Heart", "Soul", "Mind", "Fren", "Anon", "Intern", "Chad",
  "Pepe", "Wojak", "Bobo", "Mumu", "Crab", "Bear", "Bull", "Frog",
  "Lord", "King", "Queen", "Prince", "Punk", "Ape", "Bot", "Npc",
  "Sage", "Monk", "Bard", "Tank", "Healer", "Rogue", "Mage", "Noob",
];

const middles = [
  "Of The", "From", "Without", "Beyond", "Inside", "Under", "Above", "Between",
  "Against", "Despite", "Among", "Within", "Through", "After", "Before", "During",
];

// Deterministic name generator
function generateName(id: number): string {
  const style = id % 5;
  const p = prefixes[id % prefixes.length];
  const s = suffixes[(id * 7) % suffixes.length];
  const m = middles[(id * 3) % middles.length];

  switch (style) {
    case 0: return `${p} ${s}`;
    case 1: return `The ${p} ${s}`;
    case 2: return `${p} ${m} ${s}`;
    case 3: return `Un${p.toLowerCase()} ${s}`;
    case 4: return `${p} ${s} ${(id % 99) + 1}`;
    default: return `${p} ${s}`;
  }
}

// Tier distribution for 420 uncomfers (mirrors comfers tier ratios roughly)
function getTier(id: number): string {
  if (id <= 1) return "SINGULARITY";
  if (id <= 4) return "EGO";
  if (id <= 10) return "META";
  if (id <= 22) return "GOD";
  if (id <= 46) return "DREAM";
  if (id <= 86) return "FLEX";
  if (id <= 166) return "COMFORT";
  return "SURVIVAL";
}

// Generate all 420 uncomfers
export const uncomfers: Uncomfer[] = Array.from({ length: 420 }, (_, i) => {
  const id = i + 1;
  return {
    id,
    name: generateName(id),
    image: "",
    vibe: VIBES[(id * 3) % VIBES.length],
    energy: ENERGIES[(id * 5) % ENERGIES.length],
    glitch: GLITCHES[(id * 7) % GLITCHES.length],
    tier: getTier(id),
  };
});
