import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, Bike, Users, Clock } from 'lucide-react';
import { useEffect } from 'react';

const options = [
  {
    icon: Car,
    title: 'Daily Commute',
    description: 'Regular rides to work or college',
    features: ['Schedule recurring trips', 'Match with regular co-riders', 'Split costs efficiently'],
    price: 'From ₹5/km (*Price may varry)'
  },
  {
    icon: Users,
    title: 'Outstation',
    description: 'Intercity travel made affordable',
    features: ['Long-distance rides', 'Flexible scheduling', 'Comfortable vehicles'],
    price: 'From ₹7/km (*Price may varry)'
  },
  {
    icon: Bike,
    title: 'Bike Rentals',
    description: 'Rent bikes for short trips',
    features: ['Hourly rentals', 'Wide variety of bikes', 'No security deposit'],
    price: 'From ₹20/hour (*Price may varry)'
  },
  {
    icon: Clock,
    title: 'Scheduled Rides',
    description: 'Plan your trips in advance',
    features: ['Book up to 7 days ahead', 'Guaranteed availability', 'Fixed pricing'],
    price: 'From ₹6/km (*Price may varry)'
  }
];

export function RideOptions() {
  
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
    <section id="pricing" className="py-24 bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Ride</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Multiple options to suit your needs and budget
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="p-6">
                <option.icon className="w-12 h-12 text-[#ffbf00] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{option.title}</h3>
                <p className="text-zinc-400 mb-4">{option.description}</p>
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, i) => (
                    <li key={i} className="text-zinc-400 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#ffbf00] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-[#ffbf00] font-semibold mb-4">{option.price}</p>
                <Button 
                  // className="w-full"
                  style={{ backgroundColor: '#ffbf00' }}
                  className="w-full hover:brightness-110 text-black font-semibold"
                >
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}