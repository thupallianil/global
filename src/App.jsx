import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Scope from './components/Scope';
import Essence from './components/Essence';
import Crew from './components/Crew';
import Blueprint from './components/Blueprint';
import Footprint from './components/Footprint';
import Synergy from './components/Synergy';
import Alliescape from './components/Alliescape';
import ImpactTales from './components/ImpactTales';
import CoCreate from './components/CoCreate';
import Echoes from './components/Echoes';
import Momentum from './components/Momentum';
import Chronos from './components/Chronos';
import Spotlight from './components/Spotlight';
import Wavelength from './components/Wavelength';
import PulseStream from './components/PulseStream';
import ExpansionRequest from './components/ExpansionRequest';
import Footer from './components/Footer';

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
