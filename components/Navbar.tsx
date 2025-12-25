
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const checkAuth = () => {
    const session = localStorage.getItem('accesslingua_session');
    setIsAuthenticated(!!session);
  };

  useEffect(() => {
    checkAuth();
    
    // Écoute les changements globaux d'authentification
    window.addEventListener('authChange', checkAuth);
    return () => window.removeEventListener('authChange', checkAuth);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('accesslingua_session');
    setIsAuthenticated(false);
    navigate('/');
    // Déclenche l'événement pour mettre à jour les autres composants
    window.dispatchEvent(new Event('authChange'));
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">AL</div>
              <span className="text-2xl font-bold text-primary tracking-tight hidden md:block">AccessLingua</span>
            </Link>
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              <Link to="/vision" className="text-dark hover:text-primary px-3 py-2 text-sm font-medium">Vision Afrique</Link>
              <Link to="/tarification" className="text-dark hover:text-primary px-3 py-2 text-sm font-medium">Tarifs Sociaux</Link>
              <Link to="/formateur" className="text-dark hover:text-primary px-3 py-2 text-sm font-medium">Formateurs</Link>
              <Link to="/etudiant" className="text-dark hover:text-primary px-3 py-2 text-sm font-medium">Espace Étudiant</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {!isAuthenticated ? (
              <Link 
                to="/" 
                onClick={(e) => {
                   if (location.pathname === '/') {
                     e.preventDefault();
                     const el = document.getElementById('gateway');
                     el?.scrollIntoView({ behavior: 'smooth' });
                   }
                }}
                className="bg-primary hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-200"
              >
                S'inscrire gratuitement
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex flex-col text-right hidden lg:block">
                   <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Connecté</span>
                   <span className="text-xs font-bold text-dark">Mon Espace Pro</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-500 px-4 py-2 rounded-xl text-xs font-bold transition-all border border-slate-200"
                >
                  Déconnexion
                </button>
              </div>
            )}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/vision" className="block text-dark hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">Vision Afrique</Link>
          <Link to="/tarification" className="block text-dark hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">Tarifs Sociaux</Link>
          <Link to="/formateur" className="block text-dark hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">Formateurs</Link>
          <Link to="/etudiant" className="block text-dark hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">Espace Étudiant</Link>
          
          {!isAuthenticated ? (
            <Link 
              to="/" 
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => {
                  const el = document.getElementById('gateway');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="block bg-primary text-white text-center px-3 py-2 rounded-md text-base font-bold mt-4"
            >
              S'inscrire gratuitement
            </Link>
          ) : (
            <button 
              onClick={() => { handleLogout(); setIsOpen(false); }}
              className="w-full bg-red-50 text-red-500 text-center px-3 py-2 rounded-md text-base font-bold mt-4 border border-red-100"
            >
              Se Déconnecter
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
