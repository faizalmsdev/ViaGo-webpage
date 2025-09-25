'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import autoGif from '../assests/auto.gif';
import { useEffect } from 'react';


export function Hero() {

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
    <header id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900">

<motion.div 
  className="absolute inset-0 opacity-30 bg-cover bg-center"
  style={{ backgroundImage: `url(${autoGif})` }}
  initial={{ scale: 1.1 }}
  animate={{ scale: 1 }}
  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
/>


      <div className="container mx-auto px-4 relative z-10 pt-20  md:py-20 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Travel Cheap in Chennai<br />with <span className="text-[#ffbf00]">Viago</span>
          </h1>
          <p className="text-xl text-zinc-200 mb-8">
            Book shared auto rides & bike sharing with pre-booking for 15km under ₹60! India's most affordable platform for auto booking, bike sharing, and cab services. Zero commission, driver-set pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
          <Button 
            size="lg"
            className="bg-[#ffbf00] hover:bg-[#ffd700] text-black font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
            onClick={() => window.open("https://play.google.com/store/apps/details?id=com.viagocab.viago&hl=en_IN", "_blank")}
          >
            Download Viago App
            <ArrowRight className="ml-2" />
          </Button>

          <Button 
            size="lg" 
            variant="outline" 
            className="text-white border-white bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
            onClick={() => window.open("https://play.google.com/store/apps/details?id=com.viagocab.viago&hl=en_IN", "_blank")}
          >
            Book Cheap Rides
          </Button>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

