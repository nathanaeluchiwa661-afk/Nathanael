
import React, { useState, useMemo, useEffect } from 'react';
import { ICONS } from '../constants';
import { Link, useNavigate } from 'react-router-dom';

const AFRICAN_COUNTRIES = [
  "Afrique du Sud", "Algérie", "Angola", "Bénin", "Botswana", "Burkina Faso", 
  "Burundi", "Cameroun", "Cap-Vert", "République centrafricaine", "Comores", 
  "Congo-Brazzaville", "Congo-Kinshasa", "Côte d'Ivoire", "Djibouti", "Égypte", 
  "Érythrée", "Eswatini", "Éthiopie", "Gabon", "Gambie", "Ghana", "Guinée", 
  "Guinée-Bissau", "Guinée équatoriale", "Kenya", "Lesotho", "Liberia", "Libye", 
  "Madagascar", "Malawi", "Mali", "Maroc", "Maurice", "Mauritanie", "Mozambique", 
  "Namibie", "Niger", "Nigeria", "Ouganda", "Rwanda", "Sao Tomé-et-Principe", 
  "Sénégal", "Seychelles", "Sierra Leone", "Somalie", "Soudan", "Soudan du Sud", 
  "Tanzanie", "Tchad", "Togo", "Tunisie", "Zambie", "Zimbabwe"
];

