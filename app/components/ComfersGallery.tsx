"use client";

import { useState } from "react";
import { comfers, intensityTiers, mentalStateCategories, superpowerEffects } from "@/app/data/comfers";

export default function ComfersGallery() {
  const [selectedComfer, setSelectedComfer] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const uniqueMentalStates = [...new Set(comfers.map((c) => c.mentalState))];

  const filteredComfers = filter === "all"
    ? comfers
    : filter === "superpower"
      ? comfers.filter((c) => c.superpower)
      : comfers.filter((c) => c.mentalState === filter);

  const selected = selectedComfer !== null ? comfers.find((c) => c.id === selectedComfer) : null;
  const selectedIntensity = selected ? intensityTiers[selected.intensity] : null;
  const selectedCategory = selected ? mentalStateCategories[selected.mentalState] : null;

  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />

        <p className="text-xs tracking-[0.3em] uppercase text-[#00ff88] mb-6 font-mono">
          Collection
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          The 69 Chosen Degenerates
        </h2>
        <p className="text-[#666] mb-12 max-w-2xl">
          Each Comfer is unique. Click any to reveal their psychosis profile.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              filter === "all"
                ? "border-[#00ff88] text-[#00ff88] bg-[#00ff88]/10"
                : "border-[#1a1a1a] text-[#555] hover:border-[#333]"
            }`}
          >
            All ({comfers.length})
          </button>
          <button
            onClick={() => setFilter("superpower")}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              filter === "superpower"
                ? "border-[#f59e0b] text-[#f59e0b] bg-[#f59e0b]/10"
                : "border-[#1a1a1a] text-[#555] hover:border-[#333]"
            }`}
          >
            Superpowered ({comfers.filter((c) => c.superpower).length})
          </button>
          {uniqueMentalStates.slice(0, 6).map((ms) => (
            <button
              key={ms}
              onClick={() => setFilter(ms)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors hidden lg:block ${
                filter === ms
                  ? "border-[#8b5cf6] text-[#8b5cf6] bg-[#8b5cf6]/10"
                  : "border-[#1a1a1a] text-[#555] hover:border-[#333]"
              }`}
            >
              {ms}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Artwork Images */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-3 mb-8">
          {filteredComfers.map((comfer) => {
            const intensity = intensityTiers[comfer.intensity];
            const isSelected = selectedComfer === comfer.id;
            return (
              <button
                key={comfer.id}
                onClick={() => setSelectedComfer(isSelected ? null : comfer.id)}
                className={`group relative aspect-square rounded-lg border overflow-hidden transition-all duration-200 ${
                  isSelected
                    ? "border-[#00ff88] ring-2 ring-[#00ff88]/50 scale-105 z-10"
                    : "border-[#1a1a1a] hover:border-[#333] hover:scale-[1.02]"
                }`}
                title={`#${comfer.id} - ${comfer.name}`}
              >
                <img
                  src={comfer.image}
                  alt={comfer.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay with ID */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity ${
                  isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <p className="text-[10px] font-mono font-bold" style={{ color: intensity?.color || "#666" }}>
                      #{comfer.id}
                    </p>
                    <p className="text-[9px] text-white/80 truncate">{comfer.name}</p>
                  </div>
                </div>
                {comfer.superpower && (
                  <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#f59e0b] ring-1 ring-black/50" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Comfer Detail */}
        {selected && (
          <div className="border border-[#00ff88]/30 rounded-lg p-6 md:p-8 bg-[#0a0f0a]/50 glow-box-green">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Artwork */}
              <div className="shrink-0">
                <div className="w-full md:w-64 aspect-square rounded-lg overflow-hidden border border-[#00ff88]/20">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">
                    <span className="text-[#00ff88]">COMFER #{selected.id}</span>
                  </h3>
                  {selectedIntensity && (
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full border"
                      style={{ color: selectedIntensity.color, borderColor: `${selectedIntensity.color}50` }}
                    >
                      {selectedIntensity.tier}
                    </span>
                  )}
                </div>
                <p className="text-lg font-semibold text-[#e5e5e5] mb-6">{selected.name}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] font-mono text-[#444] tracking-wider mb-1">MENTAL STATE</p>
                    <p className="text-sm font-semibold text-[#e5e5e5]">{selected.mentalState}</p>
                    {selectedCategory && (
                      <p className="text-xs text-[#00ff88] mt-1 font-mono">{selectedCategory}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#444] tracking-wider mb-1">INTENSITY</p>
                    <p className="text-sm font-semibold" style={{ color: selectedIntensity?.color }}>
                      {selected.intensity}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#444] tracking-wider mb-1">DURATION</p>
                    <p className="text-sm text-[#888]">{selected.duration}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#444] tracking-wider mb-1">TRIGGER</p>
                    <p className="text-sm text-[#888]">{selected.trigger}</p>
                  </div>
                </div>

                {selected.superpower && (
                  <div className="mt-6 pt-6 border-t border-[#1a1a1a]">
                    <p className="text-[10px] font-mono text-[#f59e0b] tracking-wider mb-1">SUPERPOWER</p>
                    <p className="text-sm font-bold superpower-badge">{selected.superpower}</p>
                    <p className="text-xs text-[#888] mt-1">
                      {superpowerEffects[selected.superpower]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
