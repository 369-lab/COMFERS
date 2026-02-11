import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import TraitSystem from "./components/TraitSystem";
import CosmosTiers from "./components/CosmosTiers";
import Mechanics from "./components/Mechanics";
import Roadmap from "./components/Roadmap";
import ComfersGallery from "./components/ComfersGallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <section id="comfers" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-divider mb-20" />
            <p className="text-xs tracking-[0.3em] uppercase text-[#00ff88] mb-6 font-mono">
              The Comfers
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              69 AI-Generated Psychotic Frogs
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto leading-relaxed">
              Each Comfer captures a mental state of a crypto trader in various stages of psychosis.
              Recurring visual motifs: charts, candles, terminal screens. Every Comfer has a unique
              expression of their disorder &mdash; they are generators, not just art.
            </p>
          </div>
        </section>
        <TraitSystem />
        <CosmosTiers />
        <Mechanics />
        <Roadmap />
        <ComfersGallery />
      </main>
      <Footer />
    </>
  );
}
