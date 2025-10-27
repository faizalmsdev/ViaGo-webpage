import { Bike, DollarSign, Shield, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: DollarSign,
    title: 'Zero Commission Bike Rides',
    description: 'Keep 100% of your earnings! ViaGo is the only zero commission ride-sharing app in Chennai. Drivers earn more, riders pay less - making it the cheapest bike taxi platform.'
  },  
  {
    icon: Users,
    title: 'Share Your Ride Chennai',
    description: 'Connect with riders on your route! Share costs and reduce traffic. Our community-driven bike ride-hailing app helps you find co-passengers for affordable travel across Chennai.'
  },  
  {
    icon: Bike,
    title: 'Quick Bike Rides Chennai',
    description: 'Book bike taxi in seconds! Fast pickup times across T Nagar, Velachery, Adyar & OMR. Best bike cab booking app for daily commute with driver-set fair pricing.'
  },  
  {
    icon: Shield,
    title: 'Safe Bike Taxi Service',
    description: 'Verified drivers and real-time tracking for secure bike rides. 24/7 support ensures safe bike taxi experience across Chennai with trusted ride-sharing community.'
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
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose ViaGo for Bike Ride-Hailing in Chennai?</h2>
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
        
        {/* Special Promotion Section */}
        <div className="mt-16 mb-12">
          <div className="bg-gradient-to-br from-[#ffbf00] via-[#ffd700] to-[#ffed4e] p-8 rounded-2xl shadow-2xl border-4 border-yellow-300">
            <div className="text-center text-black">
              <h3 className="text-3xl font-bold mb-4">🎉 EXCLUSIVE CASHBACK OFFER!</h3>
              <div className="max-w-2xl mx-auto">
                <p className="text-xl font-semibold mb-3">
                  October 5th - 11th, 2025
                </p>
                <p className="text-2xl font-bold mb-4">
                  Get 100% CASHBACK on all rides below ₹150!
                </p>
                <div className="bg-black bg-opacity-20 rounded-xl p-4 mb-4">
                  <p className="font-medium text-lg">
                    ✨ How to claim: Book your bike ride through ViaGo app and get instant cashback credited to your wallet!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="bg-white bg-opacity-90 text-black px-6 py-2 rounded-full font-semibold">
                    📱 Available on ViaGo App
                  </div>
                  <div className="bg-white bg-opacity-90 text-black px-6 py-2 rounded-full font-semibold">
                    🚀 Zero Commission + Cashback
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO Content */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Chennai's Best Bike Ride-Hailing & Taxi Service</h3>
            <div className="text-zinc-400 text-sm leading-relaxed space-y-4">
              <p>
                Looking for <strong>cheap bike taxi Chennai</strong>? ViaGo is the leading <strong>bike ride-hailing Chennai</strong> app offering 
                <strong>zero commission bike rides</strong> across the city. Our innovative <strong>ride-sharing app Chennai</strong> connects you with 
                drivers on similar routes, making it the most <strong>affordable bike taxi app</strong> available.
              </p>
              <p>
                Experience <strong>quick bike rides Chennai</strong> with our instant booking system. Whether you're commuting to work or exploring the city, 
                ViaGo's <strong>bike cab booking Chennai</strong> service covers all major areas including <strong>bike ride Velachery Chennai</strong>, 
                <strong>ride-share T Nagar Chennai</strong>, <strong>bike taxi Adyar Chennai</strong>, and <strong>cheap bike rides OMR Chennai</strong>.
              </p>
              <p>
                Join thousands of satisfied users who've discovered <strong>how to find cheap bike rides in Chennai</strong> with ViaGo. 
                Our <strong>no commission ride-sharing app</strong> ensures fair pricing where <strong>driver sets fare app</strong> model benefits everyone. 
                <strong>Viago app download</strong> is free and easy - start saving on your daily commute today!
              </p>
              <p>
                For drivers: <strong>Earn by posting rides Chennai</strong> on our <strong>bike drivers zero commission platform</strong>. 
                Learn <strong>how to make money with bike taxi Chennai</strong> through our driver program. 
                Complete your <strong>ViaGo driver signup Chennai</strong> and start earning 100% of your fares immediately!
              </p>
              <p>
                Help us improve Chennai's transportation! Take the <Link to="/survey" className="text-yellow-400 hover:text-yellow-300 underline">
                <strong>ViaGo survey</strong></Link> to shape the future of <strong>bike taxi for daily commute Chennai</strong> services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}