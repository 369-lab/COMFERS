export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-divider mb-20" />

        <p className="text-xs tracking-[0.3em] uppercase text-[#00ff88] mb-6 font-mono">
          Philosophy
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">
          69 unique trading cards.
          <br />
          <span className="text-[#8b5cf6]">A universe of items to manifest.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-[#888] leading-relaxed">
          <div>
            <p>
              Comfers are <span className="text-[#00ff88]">trading cards</span> with
              mental states, intensities, and superpowers.
              Each card is unique. Total supply: 69.
            </p>
          </div>
          <div>
            <p>
              <span className="text-[#8b5cf6]">8 rarity tiers</span> from Common to The One.
              Your traits determine what you manifest in the Cosmos of Cream.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
