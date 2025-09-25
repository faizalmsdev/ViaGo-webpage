import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const stats = [
  { number: '50K+', label: 'Active Users' },
  { number: '1M+', label: 'Rides Completed' },
  { number: '100+', label: 'Cities' },
  { number: '$2M+', label: 'Driver Earnings' }
];

export function Stats() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-zinc-800 border-zinc-700">
              <div className="text-4xl font-bold text-[#ffbf00] mb-2">{stat.number}</div>
              <div className="text-zinc-400">{stat.label}</div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Growing Community</h3>
          <p className="text-zinc-400 mb-6">
            Be part of Chennai's transport revolution. <Link to="/survey" className="text-[#ffbf00] hover:text-[#ffbf00]/80 underline">Share your feedback</Link> to help us serve you better.
          </p>
        </div>
      </div>
    </section>
  );
}