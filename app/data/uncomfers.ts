export interface Uncomfer {
  id: number;
  name: string;
  image: string;
  vibe: string;
  energy: string;
  glitch: string;
  tier: string;
}

export const VIBES = ["xxx"];

export const ENERGIES = ["xxx"];

export const GLITCHES = ["xxx"];

// Tier distribution for 420 uncomfers
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
    name: "xxx",
    image: "",
    vibe: "xxx",
    energy: "xxx",
    glitch: "xxx",
    tier: getTier(id),
  };
});
