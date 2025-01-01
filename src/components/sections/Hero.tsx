'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import autoGif from '../assests/auto.gif';


export function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900">

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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            The Future of <span className="text-[#ffbf00]">Ride-Sharing</span>
          </h1>
          <p className="text-xl text-zinc-200 mb-8">
            Zero commission. Maximum earnings. Community-driven ride-sharing and bike rentals that put you in control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
            <Button 
              size="lg"
              className="bg-[#ffbf00] hover:bg-[#ffd700] text-black font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
            >
              Start Driving
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
            >
              Book a Ride
            </Button>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

