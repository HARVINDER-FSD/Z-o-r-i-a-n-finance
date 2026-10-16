import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/HomeMain';
import AutoLoans from './pages/AutoLoans';
import PersonalLoans from './pages/PersonalLoans';
import HomeImprovement from './pages/HomeImprovement';
import DebtConsolidation from './pages/DebtConsolidation';
import EmergencyLoans from './pages/EmergencyLoans';
import Apply from './pages/Apply';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'auto-loans':
        return <AutoLoans />;
      case 'personal-loans':
        return <PersonalLoans />;
      case 'home-improvement':
        return <HomeImprovement />;
      case 'debt-consolidation':
        return <DebtConsolidation />;
      case 'emergency-loans':
        return <EmergencyLoans />;
      case 'apply':
        return <Apply />;
      case 'about':
        return <About />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Navigation setPage={setCurrentPage} currentPage={currentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer setPage={setCurrentPage} />
    </div>
  );
}

export default App;
