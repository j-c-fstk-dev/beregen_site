import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      navigate('/', { state: { targetId } });
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-regen-dark text-regen-sage/80 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative organic background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-regen-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Contact Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="text-3xl font-serif font-bold text-white tracking-tighter mb-2">
                BeRegen
              </div>
              <p className="text-lg text-regen-highlight font-medium opacity-90">
                Regenerative Infrastructure for Communities.
              </p>
            </div>
          </div>

          {/* Links Columns (Span 8 -> subdivided into 5 columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            
            {/* Ecosystem */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Ecosystem</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="/#regenimpacthub" onClick={(e) => handleLinkClick(e, '/#regenimpacthub')} className="hover:text-regen-highlight transition-colors">RegenImpactHub</a></li>
                <li><a href="/governance" onClick={(e) => handleLinkClick(e, '/governance')} className="hover:text-regen-highlight transition-colors">Governance (GOPR)</a></li>
                <li><a href="/regenflix" onClick={(e) => handleLinkClick(e, '/regenflix')} className="hover:text-regen-highlight transition-colors">RegenFlix</a></li>
                <li><a href="/regenapp" onClick={(e) => handleLinkClick(e, '/regenapp')} className="hover:text-regen-highlight transition-colors">RegenApp</a></li>
                <li><a href="/regenfund" onClick={(e) => handleLinkClick(e, '/regenfund')} className="hover:text-regen-highlight transition-colors">RegenFund</a></li>
              </ul>
            </div>

            {/* Foundation */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Foundation</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="hover:text-regen-highlight transition-colors">About</a></li>
                <li><a href="/team" onClick={(e) => handleLinkClick(e, '/team')} className="hover:text-regen-highlight transition-colors">Team</a></li>
                <li><a href="/fieldwork" onClick={(e) => handleLinkClick(e, '/fieldwork')} className="hover:text-regen-highlight transition-colors">Fieldwork</a></li>
                <li><a href="/roadmap" onClick={(e) => handleLinkClick(e, '/roadmap')} className="hover:text-regen-highlight transition-colors">Roadmap</a></li>
                <li><a href="/tech" onClick={(e) => handleLinkClick(e, '/tech')} className="hover:text-regen-highlight transition-colors">Tech</a></li>
              </ul>
            </div>

            {/* Participate */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Participate</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="/partners" onClick={(e) => handleLinkClick(e, '/partners')} className="hover:text-regen-highlight transition-colors">Partners</a></li>
                <li><a href="/validators" onClick={(e) => handleLinkClick(e, '/validators')} className="hover:text-regen-highlight transition-colors">Validators & Stewards</a></li>
                <li><a href="/early-access" onClick={(e) => handleLinkClick(e, '/early-access')} className="hover:text-regen-highlight transition-colors">Early Access</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Support</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-regen-highlight transition-colors flex items-center gap-1">Patreon <ExternalLink className="w-3 h-3 opacity-50"/></a></li>
                <li><a href="#" className="hover:text-regen-highlight transition-colors flex items-center gap-1">Giveth <ExternalLink className="w-3 h-3 opacity-50"/></a></li>
                <li><a href="#" className="hover:text-regen-highlight transition-colors flex items-center gap-1">Store <ExternalLink className="w-3 h-3 opacity-50"/></a></li>
                <li><a href="/support" onClick={(e) => handleLinkClick(e, '/support')} className="hover:text-regen-highlight transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="hover:text-regen-highlight transition-colors">Contact</a></li>
                <li><a href="/legal" onClick={(e) => handleLinkClick(e, '/legal')} className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40">
          <div>
            &copy; 2025 BeRegen Foundation. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="/terms" onClick={(e) => handleLinkClick(e, '/terms')} className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;