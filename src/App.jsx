import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Scope from './components/Scope';
import Essence from './pages/Essence';
import Crew from './pages/Crew';
import Blueprint from './pages/Blueprint';
import Footprint from './components/Footprint';
import Synergy from './components/Synergy';
import Alliescape from './pages/Alliescape';
import ImpactTales from './pages/ImpactTales';
import CoCreate from './pages/CoCreate';
import Echoes from './pages/Echoes';
import Momentum from './components/Momentum';
import Chronos from './pages/Chronos';
import Spotlight from './pages/Spotlight';
import Wavelength from './pages/Wavelength';
import PulseStream from './pages/PulseStream';
import ExpansionRequest from './components/ExpansionRequest';
import Footer from './Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Hero />;
      case 'scope': return <Scope />;
      case 'essence': return <Essence />;
      case 'crew': return <Crew />;
      case 'blueprint': return <Blueprint />;
      case 'footprint': return <Footprint />;
      case 'synergy': return <Synergy />;
      case 'alliescape': return <Alliescape />;
      case 'impact tales': return <ImpactTales />;
      case 'cocreate': return <CoCreate />;
      case 'echoes': return <Echoes />;
      case 'momentum': return <Momentum />;
      case 'chronos': return <Chronos />;
      case 'spotlight': return <Spotlight />;
      case 'wavelength': return <Wavelength />;
      case 'pulsestream': return <PulseStream />;
      case 'expansion request': return <ExpansionRequest />;
      default: return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
