
import React from 'react';
import Hero from './Hero';
import Introduction from './Introduction';
import Ecosystem from './Ecosystem';
import RegenImpactHubSection from './RegenHub';
import Engage from './Engage';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Ecosystem />
      <RegenImpactHubSection />
      <Engage />
    </>
  );
};

export default Home;
