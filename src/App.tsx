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
import { SEOContent } from "@/components/sections/SEOContent";
import { PromoPopup } from "@/components/sections/PromoPopup";
import DriverSignup from "@/components/DriverSignup";
import { CheapBikeRidesBlog } from "@/components/blog/CheapBikeRidesBlog";
import { BestBikeAppsComparison } from "@/components/blog/BestBikeAppsComparison";
import { BikeCommuteGuideBlog } from "@/components/blog/BikeCommuteGuideBlog";
import { EarnByPostingRidesBlog } from "@/components/blog/EarnByPostingRidesBlog";
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
      <SEOContent />
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
          <Route path="/driver-signup" element={<DriverSignup />} />
          <Route path="/blog/how-to-find-cheap-bike-rides-chennai" element={<CheapBikeRidesBlog />} />
          <Route path="/blog/best-bike-ride-hailing-apps-chennai" element={<BestBikeAppsComparison />} />
          <Route path="/blog/bike-taxi-daily-commute-chennai" element={<BikeCommuteGuideBlog />} />
          <Route path="/blog/earn-by-posting-rides-chennai" element={<EarnByPostingRidesBlog />} />
        </Routes>
  <Footer />
  <PromoPopup />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
