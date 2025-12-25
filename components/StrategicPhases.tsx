
import React, { useState } from 'react';

const StrategicPhases: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 'P1',
      title: "Phase 1 : Ancrage National",
      period: "2026 - 2028",
      color: "primary",
      focus: "Burkina Faso (Base d'excellence)",
      milestones: [
        "Ouverture du Hub Principal à Bobo-Dioulasso",
        "Certification de 15 formateurs experts",
        "Partenariats avec 5 universités africaines",
        "Lancement de la plateforme LMS optimisée"
      ],
      description: "Notre mission commence par consolider les bases de l'excellence au Burkina Faso avant de rayonner sur le continent."
    },
    {
      id: 'P2',
      title: "Phase 2 : Expansion Africaine",
      period: "2029 - 2031",
      color: "secondary",
      focus: "Rayonnement Continental (Hubs régionaux)",
      milestones: [
        "Inauguration des centres en Afrique de l'Ouest et Centrale",
        "Standardisation de la certification africaine",
        "Programme de mentorat transfrontalier",
        "5000+ étudiants certifiés sur le continent"
      ],
      description: "L'unité par la langue. Nous connectons les talents africains pour un leadership continental fort."
    },
    {
      id: 'P3',
      title: "Phase 3 : Leadership Mondial",
      period: "2032 - 2036",
      color: "accent",
      focus: "Afrique & International",
      milestones: [
        "Rayonnement vers toute l'Afrique francophone",
        "Fonds de Solidarité autonome pour le développement",
        "Sommet annuel de l'Education Africaine",
        "Référence mondiale pour l'anglais professionnel africain"
      ],
      description: "L'Afrique devient un exportateur de compétences linguistiques et de leadership visionnaire."
    }
  ];

  const bgColors: Record<string, string> = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent'
  };

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Notre trajectoire</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8">Vision Stratégique 2036</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Une croissance panafricaine pensée par étapes pour garantir un impact durable et une excellence académique.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
          {phases.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActivePhase(i)}
              className={`px-8 py-4 rounded-full font-bold transition-all border-2 flex items-center gap-3 ${activePhase === i ? 'bg-dark text-white border-dark' : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300'}`}
            >
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${activePhase === i ? 'bg-primary' : 'bg-gray-100'}`}>
                {i + 1}
              </span>
              {p.period}
            </button>
          ))}
        </div>

        {/* Phase Details Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className={`inline-block px-6 py-2 rounded-full text-white font-bold ${bgColors[phases[activePhase].color]}`}>
              {phases[activePhase].id}
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-dark">{phases[activePhase].title}</h3>
            <p className="text-xl text-gray-600 font-medium italic">" {phases[activePhase].focus} "</p>
            <p className="text-lg text-gray-500 leading-relaxed">{phases[activePhase].description}</p>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-dark uppercase tracking-wide">Objectifs Clés :</h4>
              {phases[activePhase].milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`mt-1.5 w-2 h-2 rounded-full ${bgColors[phases[activePhase].color]}`}></div>
                  <p className="text-gray-700 font-medium">{m}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square bg-gray-50 rounded-[4rem] flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl">
             <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full text-gray-900 fill-current">
                   <path d="M40 40 L160 30 L170 140 L30 150 Z" />
                </svg>
             </div>
             
             <div className="relative w-full h-full">
                {/* Points symbolisant l'Afrique */}
                <div className={`absolute top-1/2 left-1/2 transition-all duration-700 ${activePhase >= 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                   <div className="w-8 h-8 bg-primary rounded-full animate-ping absolute -translate-x-1/2 -translate-y-1/2"></div>
                   <div className="w-8 h-8 bg-primary rounded-full relative shadow-lg -translate-x-1/2 -translate-y-1/2"></div>
                   <span className="absolute top-6 -left-1/2 text-xs font-bold bg-white px-2 py-1 rounded shadow">Hub Africa</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicPhases;
