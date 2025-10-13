import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, CheckCircle, DollarSign, Users, Clock, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const benefits = [
  {
    icon: DollarSign,
    title: 'Zero Commission',
    description: 'Keep 100% of your earnings. No hidden fees or commissions on any ride.'
  },
  {
    icon: Users,
    title: 'Flexible Schedule',
    description: 'Work when you want. Set your own hours and availability.'
  },
  {
    icon: Clock,
    title: 'Quick Payments',
    description: 'Get paid instantly after each ride. Fast and secure payment system.'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Verified rider profiles and 24/7 support for your safety.'
  }
];

export default function DriverSignup() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    licenseNumber: '',
    vehicleType: '',
    vehicleNumber: '',
    experience: '',
    city: 'Chennai',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.licenseNumber || !formData.vehicleNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log('Driver signup form submitted:', formData);
    
    setIsSubmitted(true);
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 24 hours to complete your registration.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
        <Card className="bg-zinc-800 border-zinc-700 p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Application Submitted!</h2>
          <p className="text-zinc-300 mb-6">
            Thank you for your interest in becoming a ViaGo driver. Our team will review your application and contact you within 24 hours.
          </p>
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-[#ffbf00] hover:bg-[#ffd700] text-black font-semibold"
          >
            Return to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-zinc-900 to-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Become a <span className="text-[#ffbf00]">ViaGo</span> Driver
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Join Chennai's best bike ride-hailing platform with zero commission. Earn by posting rides and keep 100% of your earnings!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-[#ffbf00] text-black px-6 py-3 rounded-lg font-semibold">
              ✅ Zero Commission Platform
            </div>
            <div className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
              ✅ Instant Payments
            </div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              ✅ Flexible Schedule
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Drive with ViaGo?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-700 p-6 text-center">
                <benefit.icon className="w-12 h-12 text-[#ffbf00] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zinc-400">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-zinc-800 border-zinc-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                ViaGo Driver Registration - Chennai
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-zinc-700 border-zinc-600 text-white"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-zinc-700 border-zinc-600 text-white"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-zinc-700 border-zinc-600 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="licenseNumber" className="text-white">Driving License Number *</Label>
                    <Input
                      id="licenseNumber"
                      name="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={handleInputChange}
                      className="bg-zinc-700 border-zinc-600 text-white"
                      placeholder="TN XX XXXX XXXXXXX"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="vehicleType" className="text-white">Vehicle Type *</Label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-md px-3 py-2"
                      required
                    >
                      <option value="">Select vehicle type</option>
                      <option value="bike">Bike/Motorcycle</option>
                      <option value="scooter">Scooter</option>
                      <option value="auto">Auto Rickshaw</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vehicleNumber" className="text-white">Vehicle Registration Number *</Label>
                    <Input
                      id="vehicleNumber"
                      name="vehicleNumber"
                      value={formData.vehicleNumber}
                      onChange={handleInputChange}
                      className="bg-zinc-700 border-zinc-600 text-white"
                      placeholder="TN XX XX XXXX"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience" className="text-white">Driving Experience (Years)</Label>
                    <Input
                      id="experience"
                      name="experience"
                      type="number"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="bg-zinc-700 border-zinc-600 text-white"
                      placeholder="5"
                      min="1"
                      max="50"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-zinc-700 border-zinc-600 text-white"
                    placeholder="Tell us about your availability, preferred areas to operate, or any questions..."
                    rows={4}
                  />
                </div>

                <div className="bg-zinc-700 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">How to Make Money with Bike Taxi Chennai:</h3>
                  <ul className="text-zinc-300 text-sm space-y-1">
                    <li>• Post your available rides and routes</li>
                    <li>• Connect with passengers going your way</li>
                    <li>• Set your own fair prices</li>
                    <li>• Earn 100% of your fare - zero commission!</li>
                    <li>• Get paid instantly after each ride</li>
                  </ul>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#ffbf00] hover:bg-[#ffd700] text-black font-semibold py-3"
                >
                  Submit Driver Application <ArrowRight className="ml-2" />
                </Button>
              </form>

              <div className="mt-6 text-center text-zinc-400 text-sm">
                <p>
                  By submitting this application, you agree to ViaGo's terms and conditions. 
                  We'll verify your documents and contact you within 24 hours.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Start Earning with ViaGo Driver Signup Chennai
            </h2>
            <div className="text-zinc-400 space-y-4">
              <p>
                <strong className="text-white">ViaGo driver signup Chennai</strong> is your gateway to earning money as a bike taxi driver 
                without any commission fees. Our <strong className="text-white">bike drivers zero commission platform</strong> ensures you keep 
                every rupee you earn.
              </p>
              <p>
                Join thousands of drivers who are already <strong className="text-white">earning by posting rides Chennai</strong> on our platform. 
                Learn <strong className="text-white">how to make money with bike taxi Chennai</strong> through flexible schedules, 
                fair pricing, and instant payments.
              </p>
              <p>
                ViaGo covers all major areas including T Nagar, Velachery, Adyar, OMR, and other key locations in Chennai. 
                Start your journey as a professional bike taxi driver with the best ride-hailing platform in the city.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}