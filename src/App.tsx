import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { RideOptions } from "@/components/sections/RideOptions";
import { Safety } from "@/components/sections/Safety";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import { BetaSignupForm } from "@/components/sections/BetaSignupForm";
import { Survey } from "@/components/sections/Survey";
import { SurveyPopup } from "@/components/sections/SurveyPopup";
import { Toaster } from "@/components/ui/toaster";
import DeleteAccountPage from "@/components/DeleteAccountPage";

function HomePage() {
  const [showSurveyPopup, setShowSurveyPopup] = useState(false);

  useEffect(() => {
    // Check if survey has been submitted or popup has been closed
    const surveySubmitted = localStorage.getItem('surveySubmitted');
    const popupClosed = localStorage.getItem('surveyPopupClosed');
    
    // Show popup only if survey hasn't been submitted and popup hasn't been closed
    if (surveySubmitted !== '1' && popupClosed !== '1') {
      // Add a small delay before showing the popup
      const timer = setTimeout(() => {
        setShowSurveyPopup(true);
      }, 3000); // Show after 3 seconds to let the page load
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseSurveyPopup = () => {
    setShowSurveyPopup(false);
  };

  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <RideOptions />
      <Safety />
      <FAQ />
      <BetaSignupForm />
      <SurveyPopup 
        isOpen={showSurveyPopup} 
        onClose={handleCloseSurveyPopup}
      />
    </>
  );
}
 
function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-zinc-900">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/delete-account" element={<DeleteAccountPage />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
