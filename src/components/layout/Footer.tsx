import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  // DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function Footer() {
  const handleScrollToBeta = () => {
    const targetElement = document.getElementById('get-beta');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

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
    <footer className="bg-zinc-900 text-zinc-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Viago</h3>
            <p className="mb-4">Revolutionizing ride-sharing with zero commission and community-driven solutions.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-white transition-colors">About Us</a></li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <a className="hover:text-white transition-colors cursor-pointer">Careers</a>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md [&>button]:text-[#ffbf00] [&>button]:hover:text-[#ffbf00]/80">
                    <div className="flex justify-between items-center mb-4">
                      <DialogTitle className="text-2xl font-bold">Join Our Team! 🚀</DialogTitle>
                    </div>
                    <div className="space-y-4">
                      <p className="text-lg">
                        Viago is recruiting talented developers who can turn innovative ideas into reality. Here, you're not just an employee – you're an important member of our team!
                      </p>
                      <div className="bg-[#ffbf00] bg-opacity-10 p-4 rounded-lg border border-[#ffbf00]">
                        <h4 className="font-semibold mb-2">We're also looking for interns! 🎓</h4>
                        <p>
                          Tell us what you know and what you're expert in. If we need your expertise, we'll bring you on board!
                        </p>
                      </div>
                      <div className="bg-[#ffbf00] bg-opacity-5 p-4 rounded-lg">
                        <p className="font-semibold">Contact us at:</p>
                        <a 
                          href="mailto:careers.viagocabs@gmail.com" 
                          className="text-[#ffbf00] hover:text-[#ffbf00]/80 break-all"
                        >
                          careers.viagocabs@gmail.com
                        </a>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Download</h4>
            <div className="space-y-3">
              <Button 
                className="w-full bg-[#ffbf00] text-black hover:bg-[#ffbf00]/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-[#ffbf00]/20 hover:scale-105 active:scale-95"
                onClick={handleScrollToBeta}
              >
                Get Android App
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Viago. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;