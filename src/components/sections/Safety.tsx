import { Shield, Lock, Award, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified Profiles',
    description: 'All users undergo thorough verification including ID and background checks.'
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'End-to-end encrypted transactions with multiple payment options.'
  },
  {
    icon: Award,
    title: 'Insurance Coverage',
    description: 'All rides are insured with comprehensive coverage for peace of mind.'
  },
  {
    icon: HeartHandshake,
    title: 'Community Trust',
    description: 'Two-way rating system ensures quality and reliability.'
  }
];

export function Safety() {
  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Your Safety is Our Priority</h2>
          <p className="text-zinc-400">
            We've implemented multiple layers of security to ensure every ride is safe and comfortable.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#ffbf00]/10 to-transparent rounded-lg" />
              <div className="relative p-6">
                <feature.icon className="w-12 h-12 text-[#ffbf00] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}