import React from 'react';
import Button from './Button';
import { ArrowRight, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Organic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop" 
          alt="Regenerative Forest" 
          className="w-full h-full object-cover"
        />
        {/* Complex Gradient Overlay for Readability and Mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-regen-dark/70 via-regen-dark/40 to-regen-cream"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-regen-dark/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto md:mx-0">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in text-white shadow-lg ring-1 ring-regen-highlight/30">
            <Leaf className="w-4 h-4 text-regen-highlight" />
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase">Regenerative Infrastructure</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8 text-white drop-shadow-sm animate-fade-in-up">
            BeRegen <br className="hidden md:block"/>
            <span className="text-3xl md:text-5xl lg:text-6xl font-sans font-light text-regen-highlight block mt-4">Regenerative Infrastructure for Communities</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-100 mb-12 max-w-2xl leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A living ecosystem that connects real-world action, learning, identity, governance and funding — making regeneration understandable, practical and part of everyday life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button href="/ecosystem" variant="accent" size="lg" className="group ring-2 ring-offset-2 ring-offset-transparent ring-regen-highlight/50">
              Explore the Ecosystem
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-regen-dark hover:border-white">
              About BeRegen
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float text-regen-dark/50 hidden md:block">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-regen-dark/50 mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;