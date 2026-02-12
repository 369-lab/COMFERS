export interface Comfer {
  id: number;
  name: string;
  image: string;
  mentalState: string;
  msPoints: number;
  intensity: string;
  intPoints: number;
  baseScore: number;
  superpower: string;
  tier: string;
  rarityRank: number;
}

export const TIERS: { name: string; count: number; color: string; border: string; glow: string }[] = [
  { name: "AGI", count: 1, color: "#00FFFF", border: "holographic", glow: "rainbow" },
  { name: "GOD_COMPLEX", count: 2, color: "#FFD700", border: "gold", glow: "pulsing" },
  { name: "MYTHIC", count: 3, color: "#C62828", border: "red", glow: "intense" },
  { name: "LEGENDARY", count: 5, color: "#FF6F00", border: "orange", glow: "strong" },
  { name: "EPIC", count: 8, color: "#7B1FA2", border: "purple", glow: "medium" },
  { name: "RARE", count: 10, color: "#1565C0", border: "blue", glow: "subtle" },
  { name: "UNCOMMON", count: 16, color: "#2E7D32", border: "green", glow: "none" },
  { name: "COMMON", count: 24, color: "#808080", border: "gray", glow: "none" },
];

export const mentalStates: { id: number; name: string; points: number; visual: string }[] = [
  { id: 1, name: "Trading FOMO", points: 1, visual: "wide eyes, sweating" },
  { id: 2, name: "Degen Brain", points: 2, visual: "brain melting, dollar eyes" },
  { id: 3, name: "Hopium Addiction", points: 3, visual: "heart eyes, floating" },
  { id: 4, name: "HODL Psychosis", points: 4, visual: "diamond hands, locked jaw" },
  { id: 5, name: "Leverage Madness", points: 5, visual: "100x eyes, trembling" },
  { id: 6, name: "Fibonacci Obsession", points: 6, visual: "spiral eyes, golden ratio aura" },
  { id: 7, name: "Trading God Complex", points: 7, visual: "halo, smug grin, chart crown" },
  { id: 8, name: "Transcendent Chart Being", points: 8, visual: "third eye, cosmic, dissolving into charts" },
];

export const intensities: { id: number; name: string; points: number; visual: string }[] = [
  { id: 1, name: "Mild", points: 1, visual: "calm colors, slight expression" },
  { id: 2, name: "Severe", points: 2, visual: "saturated, more intense" },
  { id: 3, name: "Cryrical", points: 3, visual: "distorted, glitchy edges" },
  { id: 4, name: "Terminal", points: 4, visual: "dark aura, screen glow" },
  { id: 5, name: "Third Eye Bleeding", points: 5, visual: "third eye open, red tears" },
  { id: 6, name: "Evolution Stage", points: 6, visual: "transforming, energy waves" },
  { id: 7, name: "Reality Collapse", points: 7, visual: "fractured reality, multiple dimensions" },
  { id: 8, name: "From Beyond", points: 8, visual: "lovecraftian, void energy, impossible geometry" },
];

export const superpowers: { id: number; name: string; visual: string | null; tierBoost: number | string }[] = [
  { id: 0, name: "None", visual: null, tierBoost: 0 },
  { id: 1, name: "PayPal Pay Later Bug", visual: "PayPal logo glitch effect", tierBoost: 1 },
  { id: 2, name: "Credit Card Glitch", visual: "floating credit cards, matrix rain", tierBoost: 2 },
  { id: 3, name: "Endless Instant Bank Transfers", visual: "infinite money spiral", tierBoost: 3 },
  { id: 4, name: "Bought BTC 2008", visual: "ancient Bitcoin aura, genesis block halo", tierBoost: "AGI" },
];

export const mentalStatePoints: Record<string, number> = {
  "Trading FOMO": 1,
  "Degen Brain": 2,
  "Hopium Addiction": 3,
  "HODL Psychosis": 4,
  "Leverage Madness": 5,
  "Fibonacci Obsession": 6,
  "Trading God Complex": 7,
  "Transcendent Chart Being": 8,
};

export const intensityPoints: Record<string, number> = {
  "Mild": 1,
  "Severe": 2,
  "Cryrical": 3,
  "Terminal": 4,
  "Third Eye Bleeding": 5,
  "Evolution Stage": 6,
  "Reality Collapse": 7,
  "From Beyond": 8,
};

