export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-divider mb-20" />

        <p className="text-xs tracking-[0.3em] uppercase text-[#00ff88] mb-6 font-mono">
          Philosophy
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">
          We don&apos;t manifest abundance.
          <br />
          <span className="text-[#8b5cf6]">We manifest psychosis.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-[#888] leading-relaxed">
          <div>
            <p className="mb-6">
              Comfers are not access passes. They are <span className="text-[#00ff88]">generators</span>.
              69 AI-generated NFTs capturing the mental states of crypto traders
              in various stages of psychosis.
            </p>
            <p>
              Each Comfer is a generator that continuously manifests items from
              the Cosmos of Cream. Your mental disorder defines what you get.
              Your intensity defines how good it gets.
            </p>
          </div>
          <div>
            <p className="mb-6">
              The <span className="text-[#8b5cf6]">Cosmos of Cream</span> is where desires become reality.
              10,000+ hand-drawn items cataloging the complete spectrum of human desire &mdash;
              from instant noodles to private islands.
            </p>
            <p>
              Every item is individually illustrated. No AI, no copy-paste, no templates.
              Sketched with the left hand, raw and authentic.
            </p>
          </div>
        </div>

        {/* What they are / aren't */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="border border-[#1a2a1a] rounded-lg p-8 bg-[#0a0f0a]/50">
            <h3 className="text-[#00ff88] font-mono text-sm tracking-wider mb-6">WHAT COMFERS ARE</h3>
            <ul className="space-y-3 text-sm text-[#888]">
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] mt-0.5">+</span>
                Permanent generators of Cosmos Items
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] mt-0.5">+</span>
                69 unique psychotic characters
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] mt-0.5">+</span>
                System-based NFT project with clear mechanics
              </li>
            </ul>
          </div>
          <div className="border border-[#2a1a1a] rounded-lg p-8 bg-[#0f0a0a]/50">
            <h3 className="text-[#ef4444] font-mono text-sm tracking-wider mb-6">WHAT COMFERS ARE NOT</h3>
            <ul className="space-y-3 text-sm text-[#888]">
              <li className="flex items-start gap-3">
                <span className="text-[#ef4444] mt-0.5">&minus;</span>
                A pure access pass
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ef4444] mt-0.5">&minus;</span>
                A Pepe derivative without its own IP
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ef4444] mt-0.5">&minus;</span>
                One-time hype without substance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
