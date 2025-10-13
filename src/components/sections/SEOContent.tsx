import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Users, Star } from 'lucide-react';

const blogPosts = [
  {
    title: "How to Find Cheap Bike Rides in Chennai - Complete Guide 2025",
    excerpt: "Discover the best ways to find affordable bike taxi services in Chennai. Compare prices, features, and learn why ViaGo offers the cheapest bike rides with zero commission.",
    slug: "how-to-find-cheap-bike-rides-chennai",
    keywords: ["cheap bike rides Chennai", "affordable bike taxi Chennai", "bike ride-hailing Chennai"],
    readTime: "5 min read",
    category: "Transportation Guide"
  },
  {
    title: "Best Bike Ride-Hailing Apps in Chennai - ViaGo vs Competitors",
    excerpt: "Complete comparison of bike taxi apps in Chennai. Find out why ViaGo is rated as the best bike ride-hailing app with zero commission and driver-set pricing.",
    slug: "best-bike-ride-hailing-apps-chennai", 
    keywords: ["bike ride-hailing apps Chennai", "bike taxi app comparison", "ViaGo vs competitors"],
    readTime: "7 min read",
    category: "App Reviews"
  },
  {
    title: "Bike Taxi for Daily Commute in Chennai - Save Money & Time",
    excerpt: "Transform your daily commute with bike taxi services. Learn how ViaGo's ride-sharing features help you save money on regular travel across T Nagar, Velachery, and OMR.",
    slug: "bike-taxi-daily-commute-chennai",
    keywords: ["bike taxi daily commute Chennai", "commute solutions Chennai", "save money transport"],
    readTime: "6 min read", 
    category: "Commuting Tips"
  },
  {
    title: "Earn by Posting Rides in Chennai - Driver's Complete Guide",
    excerpt: "Learn how to make money as a bike taxi driver in Chennai with ViaGo's zero commission platform. Complete guide to driver signup and earning strategies.",
    slug: "earn-by-posting-rides-chennai",
    keywords: ["earn by posting rides Chennai", "bike taxi driver Chennai", "ViaGo driver signup"],
    readTime: "8 min read",
    category: "Driver Guide"
  }
];

const locations = [
  {
    name: "T Nagar",
    description: "Busy shopping district with high demand for bike taxi services",
    popular: true
  },
  {
    name: "Velachery", 
    description: "IT corridor with regular commuters needing affordable bike rides",
    popular: true
  },
  {
    name: "Adyar",
    description: "Residential area with good connectivity through bike taxi",
    popular: true
  },
  {
    name: "OMR (Old Mahabalipuram Road)",
    description: "Tech hub requiring quick bike rides for daily commute",
    popular: true
  },
  {
    name: "Anna Nagar",
    description: "Central location with frequent bike ride requirements"
  },
  {
    name: "Mylapore", 
    description: "Cultural center with traditional and modern transport needs"
  }
];

export function SEOContent() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        
        {/* Blog Posts Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Chennai Bike Taxi Guide & Tips
          </h2>
          <p className="text-xl text-zinc-400 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive guides about bike ride-hailing in Chennai, money-saving tips, and how to get the best deals on bike taxi services.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700 hover:border-[#ffbf00] transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-[#ffbf00] text-black px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-zinc-500">• {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffbf00] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-zinc-400 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.keywords.slice(0, 2).map((keyword, i) => (
                      <span key={i} className="text-xs bg-zinc-700 text-zinc-300 px-2 py-1 rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-[#ffbf00] border-[#ffbf00] hover:bg-[#ffbf00] hover:text-black"
                    onClick={() => window.location.href = `/blog/${post.slug}`}
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Location Coverage Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            ViaGo Coverage Areas in Chennai
          </h2>
          <p className="text-xl text-zinc-400 text-center mb-12 max-w-3xl mx-auto">
            Book bike taxi rides across all major Chennai locations with our extensive network of verified drivers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className={`bg-zinc-800 border-zinc-700 p-6 text-center ${location.popular ? 'ring-2 ring-[#ffbf00]' : ''}`}>
                <MapPin className="w-8 h-8 text-[#ffbf00] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">
                  Bike Taxi {location.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">
                  {location.description}
                </p>
                {location.popular && (
                  <div className="flex items-center justify-center gap-1 text-[#ffbf00] text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Popular Route</span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Chennai's Best Bike Ride-Hailing Service?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who've switched to ViaGo for zero commission bike rides across Chennai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#ffbf00] hover:bg-[#ffd700] text-black font-semibold"
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.viagocab.viago&hl=en_IN", "_blank")}
            >
              Download ViaGo App <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-[#ffbf00] border-[#ffbf00] hover:bg-[#ffbf00] hover:text-black"
              onClick={() => window.location.href = "/driver-signup"}
            >
              Become a Driver <Users className="ml-2" />
            </Button>
          </div>
        </div>
        
        {/* Additional SEO Content */}
        <div className="mt-16 text-left">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions - ViaGo Bike Taxi Chennai</h3>
            
            <div className="grid md:grid-cols-2 gap-12 text-zinc-400">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">For Riders</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <strong className="text-white">How do I book a bike ride in Chennai?</strong>
                    <p>Download the ViaGo app, enter your pickup and drop location, and book instantly. Our bike ride-hailing Chennai service connects you with nearby drivers in seconds.</p>
                  </div>
                  <div>
                    <strong className="text-white">Which areas does ViaGo cover?</strong>
                    <p>We provide bike taxi services across all major Chennai areas including T Nagar, Velachery, Adyar, OMR, Anna Nagar, and more. Our ride-sharing app Chennai has city-wide coverage.</p>
                  </div>
                  <div>
                    <strong className="text-white">How much does a bike ride cost?</strong>
                    <p>ViaGo offers the cheapest bike taxi Chennai rates with zero commission. Drivers set fair prices, making it more affordable than other bike ride-hailing apps.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">For Drivers</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <strong className="text-white">How do I become a ViaGo driver?</strong>
                    <p>Complete your ViaGo driver signup Chennai through our app. Upload required documents, get verified, and start earning by posting rides Chennai on our zero commission platform.</p>
                  </div>
                  <div>
                    <strong className="text-white">Do you charge commission?</strong>
                    <p>No! ViaGo is a zero commission bike rides platform. Keep 100% of your earnings - no hidden fees or commissions on any ride.</p>
                  </div>
                  <div>
                    <strong className="text-white">How much can I earn?</strong>
                    <p>Earnings depend on rides completed. With our bike drivers zero commission platform and driver-sets-fare model, you can maximize your income compared to other bike taxi apps.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}