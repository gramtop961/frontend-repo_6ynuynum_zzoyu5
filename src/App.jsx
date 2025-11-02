import Hero from './components/Hero';
import Features from './components/Features';
import GalaxyParallax from './components/GalaxyParallax';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <Features />
      <GalaxyParallax />
      <CTASection />
    </div>
  );
}

export default App;
