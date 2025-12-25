
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LegalBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('accesslingua_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('accesslingua_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto bg-dark/95 backdrop-blur-md text-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-grow">
          <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Confidentialité et Standards Africains
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">
            En continuant votre navigation, vous acceptez l'utilisation de cookies et nos conditions d'utilisation. 
            AccessLingua protège vos données conformément aux normes panafricaines. 
            Consultez nos <Link to="/mentions-legales" className="text-primary hover:underline font-bold">Mentions Légales</Link> et notre <Link to="/confidentialite" className="text-primary hover:underline font-bold">Politique de Confidentialité</Link>.
          </p>
        </div>
        <div className="flex shrink-0 gap-4 w-full md:w-auto">
          <button 
            onClick={handleAccept}
            className="flex-grow md:flex-none bg-primary hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-xl transition-all"
          >
            Accepter et Continuer
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalBanner;
