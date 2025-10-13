import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToBeta = () => {
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const targetElement = document.getElementById('get-beta');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    } else {
      // If we're already on homepage, just scroll to section
      const targetElement = document.getElementById('get-beta');
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };  const handleNavigation = (sectionId: string) => {
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    } else {
      // If we're already on homepage, just scroll to section
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 px-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Viago</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-zinc-400 hover:text-white transition-colors">Home</Link>
            <button onClick={() => handleNavigation('features')} className="text-zinc-400 hover:text-white transition-colors">Features</button>
            <button onClick={() => handleNavigation('how-it-works')} className="text-zinc-400 hover:text-white transition-colors">How It Works</button>
            <button onClick={() => handleNavigation('safety')} className="text-zinc-400 hover:text-white transition-colors">Safety</button>
            <button onClick={() => handleNavigation('pricing')} className="text-zinc-400 hover:text-white transition-colors">Pricing</button>
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
              <Link to="/" className="text-zinc-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <button onClick={() => handleNavigation('features')} className="text-zinc-400 hover:text-white transition-colors text-left">Features</button>
              <button onClick={() => handleNavigation('how-it-works')} className="text-zinc-400 hover:text-white transition-colors text-left">How It Works</button>
              <button onClick={() => handleNavigation('safety')} className="text-zinc-400 hover:text-white transition-colors text-left">Safety</button>
              <button onClick={() => handleNavigation('pricing')} className="text-zinc-400 hover:text-white transition-colors text-left">Pricing</button>
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