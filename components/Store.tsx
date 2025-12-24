import React from 'react';
import PageHeader from './PageHeader';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import Button from './Button';

const Store: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream">
      <PageHeader 
        title="BeRegen Store" 
        subtitle="Regenerative Goods & Resources."
      />
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto bg-white p-12 rounded-[3rem] shadow-sm">
           <ShoppingBag className="w-16 h-16 text-regen-accent mx-auto mb-6" />
           <h2 className="text-2xl font-bold text-regen-dark mb-4">Our Shop is on Etsy</h2>
           <p className="text-gray-600 mb-8">
             We use Etsy to handle our secure transactions and shipping for physical goods. You will be redirected to our external shop.
           </p>
           <Button href="#" variant="primary" className="group">
             Go to Etsy Shop <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Button>
        </div>
      </div>
    </div>
  );
};

export default Store;