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
            <p>
              Comfers are <span className="text-[#00ff88]">generators</span>.
              69 NFTs. Each one continuously manifests items from the Cosmos of Cream.
            </p>
          </div>
          <div>
            <p>
              <span className="text-[#8b5cf6]">Cosmos of Cream</span>: 10,000+ hand-drawn items.
              Every object of human desire. No AI. No templates.
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
                Permanent item generators
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] mt-0.5">+</span>
                69 unique characters
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ff88] mt-0.5">+</span>
                System-driven mechanics
              </li>
            </ul>
          </div>
          <div className="border border-[#2a1a1a] rounded-lg p-8 bg-[#0f0a0a]/50">
            <h3 className="text-[#ef4444] font-mono text-sm tracking-wider mb-6">WHAT COMFERS ARE NOT</h3>
            <ul className="space-y-3 text-sm text-[#888]">
              <li className="flex items-start gap-3">
                <span className="text-[#ef4444] mt-0.5">&minus;</span>
                An access pass
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ef4444] mt-0.5">&minus;</span>
                A derivative without its own IP
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ef4444] mt-0.5">&minus;</span>
                One-time hype
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