const GatewayDashboard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState<'login' | 'register'>('register');
  const [countrySearch, setCountrySearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Burkina Faso');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isAlreadyAuth, setIsAlreadyAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem('accesslingua_session');
    if (session) {
      setIsAlreadyAuth(true);
    }
  }, []);

  const filteredCountries = useMemo(() => {
    return AFRICAN_COUNTRIES.filter(c => 
      c.toLowerCase().includes(countrySearch.toLowerCase())
    );
  }, [countrySearch]);

  const handleAuthSuccess = (userData: any) => {
    setIsAuthenticating(true);
    
    localStorage.setItem('accesslingua_session', JSON.stringify({
      ...userData,
      timestamp: new Date().getTime(),
      status: 'authenticated'
    }));

    // Simulation d'une redirection automatique "intelligente"
    setTimeout(() => {
      setIsAuthenticating(false);
      navigate('/etudiant');
      window.scrollTo(0, 0);
      // Déclenche un événement personnalisé pour notifier les autres composants
      window.dispatchEvent(new Event('authChange'));
    }, 1200);
  };

  const handleSocialAction = (provider: string) => {
    handleAuthSuccess({ method: provider, name: 'Utilisateur ' + provider });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (isAlreadyAuth) {
    return (
      <section id="gateway" className="py-24 bg-dark relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-16 rounded-[4rem] shadow-2xl">
            <div className="w-24 h-24 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-black text-white mb-4">Bon retour parmi nous !</h2>
            <p className="text-gray-400 text-xl mb-10">Votre session est active. Accédez instantanément à toutes nos ressources.</p>
            <button 
              onClick={() => navigate('/etudiant')}
              className="bg-primary hover:bg-blue-600 text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-2xl shadow-blue-500/20 text-xl"
            >
              Accéder à mon Tableau de Bord
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gateway" className="py-24 bg-dark relative overflow-hidden">
      {/* Overlay de redirection automatique */}
      {isAuthenticating && (
        <div className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center text-center p-6">
          <div className="w-24 h-24 border-4 border-primary border-t-transparent rounded-full animate-spin mb-8"></div>
          <h2 className="text-3xl font-black text-white mb-2 italic">Authentification réussie...</h2>
          <p className="text-gray-400 animate-pulse">Redirection automatique vers votre espace de formation africain.</p>
        </div>
      )}

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-secondary blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Embarquement AccessLingua</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Une seule étape pour débloquer tout le potentiel de votre carrière en Afrique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Social Access Panel */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-sm">01</span>
              Accès Rapide
            </h3>
            
            <div className="space-y-4 flex-grow">
              <button 
                onClick={() => handleSocialAction('Google')}
                className="w-full bg-white text-dark font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-gray-100 transition-all transform hover:scale-[1.02] shadow-xl"
              >
                <ICONS.Google /> Continuer avec Google / Gmail
              </button>
              
              <button 
                onClick={() => handleSocialAction('Apple')}
                className="w-full bg-dark text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-4 border border-white/20 hover:bg-black transition-all transform hover:scale-[1.02] shadow-xl"
              >
                <ICONS.Apple /> Continuer avec Apple ID
              </button>
            </div>

            <div className="mt-12 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
              <p className="text-xs text-gray-400 italic">
                Connexion sécurisée aux standards de sécurité panafricains.
              </p>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 relative">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold text-dark flex items-center gap-3">
                <span className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-sm text-white">02</span>
                {mode === 'register' ? 'Inscription Directe' : 'Connexion'}
              </h3>
              <div className="flex gap-2">
                {[1, 2].map((s) => (
                  <div key={s} className={`h-1.5 w-8 rounded-full transition-all ${step >= s ? 'bg-secondary' : 'bg-gray-100'}`}></div>
                ))}
              </div>
            </div>

            {step === 1 ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Prénom</label>
                    <input type="text" className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary outline-none transition-all" placeholder="Amadou" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Nom</label>
                    <input type="text" className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary outline-none transition-all" placeholder="Konaté" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Statut Social</label>
                  <select className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary outline-none transition-all">
                    <option>Étudiant / Elève</option>
                    <option>Professionnel / Salarié</option>
                    <option>Entrepreneur / Indépendant</option>
                    <option>En recherche d'emploi</option>
                  </select>
                </div>
                <button 
                  onClick={nextStep}
                  className="w-full bg-dark text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Suivant <span>→</span>
                </button>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Professionnel</label>
                  <input type="email" className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary outline-none transition-all" placeholder="votre-email@pro-access.africa" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">WhatsApp / Téléphone</label>
                    <input type="tel" className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary outline-none transition-all" placeholder="+226 ..." />
                  </div>
                  
                  <div className="relative">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Sélecteur de Pays</label>
                    <button 
                      type="button"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 text-left flex justify-between items-center focus:ring-2 focus:ring-secondary outline-none"
                    >
                      <span className="truncate">{selectedCountry}</span>
                      <svg className={`w-4 h-4 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isCountryDropdownOpen && (
                      <div className="absolute z-50 mt-2 w-full bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-3 border-b border-gray-50">
                          <input 
                            type="text" 
                            className="w-full bg-gray-50 rounded-lg px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-secondary"
                            placeholder="Chercher en Afrique..."
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                          <button 
                            type="button"
                            onClick={() => { setSelectedCountry('International (Hors Afrique)'); setIsCountryDropdownOpen(false); }}
                            className="w-full text-left px-4 py-3 text-sm font-bold text-primary hover:bg-primary/10 border-b border-gray-50"
                          >
                            🌍 International (Hors Afrique)
                          </button>
                          {filteredCountries.map(country => (
                            <button
                              key={country}
                              type="button"
                              onClick={() => { setSelectedCountry(country); setIsCountryDropdownOpen(false); }}
                              className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 text-dark transition-colors border-b border-gray-50 last:border-0"
                            >
                              {country}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-start gap-2 pt-2">
                  <input type="checkbox" id="check-legal-gateway-final" required className="mt-1" />
                  <label htmlFor="check-legal-gateway-final" className="text-[10px] text-gray-500 leading-tight">
                    J'accepte d'ouvrir mon accès complet aux fonctionnalités d'apprentissage AccessLingua Afrique.
                  </label>
                </div>

                <div className="flex gap-4">
                  <button onClick={prevStep} className="px-6 py-4 rounded-xl border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 transition-all">Retour</button>
                  <button 
                    onClick={() => handleAuthSuccess({ country: selectedCountry })} 
                    className="flex-grow bg-secondary text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-200"
                  >
                    Valider & Entrer
                  </button>
                </div>
              </div>
            )}
            
            <p className="mt-8 text-center text-sm text-gray-400">
              Déjà membre ? <button onClick={() => setMode('login')} className="text-primary font-bold hover:underline">Se connecter</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GatewayDashboard;
