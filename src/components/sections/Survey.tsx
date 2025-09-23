import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface SurveyData {
  email?: string;
  fromLocation: string;
  toLocation: string;
  fareAmount: number;
}

export function Survey() {
  const [formData, setFormData] = useState<SurveyData>({
    email: '',
    fromLocation: '',
    toLocation: '',
    fareAmount: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Load Google Analytics for survey page
  useEffect(() => {
    // Check if gtag script is already loaded for survey
    const existingScript = document.querySelector('script[src*="G-K2PH603QNL"]');
    if (existingScript) return;

    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-K2PH603QNL';
    document.head.appendChild(script);

    // Initialize gtag
    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', 'G-K2PH603QNL');
      
      // Make gtag globally available
      (window as any).gtag = gtag;
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'fareAmount' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fromLocation || !formData.toLocation || formData.fareAmount <= 0) {
      toast({
        title: "Error",
        description: "Please fill in all required fields with valid values.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: SurveyData = {
        fromLocation: formData.fromLocation,
        toLocation: formData.toLocation,
        fareAmount: formData.fareAmount,
      };

      // Only include email if it's provided
      if (formData.email && formData.email.trim() !== '') {
        payload.email = formData.email;
      }

      const response = await fetch('https://api.groovify.live/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "Thank you!",
          description: "Your survey response has been submitted successfully. We'll be in touch!",
        });
        // Reset form
        setFormData({
          email: '',
          fromLocation: '',
          toLocation: '',
          fareAmount: 0,
        });
      } else {
        throw new Error('Failed to submit survey');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit survey. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold text-white mb-4">Help Us Shape ViaGo</h1>
          <p className="text-zinc-300 text-lg leading-relaxed">
            We, the ViaGo team, want to know what price you are okay with to travel from your location 
            to office or to your desired location so we can bring that to possible. At that time we will 
            mail you. Currently we are in beta step, so your guidance may change us and us means you also. 
            Thanks!
          </p>
        </div>

        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Share Your Travel Preferences</CardTitle>
            <CardDescription className="text-zinc-400">
              Help us understand your travel needs and budget expectations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email Address <span className="text-zinc-500">(optional)</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fromLocation" className="text-white">
                    From Location <span className="text-red-400">*</span> 
                    (Nearby area or landmark is enough, e.g., Broadway, Thiruvanmiyur, Guindy)
                </Label>

                <Input
                  id="fromLocation"
                  name="fromLocation"
                  type="text"
                  placeholder="Your starting location"
                  value={formData.fromLocation}
                  onChange={handleInputChange}
                  required
                  className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="toLocation" className="text-white">
                  To Location <span className="text-red-400">*</span>
                  (Nearby area or landmark is enough, e.g., Broadway, Thiruvanmiyur, Guindy)
                </Label>
                <Input
                  id="toLocation"
                  name="toLocation"
                  type="text"
                  placeholder="Your destination (office, etc.)"
                  value={formData.toLocation}
                  onChange={handleInputChange}
                  required
                  className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fareAmount" className="text-white">
                  Fare Amount (in rupee) <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="fareAmount"
                  name="fareAmount"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="100"
                  value={formData.fareAmount || ''}
                  onChange={handleInputChange}
                  required
                  className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ffbf00] hover:bg-[#e6ac00] text-black font-semibold py-3"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Survey'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-zinc-400 text-sm">
            Your feedback helps us build better transportation solutions for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}