import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import ComfersGallery from "./components/ComfersGallery";
import TraitSystem from "./components/TraitSystem";
import CosmosTiers from "./components/CosmosTiers";
import Mechanics from "./components/Mechanics";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e5e5]">
      <div className="noise-overlay" />
      <Navigation />
      <Hero />
      <About />
      <ComfersGallery />
      <TraitSystem />
      <CosmosTiers />
      <Mechanics />
      <Roadmap />
      <Footer />
    </main>
  );
}
