
import React, { useState } from 'react';

const PricingSimulator: React.FC = () => {
  const [level, setLevel] = useState(1);
  
  const levels = [
    {
      title: "Solidaire",
      subtitle: "Pour étudiants et précaires",
      price: "15,000",
      features: ["Cours en ligne complets", "Support par email", "Certification standard"],
      color: "border-green-500 bg-green-50",
      tag: "Social"
    },
    {
      title: "Professionnel",
      subtitle: "Pour travailleurs et cadres",
      price: "45,000",
      features: ["Cours hybrides (Présentiel + Online)", "Tutorat hebdomadaire", "Certification Africaine Pro"],
      color: "border-primary bg-blue-50",
      tag: "Recommandé"
    },
    {
      title: "Premium / Impact",
      subtitle: "Pour entreprises et leaders",
      price: "120,000",
      features: ["Accès 24/7", "Coaching 1-to-1", "Soutien au fonds social africain", "Événements networking"],
      color: "border-accent bg-orange-50",
      tag: "Mécène"
    }
  ];

  return (
    <div className="py-24 bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simulateur de Tarification Sociale Afrique</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">AccessLingua ajuste ses tarifs selon les réalités socio-économiques du continent pour une inclusion totale.</p>
        </div>

        <div className="max-w-xl mx-auto mb-20 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <label className="block text-lg font-bold mb-6 text-center">Niveau d'accessibilité financière :</label>
          <input 
            type="range" 
            min="0" 
            max="2" 
            value={level} 
            onChange={(e) => setLevel(parseInt(e.target.value))}
            className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-4 text-sm font-bold text-gray-400">
            <span>MODESTE</span>
            <span>STANDARD</span>
            <span>PREMIUM</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((l, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-[2.5rem] border-2 transition-all duration-500 transform ${level === i ? `${l.color} scale-105 shadow-2xl` : 'bg-white border-transparent opacity-60 grayscale'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-dark">{l.title}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{l.subtitle}</p>
                </div>
                <span className={`px-4 py-1 rounded-full text-xs font-bold ${level === i ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                  {l.tag}
                </span>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-black text-primary">{l.price}</span>
                <span className="text-xl font-medium text-gray-400"> FCFA/Trimestre</span>
              </div>
              <ul className="space-y-4 mb-10">
                {l.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-4 rounded-2xl font-bold transition-all ${level === i ? 'bg-primary text-white hover:bg-blue-700 shadow-lg' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                disabled={level !== i}
              >
                Choisir ce plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSimulator;
