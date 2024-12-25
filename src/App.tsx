import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { RideOptions } from '@/components/sections/RideOptions';
import { Safety } from '@/components/sections/Safety';
import { Stats } from '@/components/sections/Stats';
import { Footer } from '@/components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Hero />
      <Features />
      <HowItWorks />
      <RideOptions />
      <Safety />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;