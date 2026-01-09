import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to determine if link is active
  const isActive = (href: string) => {
    if (href === location.pathname) return true;
    if (href.startsWith('/#') && location.pathname === '/') return false; // Don't highlight anchor links as active pages
    return false;
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/', { state: { targetId } });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className={`container mx-auto px-4 md:px-6 transition-all duration-500 ${isScrolled ? 'max-w-6xl' : ''}`}>
        <div className={`rounded-full px-6 py-3 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/20' : 'bg-transparent'}`}>
          
          {/* Logo */}
          <a href="/" onClick={(e) => handleNavClick(e, '/')} className={`text-2xl font-serif font-bold tracking-tight z-50 transition-colors ${isScrolled || isMenuOpen ? 'text-regen-dark' : 'text-regen-dark'} cursor-pointer`}>
            BeRegen
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  isActive(item.href) ? 'bg-regen-accent/20 font-bold text-regen-dark' : ''
                } ${
                  isScrolled 
                    ? 'text-regen-stone hover:text-regen-dark hover:bg-stone-100' 
                    : 'text-regen-dark hover:text-regen-accent hover:bg-regen-accent/10'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <button className={`p-2 rounded-full mx-1 transition-colors ${
               isScrolled 
                 ? 'text-regen-stone hover:bg-stone-100 hover:text-regen-dark' 
                 : 'text-regen-dark hover:bg-regen-accent/10 hover:text-regen-accent'
            }`} aria-label="Switch Language">
              <Globe className="w-5 h-5" />
            </button>

            <div className="ml-2">
               <Button href="/contact" variant={isScrolled ? 'accent' : 'accent'} size="sm" className={!isScrolled ? 'shadow-none' : ''}>
                 Contact
               </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden z-50">
             {/* Mobile Language Switcher */}
             <button className={`p-1 ${isMenuOpen || isScrolled ? 'text-regen-dark' : 'text-regen-dark'}`}>
                <Globe className="w-5 h-5" />
             </button>

            <button 
              className="p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-regen-dark" />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-regen-dark' : 'text-regen-dark'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-regen-cream z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.label} 
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-3xl font-serif font-bold text-regen-dark hover:text-regen-accent transition-colors"
          >
            {item.label}
          </a>
        ))}
        <Button href="/contact" onClick={() => setIsMenuOpen(false)} size="lg" variant="accent">
          Contact Us
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;