import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

   const handleScrollToBeta = () => {
    const targetElement = document.getElementById('get-beta');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 px-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Viago</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-zinc-400 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors">How It Works</a>
            <a href="#safety" className="text-zinc-400 hover:text-white transition-colors">Safety</a>
            <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</a>
            <Link to="/survey" className="text-zinc-400 hover:text-white transition-colors">Survey</Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Button variant="ghost" className="text-white">
              Sign In
            </Button> */}
            <Button 
              style={{ backgroundColor: '#ffbf00' }}
              className="hover:brightness-110 text-black font-semibold"
              onClick={handleScrollToBeta} 
            >
              Suggestions?
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-zinc-400 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors">How It Works</a>
              <a href="#safety" className="text-zinc-400 hover:text-white transition-colors">Safety</a>
              <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</a>
              <Link to="/survey" className="text-zinc-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Survey</Link>
              <div className="pt-4 space-y-4">
                <Button variant="ghost" className="w-full text-white">
                  Sign In
                </Button>
                {/* <Button 
                  className="w-full"
                  style={{ backgroundColor: '#ffbf00' }}
                  className="w-full hover:brightness-110 text-black font-semibold"
                >
                  Get Started
                </Button> */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}