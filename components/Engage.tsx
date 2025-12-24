import React from 'react';
import Button from './Button';
import { Users, Heart, Handshake, Rocket, ArrowUpRight } from 'lucide-react';

const Engage: React.FC = () => {
  return (
    <>
      {/* Section 6: Participation */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-regen-dark mb-6">An open ecosystem for collaboration</h2>
             <p className="text-lg text-gray-600">There are multiple ways to engage with what we are building. Every contribution matters.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 - Partner */}
            <div className="group bg-regen-sage p-8 rounded-3xl hover:bg-regen-dark transition-colors duration-500 cursor-default border border-transparent hover:border-regen-accent/20">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-white rounded-2xl text-regen-accent group-hover:bg-white/10 group-hover:text-regen-highlight transition-colors">
                    <Handshake className="w-6 h-6" />
                 </div>
                 <ArrowUpRight className="w-5 h-5 text-teal-300 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-regen-dark group-hover:text-white transition-colors">Partner</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors">As an institutional or community partner.</p>
            </div>
            
            {/* Card 2 - Validator */}
            <div className="group bg-regen-sage p-8 rounded-3xl hover:bg-regen-dark transition-colors duration-500 cursor-default border border-transparent hover:border-regen-accent/20">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-white rounded-2xl text-regen-accent group-hover:bg-white/10 group-hover:text-regen-highlight transition-colors">
                    <Users className="w-6 h-6" />
                 </div>
                 <ArrowUpRight className="w-5 h-5 text-teal-300 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-regen-dark group-hover:text-white transition-colors">Validator</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors">As a validator or steward of the ecosystem.</p>
            </div>

            {/* Card 3 - Early Access */}
            <div className="group bg-regen-sage p-8 rounded-3xl hover:bg-regen-dark transition-colors duration-500 cursor-default border border-transparent hover:border-regen-accent/20">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-white rounded-2xl text-regen-accent group-hover:bg-white/10 group-hover:text-regen-highlight transition-colors">
                    <Rocket className="w-6 h-6" />
                 </div>
                 <ArrowUpRight className="w-5 h-5 text-teal-300 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-regen-dark group-hover:text-white transition-colors">Early Participant</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors">As an early participant in our tools.</p>
            </div>

            {/* Card 4 - Supporter */}
             <div className="group bg-regen-sage p-8 rounded-3xl hover:bg-regen-dark transition-colors duration-500 cursor-default border border-transparent hover:border-regen-accent/20">
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-white rounded-2xl text-regen-accent group-hover:bg-white/10 group-hover:text-regen-highlight transition-colors">
                    <Heart className="w-6 h-6" />
                 </div>
                 <ArrowUpRight className="w-5 h-5 text-teal-300 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-regen-dark group-hover:text-white transition-colors">Supporter</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors">As a supporter of the ecosystem via Patreon.</p>
            </div>
            
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/participate" variant="primary" size="lg">Participate</Button>
            <Button href="/support" variant="outline" size="lg">Support BeRegen</Button>
          </div>
        </div>
      </section>

      {/* Section 7: Closing */}
      <section className="py-28 bg-regen-cream relative overflow-hidden">
        {/* Organic Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-regen-dark mb-10 leading-tight">
             Regeneration is not only about preservation.<br/>
             <span className="text-regen-accent italic">It is about restoring, caring for and rebuilding relationships.</span>
           </h2>
           
           <p className="text-xl text-regen-stone font-light leading-relaxed mb-10">
             BeRegen exists to support people and communities who are already doing this — by offering infrastructure, clarity and coordination so regeneration can flourish at a human scale.
           </p>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-24 bg-regen-dark text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-teal-900 to-green-900 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
         
         <div className="container mx-auto px-6 relative z-10">
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button href="/ecosystem" size="lg" variant="accent">Explore the Ecosystem</Button>
             <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-regen-dark hover:border-white">Get in Touch</Button>
           </div>
         </div>
      </section>
    </>
  );
};

export default Engage;