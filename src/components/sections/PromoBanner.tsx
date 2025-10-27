import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 500 && !isDismissed; // Show after scrolling 500px
      setIsVisible(shouldShow);
    };

    // Check if user has dismissed the banner in this session
    const dismissed = sessionStorage.getItem('promoBannerDismissed');
    if (dismissed) {
      setIsDismissed(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('promoBannerDismissed', 'true');
  };

  const handleClaim = () => {
    window.open("https://play.google.com/store/apps/details?id=com.viagocab.viago&hl=en_IN", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96"
        >
          <div className="bg-gradient-to-r from-[#ffbf00] via-[#ffd700] to-[#ffed4e] p-4 rounded-xl shadow-2xl border-2 border-yellow-300">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-black animate-bounce" />
                <span className="font-bold text-black text-sm">LIMITED OFFER!</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDismiss}
                className="text-black hover:bg-black hover:bg-opacity-10 p-1 h-auto"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="text-black mb-3">
              <p className="font-semibold text-sm mb-1">
                Oct 5-11: 100% Cashback
              </p>
              <p className="text-xs">
                On all rides below ₹150! Claim in ViaGo app.
              </p>
            </div>
            
            <Button
              onClick={handleClaim}
              className="w-full bg-black text-[#ffbf00] hover:bg-gray-800 text-sm font-semibold"
              size="sm"
            >
              Download & Claim Now!
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}