import React from 'react';
import PageHeader from './PageHeader';
import { Map } from 'lucide-react';

const Roadwork: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-regen-cream">
      <PageHeader 
        title="Roadwork" 
        subtitle="The Journey on the Ground."
      />
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center justify-center text-center py-20">
          <Map className="w-20 h-20 text-stone-300 mb-6" />
          <h2 className="text-2xl font-serif font-bold text-regen-stone">The Journey is Unfolding</h2>
          <p className="text-gray-500 max-w-md mt-4">This section tracks our physical journey, fieldwork updates, and the real-world path of the BeRegen initiative.</p>
        </div>
      </div>
    </div>
  );
};

export default Roadwork;