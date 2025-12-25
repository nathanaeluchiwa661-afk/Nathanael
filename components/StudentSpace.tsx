
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Fix: Import ICONS from constants
import { ICONS } from '../constants';

const StudentSpace: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const checkAuth = () => {
    const session = localStorage.getItem('accesslingua_session');
    setIsAuthenticated(!!session);
  };

  useEffect(() => {
    checkAuth();
    window.addEventListener('authChange', checkAuth);
    return () => window.removeEventListener('authChange', checkAuth);
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setIsRegistered(true);
      setLoading(false);
    }, 1500);
  };

  const scrollToAuth = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('gateway');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (isAuthenticated === null) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen py-24 bg-light flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-2xl p-12 text-center border border-gray-100">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-4xl font-black text-dark mb-6">Accès Verrouillé</h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Pour postuler ou accéder à nos modules de formation panafricains, une identification est obligatoire. 
            C'est simple, rapide et gratuit.
          </p>
          <button 
            onClick={scrollToAuth}
            className="bg-primary hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-xl shadow-blue-500/20 text-xl"
          >
            S'identifier / S'inscrire maintenant
          </button>
        </div>
      </div>
    );
  }

  if (!isRegistered) {
    return (
      <div className="min-h-screen py-24 bg-light flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-primary to-blue-700 p-8 text-center text-white">
            <h2 className="text-3xl font-bold">Inscription Directe</h2>
            <p className="mt-2 text-blue-100 opacity-80">Accès immédiat débloqué</p>
          </div>
          <form className="p-8 space-y-6" onSubmit={handleRegister}>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 italic">Module de formation débloqué :</label>
              <select className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-bold">
                <option>🚀 Anglais des Affaires (Session Ouverte)</option>
                <option>🌍 Communication Interculturelle</option>
                <option>📝 Grammaire & Structure Pro</option>
              </select>
            </div>
            
            <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20 flex gap-3">
              <svg className="w-6 h-6 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs text-secondary-700 font-medium">Votre statut d'utilisateur certifié vous permet d'accéder aux tests de niveau gratuits.</p>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
            >
              {loading ? 'Activation de vos droits...' : "Confirmer mon Inscription"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-light px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-black text-dark">Tableau de Bord Étudiant 🌍</h1>
            <p className="text-gray-500 font-medium">Félicitations ! Vous avez désormais accès à toutes les fonctionnalités.</p>
          </div>
          <div className="flex gap-3">
            <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
               <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
               <span className="text-sm font-bold">Certificat en préparation</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 space-y-8">
             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                 <ICONS.Diploma /> Mes Cours Actifs
               </h3>
               <div className="p-8 border-2 border-dashed border-gray-100 rounded-3xl text-center">
                 <p className="text-gray-400 mb-6 italic">Préparez-vous ! Votre première session interactive commence bientôt.</p>
                 <button className="bg-slate-100 text-slate-500 font-bold px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition-all">
                    Lancer le Guide d'Accueil
                 </button>
               </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-200">
                  <h4 className="text-xl font-bold mb-2">Prochaine Étape</h4>
                  <p className="opacity-80 text-sm mb-6 leading-relaxed">Passez le test de niveau pour personnaliser votre parcours.</p>
                  <button className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">Débuter le test</button>
                </div>
                <div className="bg-secondary p-8 rounded-[2.5rem] text-white shadow-xl shadow-emerald-200">
                  <h4 className="text-xl font-bold mb-2">Ressources Libres</h4>
                  <p className="opacity-80 text-sm mb-6 leading-relaxed">Accédez à notre bibliothèque de PDFs et audios panafricains.</p>
                  <button className="w-full bg-white text-secondary font-bold py-3 rounded-xl hover:bg-emerald-50 transition-colors">Parcourir</button>
                </div>
             </div>
           </div>

           <div className="space-y-8">
             <div className="bg-dark text-white p-10 rounded-[2.5rem] shadow-2xl">
               <h3 className="text-xl font-bold mb-6">Mon Profil Pro</h3>
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center font-bold text-2xl">AL</div>
                 <div>
                   <p className="font-bold">Utilisateur Certifié</p>
                   <p className="text-xs text-primary font-bold uppercase tracking-widest">Niveau Initiale</p>
                 </div>
               </div>
               <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-gray-500 uppercase font-black mb-1">Impact Social</p>
                    <p className="text-sm font-medium">Bénéficiaire du tarif solidaire</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-gray-500 uppercase font-black mb-1">Statut Certification</p>
                    <p className="text-sm font-medium">0/100 Points XP</p>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSpace;
