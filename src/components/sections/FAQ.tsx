import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const faqs = [
  {
    question: "How to travel cheap in Chennai?",
    answer: "Viago offers the cheapest way to travel in Chennai with shared auto rides starting at under ₹60 for 15km. Our ride-sharing platform connects you with other passengers going in the same direction, significantly reducing your travel costs."
  },
  {
    question: "What is Viago Cabs and how does it work?",
    answer: "Viago Cabs (also known as ViagoCabs or simply Viago) is Chennai's most affordable ride-sharing platform. We offer shared auto rides, cab booking, bike rentals, and more with zero commission fees. Drivers set their own fair prices, ensuring competitive rates."
  },
  {
    question: "How much does a shared auto cost in Chennai?",
    answer: "With Viago's shared auto service, you can travel up to 15km for under ₹60. This makes it the most affordable auto booking option in Chennai, perfect for daily commuting and regular travel."
  },
  {
    question: "What makes Viago different from other ride-sharing platforms?",
    answer: "Viago is a zero-commission platform where drivers keep 100% of their earnings. We offer pre-booking to avoid conflicts, driver-set pricing for fairness, and the cheapest shared auto rides in Chennai. Our community-driven approach ensures better value for both riders and drivers."
  },
  {
    question: "Can I book auto and cab rides in advance?",
    answer: "Yes! Viago offers pre-booking for all ride types including shared autos, cabs, and bikes. This ensures no conflicts and guaranteed availability when you need to travel."
  },
  {
    question: "How do I download the Viago app?",
    answer: "You can download the Viago app from Google Play Store. Search for 'Viago' or 'Viago Cabs' or visit the direct link to start booking affordable rides in Chennai."
  },
  {
    question: "Is Viago available throughout Chennai?",
    answer: "Yes, Viago operates across Chennai, providing affordable transportation solutions including shared autos, cab booking, and bike rentals in all major areas of the city."
  },
  {
    question: "What types of vehicles can I book through Viago?",
    answer: "Through Viago, you can book shared autos (most affordable), private cabs, bikes for rent, tempo travelers for group travel, and even hire drivers. All at competitive prices with zero commission."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-zinc-800 border-zinc-700">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-zinc-750 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-[#ffbf00] flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-[#ffbf00] flex-shrink-0" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
        
        {/* Additional SEO Content */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Chennai's #1 Affordable Transportation Solution
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Whether you're searching for <strong>"how to travel cheap in Chennai"</strong>, looking for 
              <strong> "cheap auto service"</strong>, or need reliable <strong>"cab booking"</strong> options, 
              Viago Cabs is your answer. Our innovative <strong>ride-sharing platform</strong> offers 
              <strong> shared auto rides</strong> at unbeatable prices, making daily commuting affordable for everyone. 
              Download the <strong>Viago app</strong> today and join thousands of satisfied customers who have 
              made the smart choice for affordable travel in Chennai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}