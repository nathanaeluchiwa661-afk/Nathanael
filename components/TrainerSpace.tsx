
import React, { useState, useEffect } from 'react';
import { ICONS } from '../constants';
import { useNavigate } from 'react-router-dom';

const TrainerSpace: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem('accesslingua_session');
    setIsAuthenticated(!!session);
  }, []);

  const scrollToAuth = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('gateway');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (isAuthenticated === null) return null;

  return (
    <div className="py-24 bg-light min-h-screen px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase mb-4 block">Opportunité Formateur</span>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Devenez un Leader <br />
              <span className="text-accent">AccessLingua</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Nous recherchons des passionnés de la langue anglaise pour former la prochaine génération de leaders africains. 
              Bénéficiez d'un mois de <strong>pré-incubation gratuite</strong> pour maîtriser notre méthode pédagogique exclusive.
            </p>
            
            {!isAuthenticated ? (
              <div className="bg-white p-8 rounded-3xl border-2 border-dashed border-gray-200">
                <p className="text-dark font-bold mb-4">Connectez-vous pour postuler :</p>
                <button 
                  onClick={scrollToAuth}
                  className="bg-dark hover:bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl"
                >
                  S'identifier avant de postuler
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-4">
                <button className="bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl">
                  Remplir le Formulaire Candidat
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/id/370/800/600" alt="Trainer" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-xl italic">"Transmettre ma passion tout en contribuant à l'essor de mon continent est ma plus grande fierté."</p>
                <p className="text-accent text-sm mt-2">— Sarah D., Formatrice Senior</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Liberté Totale", desc: "Travaillez en ligne ou en présentiel selon votre planning.", icon: <ICONS.Globe /> },
            { title: "Pré-incubation", desc: "1 mois de formation intensive offerte sur nos outils LMS.", icon: <ICONS.Growth /> },
            { title: "Impact Réel", desc: "Participez directement au développement économique de l'Afrique.", icon: <ICONS.Shield /> }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerSpace;
