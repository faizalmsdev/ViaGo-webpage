import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function SurveyLanding() {
  useEffect(() => {
    // Update meta tags for survey landing page
    document.title = 'Viago Cabs Survey - Shape Chennai\'s Transportation Future';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Take the official Viago Cabs survey. Share your travel preferences for bike sharing, auto booking, and cab services in Chennai. Help improve our ride-sharing platform.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Help Shape <span className="text-[#ffbf00]">Viago's Future</span>
        </h1>
        <p className="text-xl text-zinc-300 mb-12 max-w-3xl mx-auto">
          Your feedback matters! Take our survey to help us improve bike sharing, auto booking, 
          and cab services in Chennai. Shape the future of affordable transportation.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-zinc-800 border-zinc-700 p-6">
            <h3 className="text-white text-xl font-semibold mb-3">Share Your Routes</h3>
            <p className="text-zinc-400">
              Tell us your common travel routes in Chennai to help us optimize our services
            </p>
          </Card>
          <Card className="bg-zinc-800 border-zinc-700 p-6">
            <h3 className="text-white text-xl font-semibold mb-3">Set Fair Pricing</h3>
            <p className="text-zinc-400">
              Help us understand what pricing works best for your budget and travel needs
            </p>
          </Card>
          <Card className="bg-zinc-800 border-zinc-700 p-6">
            <h3 className="text-white text-xl font-semibold mb-3">Improve Services</h3>
            <p className="text-zinc-400">
              Your feedback directly influences our bike sharing, auto, and cab booking features
            </p>
          </Card>
        </div>
        
        <div className="space-y-4">
          <Link to="/survey">
            <Button 
              size="lg"
              className="bg-[#ffbf00] hover:bg-[#ffd700] text-black font-semibold text-lg px-8 py-4"
            >
              Take Survey Now →
            </Button>
          </Link>
          <p className="text-zinc-500 text-sm">
            Survey takes less than 2 minutes • Your data is secure • Help improve Chennai's transportation
          </p>
        </div>
        
        {/* SEO Content */}
        <div className="mt-16 text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">About Viago Cabs Survey</h2>
          <div className="text-zinc-400 space-y-4 text-sm">
            <p>
              The <strong>Viago Cabs survey</strong> is designed to understand Chennai's transportation needs better. 
              Whether you're looking for information about our <strong>bike sharing with pre-booking</strong>, 
              <strong>auto booking services</strong>, or general <strong>ride sharing</strong> options, your feedback helps us improve.
            </p>
            <p>
              As Chennai's most affordable transportation platform, <strong>Viago</strong> (also known as <strong>ViagoCabs</strong>) 
              values community input. Our <strong>survey form</strong> helps us understand pricing preferences, route demands, 
              and service improvements needed across Chennai.
            </p>
            <p>
              Participate in the <strong>Viago survey</strong> and help shape the future of affordable travel in Chennai. 
              Your responses influence our bike sharing, auto booking, and cab services development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}