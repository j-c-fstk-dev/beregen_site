import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import EcosystemPage from './components/EcosystemPage';
import Footer from './components/Footer';


// Pages
import About from './components/About';
import RegenHubPage from './components/RegenHubPage';
import RegenFund from './components/RegenFund';
import RegenFlix from './components/RegenFlix';
import RegenApp from './components/RegenApp';
import TeamPage from './components/TeamPage';
import Roadmap from './components/Roadmap';
import Tech from './components/Tech';
import Community from './components/Community';
import Contact from './components/Contact';
import Support from './components/Support';
import Store from './components/Store';
import Transparency from './components/Transparency';
import Legal from './components/Legal';
import TermsOfService from './components/TermsOfService';

// New Pages
import Fieldwork from './components/Fieldwork';
import Participate from './components/Participate';
import Governance from './components/Governance';
import Partners from './components/Partners';
import Validators from './components/Validators';
import EarlyAccess from './components/EarlyAccess';
import Whitepaper from './components/Whitepaper';

// Component to handle scrolling when navigating with state (e.g., from /ecosystem to /#about)
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Handle state-based scrolling (from Navigation/Button navigate calls)
    if (location.state && (location.state as any).targetId) {
      const targetId = (location.state as any).targetId;
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure DOM is rendered
    } 
    // 2. Handle standard scroll to top on route change if no target
    else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollHandler />
      <main className="relative min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          
          {/* Modules */}
          <Route path="/regenimpacthub" element={<RegenHubPage />} />
          <Route path="/regenfund" element={<RegenFund />} />
          <Route path="/regenflix" element={<RegenFlix />} />
          <Route path="/regenapp" element={<RegenApp />} />
          
          {/* Foundation & Community */}
          <Route path="/team" element={<TeamPage />} />
          <Route path="/fieldwork" element={<Fieldwork />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/community" element={<Community />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/validators" element={<Validators />} />
          <Route path="/early-access" element={<EarlyAccess />} />
          
          {/* Support & Legal */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/store" element={<Store />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </main>
    </HashRouter>
  );
};

export default App;