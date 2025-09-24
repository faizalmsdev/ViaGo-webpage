import { Bike, DollarSign, Shield, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect } from 'react';

const features = [
  {
    icon: DollarSign,
    title: '0% Commission',
    description: 'Keep 100% of your earnings.we offer fares that are 16% lower than our competitors, ensuring better value for riders while maintaining fair driver earnings.'
  },  
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Anyone can be a driver or rider.Build trust with our specialized review feature, allowing users to verify drivers and riders before accepting rides.'
  },  
  {
    icon: Bike,
    title: 'Bike Rentals',
    description: 'Rent out your bike or find one to ride. Flexible mobility solutions. Coming soon in beta, enjoy the ease of renting a bike in just 3 clicks!'
  },  
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Verified profiles to build trust, real-time ride monitoring for added safety, and a specialized security feature. Enjoy peace of mind with 24/7 customer support.'
  },
  
];

export function Features() {

  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
  
      event.preventDefault();
      const targetId = anchor.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId!);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };
  
    document.addEventListener('click', handleSmoothScroll);
  
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose Viago?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-zinc-900 border-zinc-800">
              <feature.icon className="w-12 h-12 mb-4 text-[#ffbf00]" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-zinc-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
        
        {/* SEO Content */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Why Viago is Chennai's Best Ride Sharing Platform</h3>
            <div className="text-zinc-400 text-sm leading-relaxed space-y-4">
              <p>
                Looking for <strong>how to travel cheap in Chennai</strong>? Viago Cabs offers the most affordable auto and cab booking service in Chennai. 
                With our innovative <strong>shared auto rides</strong>, you can travel up to 15km for under ₹60 - making it the cheapest way to commute in the city.
              </p>
              <p>
                <strong>Viago</strong> (also known as <strong>ViagoCabs</strong> or <strong>Viago Cabs</strong>) is revolutionizing urban transportation with our 
                zero-commission <strong>ride sharing platform</strong>. Unlike other cab services, we let drivers set their own fair prices, ensuring 
                better earnings for drivers and competitive rates for passengers.
              </p>
              <p>
                Download the <strong>Viago app</strong> from Google Play Store and experience conflict-free travel with pre-booking, 
                real-time tracking, and the most affordable ride options in Chennai. Perfect for daily commuters, students, and anyone looking for 
                <strong>cheap auto service</strong> and <strong>share auto</strong> options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}