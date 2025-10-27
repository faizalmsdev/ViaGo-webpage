import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PromoPopup() {
  return (
    <div className="fixed right-6 bottom-6 z-50 w-80 md:w-96">
      <div className="bg-gradient-to-r from-[#ffbf00] to-[#ffd700] text-black p-4 rounded-xl shadow-lg border-2 border-yellow-400">
        <div className="flex flex-col gap-2 text-center mb-4">
          <span className="font-bold text-lg">🎉 LIMITED TIME OFFER!</span>
          <span className="font-semibold">October 5th - 11th: Get 100% Cashback on rides below ₹150!</span>
          <span className="text-sm font-medium">Claim directly in the ViaGo app!</span>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            className="bg-black hover:bg-zinc-800 text-[#ffbf00] flex-1 font-semibold"
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.viagocab.viago&hl=en_IN', '_blank')}
          >
            Download App <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-[#ffbf00] flex-1 font-semibold"
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.viagocab.viago&hl=en_IN', '_blank')}
          >
            Claim Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PromoPopup;