export const superpowerEffects: Record<string, string> = {
  "PayPal Pay Later Bug": "+1 Tier Boost",
  "Credit Card Glitch": "+2 Tier Boost",
  "Endless Instant Bank Transfers": "+3 Tier Boost",
  "Bought BTC 2008": "Instant AGI Tier",
};

export const comfers: Comfer[] = [
  { id: 1, name: "Promise Last Leverage", image: "/artworks/1-promise-last-leverage.jpg", mentalState: "Transcendent Chart Being", msPoints: 8, intensity: "From Beyond", intPoints: 8, baseScore: 16, superpower: "Bought BTC 2008", tier: "AGI", rarityRank: 1 },
  { id: 2, name: "Forgot Seed Phrase", image: "/artworks/2-forgot-seed-phrase.jpg", mentalState: "Trading God Complex", msPoints: 7, intensity: "Reality Collapse", intPoints: 7, baseScore: 14, superpower: "PayPal Pay Later Bug", tier: "GOD_COMPLEX", rarityRank: 2 },
  { id: 3, name: "Meat Generated Trading Ideas", image: "/artworks/3-meat-generated-trading-ideas.jpg", mentalState: "Trading God Complex", msPoints: 7, intensity: "From Beyond", intPoints: 8, baseScore: 15, superpower: "Credit Card Glitch", tier: "GOD_COMPLEX", rarityRank: 3 },
  { id: 4, name: "Life Unchanging Money", image: "/artworks/4-life-unchanging-money.jpg", mentalState: "Trading God Complex", msPoints: 7, intensity: "From Beyond", intPoints: 8, baseScore: 15, superpower: "None", tier: "MYTHIC", rarityRank: 4 },
  { id: 5, name: "Tinder Date Was Scammer", image: "/artworks/5-tinder-date-was-scammer.jpg", mentalState: "Transcendent Chart Being", msPoints: 8, intensity: "Reality Collapse", intPoints: 7, baseScore: 15, superpower: "None", tier: "MYTHIC", rarityRank: 5 },
  { id: 6, name: "Wrong Wallet Address", image: "/artworks/6-wrong-wallet-address.jpg", mentalState: "Transcendent Chart Being", msPoints: 8, intensity: "From Beyond", intPoints: 8, baseScore: 16, superpower: "None", tier: "MYTHIC", rarityRank: 6 },
  { id: 7, name: "Bottom Sold", image: "/artworks/7-bottom-sold.jpg", mentalState: "Fibonacci Obsession", msPoints: 6, intensity: "From Beyond", intPoints: 8, baseScore: 14, superpower: "None", tier: "LEGENDARY", rarityRank: 7 },
  { id: 8, name: "Fake Team Doxx", image: "/artworks/8-fake-team-doxx.jpg", mentalState: "Trading God Complex", msPoints: 7, intensity: "Reality Collapse", intPoints: 7, baseScore: 14, superpower: "None", tier: "LEGENDARY", rarityRank: 8 },
  { id: 9, name: "Is This Project Real?", image: "/artworks/9-is-this-project-real-.jpg", mentalState: "Transcendent Chart Being", msPoints: 8, intensity: "Evolution Stage", intPoints: 6, baseScore: 14, superpower: "None", tier: "LEGENDARY", rarityRank: 9 },
  { id: 10, name: "AirDrop Junkie", image: "/artworks/10-airdrop-junkie.jpg", mentalState: "Leverage Madness", msPoints: 5, intensity: "From Beyond", intPoints: 8, baseScore: 13, superpower: "Endless Instant Bank Transfers", tier: "LEGENDARY", rarityRank: 10 },
  { id: 11, name: "Unstable Stablecoin", image: "/artworks/11-unstable-stablecoin.jpg", mentalState: "Fibonacci Obsession", msPoints: 6, intensity: "Reality Collapse", intPoints: 7, baseScore: 13, superpower: "Endless Instant Bank Transfers", tier: "LEGENDARY", rarityRank: 11 },
  { id: 12, name: "Second Mortgage Why", image: "/artworks/12-second-mortgage-why.jpg", mentalState: "Leverage Madness", msPoints: 5, intensity: "From Beyond", intPoints: 8, baseScore: 13, superpower: "None", tier: "EPIC", rarityRank: 12 },
  { id: 13, name: "Banned From Rich Life", image: "/artworks/13-banned-from-rich-life.jpg", mentalState: "Fibonacci Obsession", msPoints: 6, intensity: "Reality Collapse", intPoints: 7, baseScore: 13, superpower: "None", tier: "EPIC", rarityRank: 13 },
  { id: 14, name: "69 Rug Pulls Survivor", image: "/artworks/14-69-rug-pulls-surviver.jpg", mentalState: "Trading God Complex", msPoints: 7, intensity: "Evolution Stage", intPoints: 6, baseScore: 13, superpower: "None", tier: "EPIC", rarityRank: 14 },
  { id: 15, name: "Bought ATH Again", image: "/artworks/15-bought-ath-again.jpg", mentalState: "Transcendent Chart Being", msPoints: 8, intensity: "Third Eye Bleeding", intPoints: 5, baseScore: 13, superpower: "None", tier: "EPIC", rarityRank: 15 },
  { id: 16, name: "Flipped House For Uncomfer", image: "/artworks/16-flipped-house-for-uncomfer.jpg", mentalState: "HODL Psychosis", msPoints: 4, intensity: "From Beyond", intPoints: 8, baseScore: 12, superpower: "Credit Card Glitch", tier: "EPIC", rarityRank: 16 },
  { id: 17, name: "Invincible", image: "/artworks/17-invincible.jpg", mentalState: "Leverage Madness", msPoints: 5, intensity: "Reality Collapse", intPoints: 7, baseScore: 12, superpower: "Credit Card Glitch", tier: "EPIC", rarityRank: 17 },
  { id: 18, name: "No Shower During Bullrun", image: "/artworks/18-no-shower-during-bullrun.jpg", mentalState: "Hopium Addiction", msPoints: 3, intensity: "From Beyond", intPoints: 8, baseScore: 11, superpower: "Credit Card Glitch", tier: "EPIC", rarityRank: 18 },
  { id: 19, name: "Few More Candles", image: "/artworks/19-few-more-candles.jpg", mentalState: "HODL Psychosis", msPoints: 4, intensity: "Reality Collapse", intPoints: 7, baseScore: 11, superpower: "Credit Card Glitch", tier: "EPIC", rarityRank: 19 },
  { id: 20, name: "One Trade Fix All", image: "/artworks/20-one-trade-fix-all.jpg", mentalState: "Hopium Addiction", msPoints: 3, intensity: "From Beyond", intPoints: 8, baseScore: 11, superpower: "None", tier: "RARE", rarityRank: 20 },
  { id: 21, name: "Fudding The Hype", image: "/artworks/21-fudding-the-hype.jpg", mentalState: "HODL Psychosis", msPoints: 4, intensity: "Reality Collapse", intPoints: 7, baseScore: 11, superpower: "None", tier: "RARE", rarityRank: 21 },
  { id: 22, name: "Copium Overdose", image: "/artworks/22-copium-overdose.jpg", mentalState: "Leverage Madness", msPoints: 5, intensity: "Evolution Stage", intPoints: 6, baseScore: 11, superpower: "None", tier: "RARE", rarityRank: 22 },
  { id: 23, name: "Drained", image: "/artworks/23-drained.jpg", mentalState: "Fibonacci Obsession", msPoints: 6, intensity: "Third Eye Bleeding", intPoints: 5, baseScore: 11, superpower: "None", tier: "RARE", rarityRank: 23 },
  { id: 24, name: "Transaction Sent", image: "/artworks/24-transaction-sent.jpg", mentalState: "HODL Psychosis", msPoints: 4, intensity: "From Beyond", intPoints: 8, baseScore: 12, superpower: "None", tier: "RARE", rarityRank: 24 },
  { id: 25, name: "Bought High Sold Low", image: "/artworks/25-bought-high-sold-low.jpg", mentalState: "Leverage Madness", msPoints: 5, intensity: "Reality Collapse", intPoints: 7, baseScore: 12, superpower: "None", tier: "RARE", rarityRank: 25 },
  { id: 26, name: "Discord Friends Only Friends", image: "/artworks/26-discord-friends-only-friends.jpg", mentalState: "Degen Brain", msPoints: 2, intensity: "From Beyond", intPoints: 8, baseScore: 10, superpower: "PayPal Pay Later Bug", tier: "RARE", rarityRank: 26 },
  { id: 27, name: "Fading Wizzard", image: "/artworks/27-fading-wizzard.jpg", mentalState: "Hopium Addiction", msPoints: 3, intensity: "Reality Collapse", intPoints: 7, baseScore: 10, superpower: "PayPal Pay Later Bug", tier: "RARE", rarityRank: 27 },
  { id: 28, name: "Hot Wallet Vault", image: "/artworks/28-hot-wallet-vault.jpg", mentalState: "Trading FOMO", msPoints: 1, intensity: "From Beyond", intPoints: 8, baseScore: 9, superpower: "PayPal Pay Later Bug", tier: "RARE", rarityRank: 28 },
  { id: 29, name: "Can't Pay Rent Again", image: "/artworks/29-cant-pay-rent-again.jpg", mentalState: "Degen Brain", msPoints: 2, intensity: "Reality Collapse", intPoints: 7, baseScore: 9, superpower: "PayPal Pay Later Bug", tier: "RARE", rarityRank: 29 },
  { id: 30, name: "Trust Me Bro", image: "/artworks/30-trust-me-bro.jpg", mentalState: "Trading FOMO", msPoints: 1, intensity: "From Beyond", intPoints: 8, baseScore: 9, superpower: "None", tier: "UNCOMMON", rarityRank: 30 },
  { id: 31, name: "Compulsive Limit Orders", image: "/artworks/31-compulsive-limit-orders.jpg", mentalState: "Degen Brain", msPoints: 2, intensity: "Reality Collapse", intPoints: 7, baseScore: 9, superpower: "None", tier: "UNCOMMON", rarityRank: 31 },
  { id: 32, name: "Mirror Says Buy More", image: "/artworks/32-mirror-says-buy-more.jpg", mentalState: "Hopium Addiction", msPoints: 3, intensity: "Evolution Stage", intPoints: 6, baseScore: 9, superpower: "None", tier: "UNCOMMON", rarityRank: 32 },
  { id: 33, name: "Wallet Connect Error", image: "/artworks/33-wallet-connect-error.jpg", mentalState: "HODL Psychosis", msPoints: 4, intensity: "Third Eye Bleeding", intPoints: 5, baseScore: 9, superpower: "None", tier: "UNCOMMON", rarityRank: 33 },
  { id: 34, name: "Right Click Saved Seedphrase", image: "/artworks/34-right-click-saved-seedphrase.jpg", mentalState: "Leverage Madness", msPoints: 5, intensity: "Terminal", intPoints: 4, baseScore: 9, superpower: "None", tier: "UNCOMMON", rarityRank: 34 },
  { id: 35, name: "Withdrawal Button Disappeared", image: "/artworks/35-withdrawal-button-disappeared.jpg", mentalState: "Fibonacci Obsession", msPoints: 6, intensity: "Cryrical", intPoints: 3, baseScore: 9, superpower: "None", tier: "UNCOMMON", rarityRank: 35 },
  { id: 36, name: "Reality Is FUD", image: "/artworks/36-reality-is-fud.jpg", mentalState: "Trading God Complex", msPoints: 7, intensity: "Severe", intPoints: 2, baseScore: 9, superpower: "None", tier: "UNCOMMON", rarityRank: 36 },
  { id: 37, name: "Liquidated", image: "/artworks/37-liquidated.jpg", mentalState: "Transcendent Chart Being", msPoints: 8, intensity: "Mild", intPoints: 1, baseScore: 9, superpower: "None", tier: "UNCOMMON", rarityRank: 37 },
  { id: 38, name: "HODL Forever", image: "/artworks/38-hodl-forever.jpg", mentalState: "Degen Brain", msPoints: 2, intensity: "From Beyond", intPoints: 8, baseScore: 10, superpower: "None", tier: "UNCOMMON", rarityRank: 38 },
  { id: 39, name: "Instant Noodles Month 69", image: "/artworks/39-instant-noodles-month-sixty-nine.jpg", mentalState: "Hopium Addiction", msPoints: 3, intensity: "Reality Collapse", intPoints: 7, baseScore: 10, superpower: "None", tier: "UNCOMMON", rarityRank: 39 },
  { id: 40, name: "When Lambo, When GF", image: "/artworks/40-when-lambo-when-gf.jpg", mentalState: "HODL Psychosis", msPoints: 4, intensity: "Evolution Stage", intPoints: 6, baseScore: 10, superpower: "None", tier: "UNCOMMON", rarityRank: 40 },
  { id: 41, name: "Paper Hands Panic", image: "/artworks/41-paper-hands-panic.jpg", mentalState: "Leverage Madness", msPoints: 5, intensity: "Third Eye Bleeding", intPoints: 5, baseScore: 10, superpower: "None", tier: "UNCOMMON", rarityRank: 41 },
  { id: 42, name: "Hello Dev", image: "/artworks/42-hello-dev.jpg", mentalState: "Fibonacci Obsession", msPoints: 6, intensity: "Terminal", intPoints: 4, baseScore: 10, superpower: "None", tier: "UNCOMMON", rarityRank: 42 },
  { id: 43, name: "Kids College Fund Gone", image: "/artworks/43-kids-college-fund-gone.jpg", mentalState: "Trading God Complex", msPoints: 7, intensity: "Cryrical", intPoints: 3, baseScore: 10, superpower: "None", tier: "UNCOMMON", rarityRank: 43 },
  { id: 44, name: "Dead Inside", image: "/artworks/44-dead-inside.jpg", mentalState: "Transcendent Chart Being", msPoints: 8, intensity: "Severe", intPoints: 2, baseScore: 10, superpower: "None", tier: "UNCOMMON", rarityRank: 44 },
  { id: 45, name: "Came For The Tech", image: "/artworks/45-came-for-the-tech.jpg", mentalState: "Leverage Madness", msPoints: 5, intensity: "Terminal", intPoints: 4, baseScore: 9, superpower: "None", tier: "UNCOMMON", rarityRank: 45 },
  { id: 46, name: "Life Savings Gambler", image: "/artworks/46-life-savings-gambler.jpg", mentalState: "Trading FOMO", msPoints: 1, intensity: "Mild", intPoints: 1, baseScore: 2, superpower: "None", tier: "COMMON", rarityRank: 46 },
  { id: 47, name: "Sleeps When Market Sleeps", image: "/artworks/47-sleeps-when-market-sleeps.jpg", mentalState: "Trading FOMO", msPoints: 1, intensity: "Severe", intPoints: 2, baseScore: 3, superpower: "None", tier: "COMMON", rarityRank: 47 },
  { id: 48, name: "Deer Food Or Top Gainer", image: "/artworks/48-deer-food-or-top-gainer.jpg", mentalState: "Degen Brain", msPoints: 2, intensity: "Mild", intPoints: 1, baseScore: 3, superpower: "None", tier: "COMMON", rarityRank: 48 },
  { id: 49, name: "Friends Remember Me", image: "/artworks/49-friends-remember-me.jpg", mentalState: "Trading FOMO", msPoints: 1, intensity: "Cryrical", intPoints: 3, baseScore: 4, superpower: "None", tier: "COMMON", rarityRank: 49 },
  { id: 50, name: "Phone Hacked By Illuminati", image: "/artworks/50-phone-hacked-by-illuminati-dump-theorists.jpg", mentalState: "Degen Brain", msPoints: 2, intensity: "Severe", intPoints: 2, baseScore: 4, superpower: "None", tier: "COMMON", rarityRank: 50 },
  { id: 51, name: "Mom's Credit Card Declined", image: "/artworks/51-moms-credit-card-declined.jpg", mentalState: "Hopium Addiction", msPoints: 3, intensity: "Mild", intPoints: 1, baseScore: 4, superpower: "None", tier: "COMMON", rarityRank: 51 },
  { id: 52, name: "Super Qomfer", image: "/artworks/52-super-qomfer.jpg", mentalState: "Trading FOMO", msPoints: 1, intensity: "Terminal", intPoints: 4, baseScore: 5, superpower: "None", tier: "COMMON", rarityRank: 52 },
  { id: 53, name: "Late Investor", image: "/artworks/53-late-investor.jpg", mentalState: "Degen Brain", msPoints: 2, intensity: "Cryrical", intPoints: 3, baseScore: 5, superpower: "None", tier: "COMMON", rarityRank: 53 },
  { id: 54, name: "Lawyer Recommends Less Charts", image: "/artworks/54-lawyer-recommends-less-charts.jpg", mentalState: "Hopium Addiction", msPoints: 3, intensity: "Severe", intPoints: 2, baseScore: 5, superpower: "None", tier: "COMMON", rarityRank: 54 },
  { id: 55, name: "Sunday Pump Paranoia", image: "/artworks/55-sunday-pump-paranoia.jpg", mentalState: "HODL Psychosis", msPoints: 4, intensity: "Mild", intPoints: 1, baseScore: 5, superpower: "None", tier: "COMMON", rarityRank: 55 },
  { id: 56, name: "NFT Artist", image: "/artworks/56-nft-artist.jpg", mentalState: "Trading FOMO", msPoints: 1, intensity: "Third Eye Bleeding", intPoints: 5, baseScore: 6, superpower: "None", tier: "COMMON", rarityRank: 56 },
  { id: 57, name: "Only One More", image: "/artworks/57-only-one-more.jpg", mentalState: "Degen Brain", msPoints: 2, intensity: "Terminal", intPoints: 4, baseScore: 6, superpower: "None", tier: "COMMON", rarityRank: 57 },
  { id: 58, name: "Moving Candle Anxiety", image: "/artworks/58-moving-candle-anxiety.jpg", mentalState: "Hopium Addiction", msPoints: 3, intensity: "Cryrical", intPoints: 3, baseScore: 6, superpower: "None", tier: "COMMON", rarityRank: 58 },
  { id: 59, name: "Hopium Support Group Founder", image: "/artworks/59-hopium-support-group-founder.jpg", mentalState: "HODL Psychosis", msPoints: 4, intensity: "Severe", intPoints: 2, baseScore: 6, superpower: "None", tier: "COMMON", rarityRank: 59 },
  { id: 60, name: "Delete App Install Again", image: "/artworks/60-delete-app-install-again.jpg", mentalState: "Leverage Madness", msPoints: 5, intensity: "Mild", intPoints: 1, baseScore: 6, superpower: "None", tier: "COMMON", rarityRank: 60 },
  { id: 61, name: "Restaurant Bill Anxiety", image: "/artworks/61-restaurant-bill-anxiety.jpg", mentalState: "Trading FOMO", msPoints: 1, intensity: "Evolution Stage", intPoints: 6, baseScore: 7, superpower: "None", tier: "COMMON", rarityRank: 61 },
  { id: 62, name: "DCA Bro", image: "/artworks/62-dca-bro.jpg", mentalState: "Degen Brain", msPoints: 2, intensity: "Third Eye Bleeding", intPoints: 5, baseScore: 7, superpower: "None", tier: "COMMON", rarityRank: 62 },
  { id: 63, name: "No News From Devs", image: "/artworks/63-no-news-from-devs.jpg", mentalState: "Hopium Addiction", msPoints: 3, intensity: "Terminal", intPoints: 4, baseScore: 7, superpower: "None", tier: "COMMON", rarityRank: 63 },
  { id: 64, name: "Promised Islands", image: "/artworks/64-promised-islands.jpg", mentalState: "HODL Psychosis", msPoints: 4, intensity: "Cryrical", intPoints: 3, baseScore: 7, superpower: "None", tier: "COMMON", rarityRank: 64 },
  { id: 65, name: "Blocked By Financial Advisor", image: "/artworks/65-blocked-by-financial-advisor.jpg", mentalState: "Leverage Madness", msPoints: 5, intensity: "Severe", intPoints: 2, baseScore: 7, superpower: "None", tier: "COMMON", rarityRank: 65 },
  { id: 66, name: "Exchange Exit Scam", image: "/artworks/66-exchange-exit-scam.jpg", mentalState: "Fibonacci Obsession", msPoints: 6, intensity: "Mild", intPoints: 1, baseScore: 7, superpower: "None", tier: "COMMON", rarityRank: 66 },
  { id: 67, name: "Pump And Dump", image: "/artworks/67-pump-and-dump.jpg", mentalState: "Trading FOMO", msPoints: 1, intensity: "Reality Collapse", intPoints: 7, baseScore: 8, superpower: "None", tier: "COMMON", rarityRank: 67 },
  { id: 68, name: "Dopamine Degen", image: "/artworks/68-dopamine-degen.jpg", mentalState: "Degen Brain", msPoints: 2, intensity: "Evolution Stage", intPoints: 6, baseScore: 8, superpower: "None", tier: "COMMON", rarityRank: 68 },
  { id: 69, name: "Lost More Than Possible", image: "/artworks/69-lost-more-than-possible.jpg", mentalState: "Hopium Addiction", msPoints: 3, intensity: "Third Eye Bleeding", intPoints: 5, baseScore: 8, superpower: "None", tier: "COMMON", rarityRank: 69 },
];

export function getComferRarity(c: Comfer): { tier: string; color: string; points: number } {
  const tierData = TIERS.find((t) => t.name === c.tier) || TIERS[TIERS.length - 1];
  return { tier: c.tier, color: tierData.color, points: c.baseScore };
}

export function getTierColor(tierName: string): string {
  const tier = TIERS.find((t) => t.name === tierName);
  return tier?.color || "#808080";
}
