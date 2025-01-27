import { Car, MapPin, Phone, Clock } from 'lucide-react';
import { useEffect } from 'react';

const steps = [
  {
    icon: MapPin,
    title: 'Set Your Route',
    description: 'Enter your pickup and drop-off locations to find available rides or post your journey.'
  },
  {
    icon: Clock,
    title: 'Choose Your Time',
    description: 'Select when you want to travel or set your regular commute schedule.'
  },
  {
    icon: Car,
    title: 'Match & Ride',
    description: 'Connect with drivers or passengers heading your way at the best prices.'
  },
  {
    icon: Phone,
    title: 'Stay Connected',
    description: 'Chat, track rides, and share your journey status with loved ones.'
  }
];

export function HowItWorks() {

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
    <section id="how-it-works" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How Viago Works</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Simple, transparent, and efficient. Start your journey in just a few steps.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-zinc-800 rounded-full flex items-center justify-center">
                <step.icon className="w-8 h-8 text-[#ffbf00]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}