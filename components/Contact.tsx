import React from 'react';
import PageHeader from './PageHeader';
import { Mail, Phone, MapPin, Handshake, Users, Heart, Rocket, HelpCircle, Info } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream font-sans">
      <PageHeader 
        title="Contact BeRegen" 
        subtitle="Let’s connect — with care, clarity and purpose."
        backgroundImage="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2670&auto=format&fit=crop"
      />

      {/* SECTION 1 — INTRODUCTION */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
           <div className="text-xl md:text-2xl text-regen-stone leading-relaxed space-y-6">
             <p>
               BeRegen is a living regenerative infrastructure built through relationships, trust and shared responsibility.
             </p>
             <p>
               If you want to connect, collaborate, host fieldwork, explore partnerships or simply start a conversation, this is the right place.
             </p>
             <p className="text-2xl font-serif italic text-regen-dark pt-4">
               “We value meaningful contact over volume.”
             </p>
           </div>
        </div>
      </section>

      {/* SECTION 2 — WHEN TO CONTACT US */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-serif font-bold text-regen-dark mb-12 text-center">When to contact us</h2>
             <p className="text-lg text-gray-600 mb-10 text-center">You can reach out if you want to:</p>
             
             <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <MapPin className="w-5 h-5" />, text: "Host a field visit or BeRegen IRL gathering" },
                  { icon: <Handshake className="w-5 h-5" />, text: "Explore partnerships or institutional collaboration" },
                  { icon: <Users className="w-5 h-5" />, text: "Participate as a validator or steward" },
                  { icon: <Heart className="w-5 h-5" />, text: "Support the ecosystem" },
                  { icon: <Rocket className="w-5 h-5" />, text: "Discuss pilots, research or aligned initiatives" },
                  { icon: <HelpCircle className="w-5 h-5" />, text: "Ask questions about the BeRegen ecosystem" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-6 bg-regen-sand rounded-2xl border border-stone-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-regen-accent/10 flex items-center justify-center text-regen-accent shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-medium text-regen-dark leading-tight">{item.text}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CONTACT CHANNELS */}
      <section className="py-16 md:py-24 bg-regen-sand">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-serif font-bold text-regen-dark mb-12 text-center">Contact Channels</h2>
             
             <div className="grid md:grid-cols-2 gap-8">
                {/* Email Channel */}
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-md">
                   <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                      <Mail className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-bold text-regen-dark mb-2">Email</h3>
                   <a href="mailto:beregenerative.life@gmail.com" className="text-regen-accent font-medium text-lg mb-4 hover:underline">
                      beregenerative.life@gmail.com
                   </a>
                   <p className="text-sm text-gray-500 italic">
                      For deeper collaboration and institutional proposals, email is preferred.
                   </p>
                </div>

                {/* WhatsApp Channel */}
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-md">
                   <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                      <Phone className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-bold text-regen-dark mb-2">WhatsApp</h3>
                   <a href="https://wa.me/5512982549745" target="_blank" rel="noopener noreferrer" className="text-regen-accent font-medium text-lg mb-4 hover:underline">
                      +55 12 98254-9745
                   </a>
                   <p className="text-sm text-gray-500 italic">
                      Use WhatsApp for short, practical communication.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — GUIDING NOTE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-regen-sand text-regen-stone text-xs font-bold uppercase tracking-widest mb-8">
                <Info className="w-4 h-4" />
                <span>Guiding Note</span>
             </div>
             <div className="prose prose-lg text-regen-stone mx-auto space-y-6">
                <p className="text-xl font-serif text-regen-dark italic">
                  “BeRegen is a small, care-driven ecosystem.”
                </p>
                <p className="leading-relaxed">
                  Responses may take time — not due to neglect, but because we prioritize presence, fieldwork and thoughtful engagement.
                </p>
                <p className="font-bold text-regen-dark">
                  Every message is read with attention.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CALL TO ACTION */}
      <section className="py-24 bg-regen-dark text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
             <p className="text-2xl md:text-3xl font-serif font-bold mb-8 leading-relaxed">
               If your intention is aligned with regeneration, collaboration and long-term responsibility, we look forward to hearing from you.
             </p>
             <div className="w-12 h-1 bg-regen-highlight mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;