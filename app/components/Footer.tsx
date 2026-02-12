export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-base text-[#888] font-light italic mb-1">
          &ldquo;Mental state in.&rdquo;
        </p>
        <p className="text-base text-[#888] font-light italic mb-1">
          &ldquo;Intensity up.&rdquo;
        </p>
        <p className="text-base text-[#888] font-light italic mb-10">
          &ldquo;Rarity determined.&rdquo;
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12 text-sm">
          <div className="border border-[#1a1a1a] rounded-lg p-4 bg-[#0a0a0a]">
            <p className="text-[#444] text-xs font-mono mb-1">FOR DEGENS</p>
            <p className="text-[#888]">&ldquo;Your illness is your rarity&rdquo;</p>
          </div>
          <div className="border border-[#1a1a1a] rounded-lg p-4 bg-[#0a0a0a]">
            <p className="text-[#444] text-xs font-mono mb-1">FOR COLLECTORS</p>
            <p className="text-[#888]">&ldquo;69 unique cards, 8 tiers&rdquo;</p>
          </div>
          <div className="border border-[#1a1a1a] rounded-lg p-4 bg-[#0a0a0a]">
            <p className="text-[#444] text-xs font-mono mb-1">FOR FROG LOVERS</p>
            <p className="text-[#888]">&ldquo;Crypto-degenerate frogs with superpowers&rdquo;</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-bold tracking-wider">
            <span className="text-[#00ff88]">FROG69</span>
            <span className="text-[#333] mx-2">&times;</span>
            <span className="text-[#00FFFF]">TRADING CARDS</span>
          </p>
        </div>

        <p className="text-xs text-[#333] font-mono">
          Your psychosis determines your prosperity.
        </p>
      </div>
    </footer>
  );
}
