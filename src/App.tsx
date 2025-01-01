import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { RideOptions } from '@/components/sections/RideOptions';
import { Safety } from '@/components/sections/Safety';
import { Stats } from '@/components/sections/Stats';
import { Footer } from '@/components/layout/Footer';
import { BetaSignupForm } from '@/components/sections/BetaSignupForm'

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 ">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <RideOptions />
      <Safety />
      <BetaSignupForm />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;