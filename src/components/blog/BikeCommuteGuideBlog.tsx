import { BlogLayout } from './BlogLayout';
import { Card } from '@/components/ui/card';
import { CheckCircle, Clock, DollarSign, MapPin, Users, TrendingUp } from 'lucide-react';

export function BikeCommuteGuideBlog() {
  return (
    <BlogLayout
      title="Bike Taxi for Daily Commute in Chennai - Save Money & Time"
      excerpt="Transform your daily commute with bike taxi services. Learn how ViaGo's ride-sharing features help you save money on regular travel across T Nagar, Velachery, and OMR."
      category="Commuting Tips"
      readTime="6 min read"
      publishDate="October 13, 2025"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Chennai Commuter's Dilemma</h2>
          <p className="text-zinc-300 mb-4">
            Chennai's rapid growth has created significant transportation challenges. With over 8 million commuters traveling daily, 
            traditional transport methods often fall short in terms of cost, convenience, and time efficiency.
          </p>
          <p className="text-zinc-300">
            <strong className="text-[#ffbf00]">Bike taxi for daily commute Chennai</strong> has emerged as the smart solution, 
            offering speed, affordability, and flexibility that traditional transport cannot match.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Why Choose Bike Taxi for Daily Commuting?</h2>
          
          <div className="grid gap-6">
            <Card className="bg-zinc-700 border-zinc-600 p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-[#ffbf00] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Time Efficiency</h3>
                  <p className="text-zinc-300 mb-4">
                    Bikes can navigate through Chennai's traffic much faster than cars or buses. Average time savings of 30-50% 
                    compared to traditional transport, especially during peak hours.
                  </p>
                  <div className="bg-zinc-800 p-3 rounded">
                    <p className="text-sm text-zinc-300">
                      <strong className="text-[#ffbf00]">Example:</strong> T Nagar to OMR: Car/Bus 45-60 minutes, Bike taxi 25-35 minutes
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-700 border-zinc-600 p-6">
              <div className="flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-[#ffbf00] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cost Effectiveness</h3>
                  <p className="text-zinc-300 mb-4">
                    <strong className="text-[#ffbf00]">Cheap bike taxi Chennai</strong> services, especially with ride-sharing, 
                    can reduce monthly transport costs by 40-60% compared to personal vehicle ownership or daily cab rides.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-red-600 p-3 rounded">
                      <h4 className="text-white font-semibold text-sm mb-1">Traditional Cost (Monthly)</h4>
                      <p className="text-white text-sm">Fuel + Parking + Maintenance: ₹8,000-12,000</p>
                    </div>
                    <div className="bg-green-600 p-3 rounded">
                      <h4 className="text-white font-semibold text-sm mb-1">ViaGo Bike Taxi (Monthly)</h4>
                      <p className="text-white text-sm">With ride-sharing: ₹3,000-5,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-700 border-zinc-600 p-6">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-[#ffbf00] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Ride-Sharing Benefits</h3>
                  <p className="text-zinc-300 mb-4">
                    <strong className="text-[#ffbf00]">Connect with riders on your route Chennai</strong> through ViaGo's 
                    unique ride-sharing feature. Build regular commute groups and split costs consistently.
                  </p>
                  <ul className="space-y-2 text-zinc-300 text-sm">
                    <li>• Find regular commute partners</li>
                    <li>• Split fare 2-3 ways on popular routes</li>
                    <li>• Build trusted rider network</li>
                    <li>• Reduce environmental impact</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Route-Specific Commute Solutions</h2>
          
          <div className="grid gap-6">
            <Card className="bg-zinc-700 border-zinc-600 p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#ffbf00] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">T Nagar Business District</h3>
                  <p className="text-zinc-300 mb-3">
                    <strong className="text-[#ffbf00]">Ride-share T Nagar Chennai</strong> is highly popular due to dense office concentration. 
                    Peak sharing opportunities during 9 AM and 6 PM.
                  </p>
                  <div className="bg-zinc-800 p-3 rounded text-sm">
                    <p className="text-zinc-300"><strong>Best Times:</strong> 8:30-9:30 AM, 5:30-7:00 PM</p>
                    <p className="text-zinc-300"><strong>Average Savings:</strong> ₹50-80 per ride with sharing</p>
                    <p className="text-zinc-300"><strong>Popular Routes:</strong> T Nagar ↔ Anna Nagar, T Nagar ↔ Adyar</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-700 border-zinc-600 p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#ffbf00] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Velachery IT Corridor</h3>
                  <p className="text-zinc-300 mb-3">
                    <strong className="text-[#ffbf00]">Bike ride Velachery Chennai</strong> serves thousands of IT professionals daily. 
                    Excellent ride-sharing potential due to similar work schedules.
                  </p>
                  <div className="bg-zinc-800 p-3 rounded text-sm">
                    <p className="text-zinc-300"><strong>Best Times:</strong> 8:00-10:00 AM, 6:00-8:00 PM</p>
                    <p className="text-zinc-300"><strong>Average Savings:</strong> ₹60-100 per ride with sharing</p>
                    <p className="text-zinc-300"><strong>Popular Routes:</strong> Velachery ↔ OMR, Velachery ↔ Guindy</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-700 border-zinc-600 p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#ffbf00] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">OMR Tech Hub</h3>
                  <p className="text-zinc-300 mb-3">
                    <strong className="text-[#ffbf00]">Cheap bike rides OMR Chennai</strong> are essential for tech workers. 
                    Long-distance routes benefit significantly from cost-sharing.
                  </p>
                  <div className="bg-zinc-800 p-3 rounded text-sm">
                    <p className="text-zinc-300"><strong>Best Times:</strong> 7:30-9:30 AM, 5:30-7:30 PM</p>
                    <p className="text-zinc-300"><strong>Average Savings:</strong> ₹80-150 per ride with sharing</p>
                    <p className="text-zinc-300"><strong>Popular Routes:</strong> Thoraipakkam ↔ Sholinganallur, OMR ↔ City Center</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-zinc-700 border-zinc-600 p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#ffbf00] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Adyar Business Zone</h3>
                  <p className="text-zinc-300 mb-3">
                    <strong className="text-[#ffbf00]">Bike taxi Adyar Chennai</strong> connects residential areas with business districts. 
                    Good mix of corporate and retail commuters.
                  </p>
                  <div className="bg-zinc-800 p-3 rounded text-sm">
                    <p className="text-zinc-300"><strong>Best Times:</strong> 8:30-9:30 AM, 6:00-7:30 PM</p>
                    <p className="text-zinc-300"><strong>Average Savings:</strong> ₹40-70 per ride with sharing</p>
                    <p className="text-zinc-300"><strong>Popular Routes:</strong> Adyar ↔ Mylapore, Adyar ↔ T Nagar</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Monthly Commute Cost Analysis</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-zinc-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-zinc-600">
                  <th className="p-4 text-left text-white font-semibold">Transport Mode</th>
                  <th className="p-4 text-center text-white font-semibold">Monthly Cost</th>
                  <th className="p-4 text-center text-white font-semibold">Time/Day</th>
                  <th className="p-4 text-center text-white font-semibold">Convenience</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                <tr className="border-t border-zinc-600">
                  <td className="p-4 font-medium">Personal Vehicle</td>
                  <td className="p-4 text-center">₹8,000-12,000</td>
                  <td className="p-4 text-center">60-90 min</td>
                  <td className="p-4 text-center">
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-sm">Medium</span>
                  </td>
                </tr>
                <tr className="border-t border-zinc-600 bg-zinc-800">
                  <td className="p-4 font-medium">Public Transport</td>
                  <td className="p-4 text-center">₹1,500-3,000</td>
                  <td className="p-4 text-center">90-120 min</td>
                  <td className="p-4 text-center">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">Low</span>
                  </td>
                </tr>
                <tr className="border-t border-zinc-600">
                  <td className="p-4 font-medium">Regular Taxi/Cab</td>
                  <td className="p-4 text-center">₹10,000-15,000</td>
                  <td className="p-4 text-center">45-75 min</td>
                  <td className="p-4 text-center">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">High</span>
                  </td>
                </tr>
                <tr className="border-t border-zinc-600 bg-[#ffbf00] text-black">
                  <td className="p-4 font-bold">ViaGo Bike Taxi (Solo)</td>
                  <td className="p-4 text-center font-bold">₹4,000-6,000</td>
                  <td className="p-4 text-center font-bold">25-40 min</td>
                  <td className="p-4 text-center">
                    <span className="bg-green-700 text-white px-2 py-1 rounded text-sm font-bold">High</span>
                  </td>
                </tr>
                <tr className="border-t border-zinc-600 bg-green-600 text-white">
                  <td className="p-4 font-bold">ViaGo Bike Taxi (Shared)</td>
                  <td className="p-4 text-center font-bold">₹2,000-3,500</td>
                  <td className="p-4 text-center font-bold">30-45 min</td>
                  <td className="p-4 text-center">
                    <span className="bg-green-800 text-white px-2 py-1 rounded text-sm font-bold">High</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Building Your Regular Commute Network</h2>
          
          <div className="space-y-6">
            <Card className="bg-zinc-700 border-zinc-600 p-6">
              <h3 className="text-lg font-semibold text-[#ffbf00] mb-4">Step-by-Step Guide to Regular Ride-Sharing</h3>
              <ol className="space-y-4 text-zinc-300">
                <li className="flex gap-3">
                  <span className="bg-[#ffbf00] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <div>
                    <strong>Identify Your Route:</strong> Map your regular commute path and typical timing.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-[#ffbf00] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <div>
                    <strong>Use ViaGo's Route Matching:</strong> The app automatically suggests co-passengers on similar routes.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-[#ffbf00] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <div>
                    <strong>Build Trust:</strong> Rate and review co-passengers to build a reliable network.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="bg-[#ffbf00] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <div>
                    <strong>Create Groups:</strong> Form regular commute groups for consistent savings and convenience.
                  </div>
                </li>
              </ol>
            </Card>

            <Card className="bg-zinc-700 border-zinc-600 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Success Stories</h3>
              <div className="space-y-4">
                <div className="bg-zinc-800 p-4 rounded">
                  <p className="text-zinc-300 text-sm mb-2">
                    <strong className="text-[#ffbf00]">"Saved ₹4,000 monthly"</strong> - Kiran, Software Engineer
                  </p>
                  <p className="text-zinc-400 text-sm">
                    "Switched from personal vehicle to ViaGo shared rides for my OMR commute. 
                    Found 2 regular co-passengers, now split costs 3-way daily."
                  </p>
                </div>
                <div className="bg-zinc-800 p-4 rounded">
                  <p className="text-zinc-300 text-sm mb-2">
                    <strong className="text-[#ffbf00]">"Cut commute time by 40%"</strong> - Priya, Marketing Manager
                  </p>
                  <p className="text-zinc-400 text-sm">
                    "T Nagar to Adyar used to take 60 minutes by bus. With ViaGo bike taxi, 
                    it's consistently 35 minutes even during peak hours."
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Maximizing Your Commute Savings</h2>
          
          <div className="bg-gradient-to-r from-zinc-700 to-zinc-600 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#ffbf00] mb-4">Pro Tips for Regular Commuters</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Consistent Timing</h4>
                    <p className="text-zinc-300 text-sm">Leave at the same time daily to find regular ride partners</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Flexible Routes</h4>
                    <p className="text-zinc-300 text-sm">Be open to slight route variations for better sharing opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Build Relationships</h4>
                    <p className="text-zinc-300 text-sm">Maintain good relationships with regular co-passengers</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Track Savings</h4>
                    <p className="text-zinc-300 text-sm">Monitor monthly savings to stay motivated</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Share Experience</h4>
                    <p className="text-zinc-300 text-sm">Recommend ViaGo to colleagues for group commuting</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm">Use Backup Options</h4>
                    <p className="text-zinc-300 text-sm">Have alternative routes planned for flexibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Environmental Impact</h2>
          <p className="text-zinc-300 mb-4">
            Beyond personal savings, using <strong className="text-[#ffbf00]">bike taxi for daily commute Chennai</strong> 
            significantly reduces your carbon footprint. Each shared ride removes 1-2 vehicles from Chennai's congested roads.
          </p>
          <div className="bg-green-600 text-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Your Environmental Contribution</h3>
            <p className="text-sm">
              By choosing ViaGo's shared bike rides, you're contributing to reduced traffic congestion, 
              lower emissions, and a more sustainable Chennai. Each regular commuter using shared rides 
              prevents approximately 500kg of CO2 emissions annually.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Start Your Smart Commute Today</h2>
          <p className="text-zinc-300 mb-4">
            Transform your daily travel experience with <strong className="text-[#ffbf00]">ViaGo's bike taxi services</strong>. 
            Save money, save time, and contribute to a better Chennai through smart, shared transportation.
          </p>
          <p className="text-zinc-300">
            Download the ViaGo app and discover why thousands of Chennai commuters have switched to the smartest, 
            most affordable way to travel across the city. Your perfect commute partner is just one tap away!
          </p>
        </section>
      </div>
    </BlogLayout>
  );
}