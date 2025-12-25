
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PricingSimulator from './components/PricingSimulator';
import StrategicPhases from './components/StrategicPhases';
import StudentSpace from './components/StudentSpace';
import TrainerSpace from './components/TrainerSpace';
import LegalMentions from './components/LegalMentions';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalBanner from './components/LegalBanner';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tarification" element={<PricingSimulator />} />
            <Route path="/vision" element={<StrategicPhases />} />
            <Route path="/etudiant" element={<StudentSpace />} />
            <Route path="/formateur" element={<TrainerSpace />} />
            <Route path="/mentions-legales" element={<LegalMentions />} />
            <Route path="/confidentialite" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <LegalBanner />
      </div>
    </Router>
  );
};

export default App;
