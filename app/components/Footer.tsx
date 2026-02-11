export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-base text-[#888] font-light italic mb-1">
          &ldquo;Madness in.&rdquo;
        </p>
        <p className="text-base text-[#888] font-light italic mb-1">
          &ldquo;Dreams out.&rdquo;
        </p>
        <p className="text-base text-[#888] font-light italic mb-10">
          &ldquo;System connects.&rdquo;
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12 text-sm">
          <div className="border border-[#1a1a1a] rounded-lg p-4 bg-[#0a0a0a]">
            <p className="text-[#444] text-xs font-mono mb-1">FOR DEGENS</p>
            <p className="text-[#888]">&ldquo;Your illness is an asset&rdquo;</p>
          </div>
          <div className="border border-[#1a1a1a] rounded-lg p-4 bg-[#0a0a0a]">
            <p className="text-[#444] text-xs font-mono mb-1">FOR COLLECTORS</p>
            <p className="text-[#888]">&ldquo;Generator NFTs, permanent utility&rdquo;</p>
          </div>
          <div className="border border-[#1a1a1a] rounded-lg p-4 bg-[#0a0a0a]">
            <p className="text-[#444] text-xs font-mono mb-1">FOR PHILOSOPHY NERDS</p>
            <p className="text-[#888]">&ldquo;Desire materialized through digital psychosis&rdquo;</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-bold tracking-wider">
            <span className="text-[#00ff88]">COMFERS</span>
            <span className="text-[#333] mx-2">&times;</span>
            <span className="text-[#8b5cf6]">COSMOS OF CREAM</span>
          </p>
        </div>

        <p className="text-xs text-[#333] font-mono">
          Psychosis determines prosperity.
        </p>
      </div>
    </footer>
  );
}
