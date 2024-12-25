import { Bike, DollarSign, Shield, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: DollarSign,
    title: '0% Commission',
    description: 'Keep 100% of your earnings. We believe in fair compensation for our drivers.'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Anyone can be a driver or rider. Share rides, make connections, earn money.'
  },
  {
    icon: Bike,
    title: 'Bike Rentals',
    description: 'Rent out your bike or find one to ride. Flexible mobility solutions.'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Verified profiles, secure payments, and 24/7 customer support.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-zinc-800">
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
      </div>
    </section>
  );
}