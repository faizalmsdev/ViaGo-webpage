import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { RideOptions } from "@/components/sections/RideOptions";
import { Safety } from "@/components/sections/Safety";
import { Footer } from "@/components/layout/Footer";
import { BetaSignupForm } from "@/components/sections/BetaSignupForm";
import DeleteAccountPage from "@/components/DeleteAccountPage"; 
 
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-900">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <HowItWorks />
                <RideOptions />
                <Safety />
                <BetaSignupForm />
              </>
            }
          />
          <Route path="/delete-account" element={<DeleteAccountPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
