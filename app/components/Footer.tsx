export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Final quote */}
        <p className="text-lg md:text-xl text-[#888] font-light italic mb-2">
          &ldquo;Your madness is the input.&rdquo;
        </p>
        <p className="text-lg md:text-xl text-[#888] font-light italic mb-2">
          &ldquo;Your dreams are the output.&rdquo;
        </p>
        <p className="text-lg md:text-xl text-[#888] font-light italic mb-12">
          &ldquo;The system is the connection.&rdquo;
        </p>

        {/* Marketing angles */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16 text-sm">
          <div className="border border-[#1a1a1a] rounded-lg p-6 bg-[#0a0a0a]">
            <p className="text-[#444] text-xs font-mono mb-2">FOR DEGENS</p>
            <p className="text-[#888]">&ldquo;Your mental illness is finally an asset&rdquo;</p>
          </div>
          <div className="border border-[#1a1a1a] rounded-lg p-6 bg-[#0a0a0a]">
            <p className="text-[#444] text-xs font-mono mb-2">FOR COLLECTORS</p>
            <p className="text-[#888]">&ldquo;Generator-based NFTs with permanent utility&rdquo;</p>
          </div>
          <div className="border border-[#1a1a1a] rounded-lg p-6 bg-[#0a0a0a]">
            <p className="text-[#444] text-xs font-mono mb-2">FOR PHILOSOPHY NERDS</p>
            <p className="text-[#888]">&ldquo;Materialization of desire through digital psychosis&rdquo;</p>
          </div>
        </div>

        {/* Logo */}
        <div className="mb-8">
          <p className="text-sm font-bold tracking-wider">
            <span className="text-[#00ff88]">COMFERS</span>
            <span className="text-[#333] mx-2">&times;</span>
            <span className="text-[#8b5cf6]">COSMOS OF CREAM</span>
          </p>
        </div>

        <p className="text-xs text-[#333] font-mono">
          Your psychosis determines your prosperity.
        </p>
      </div>
    </footer>
  );
}
