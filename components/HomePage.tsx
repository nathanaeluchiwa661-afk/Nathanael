
import React, { useEffect, useState } from 'react';
import { ICONS, CONTACT_INFO } from '../constants';
import { Link } from 'react-router-dom';
import GatewayDashboard from './GatewayDashboard';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCert, setActiveCert] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const certInterval = setInterval(() => {
      setActiveCert((prev) => (prev + 1) % 8);
    }, 3750);
    return () => clearInterval(certInterval);
  }, []);

  const services = [
    { title: "Formation Anglais Pro", icon: <ICONS.Diploma />, desc: "Maîtrisez le jargon professionnel et technique avec nos experts.", color: "bg-blue-50 text-blue-600" },
    { title: "Pré-incubation", icon: <ICONS.Growth />, desc: "Accélérez votre carrière de formateur dès le début du programme.", color: "bg-green-50 text-green-600" },
    { title: "Certification Africaine", icon: <ICONS.Shield />, desc: "Diplômes reconnus dans toute l'Afrique et à l'international.", color: "bg-orange-50 text-orange-600" },
    { title: "Tarification Sociale", icon: <ICONS.Scale />, desc: "Un modèle solidaire unique adapté aux réalités du continent.", color: "bg-purple-50 text-purple-600" },
    { title: "Formateurs Certifiés", icon: <ICONS.Star />, desc: "Apprenez des meilleurs experts anglophones certifiés AccessLingua.", color: "bg-red-50 text-red-600" },
    { title: "Expansion Continentale", icon: <ICONS.Globe />, desc: "Connecter les talents d'Afrique par la force de la langue anglaise.", color: "bg-cyan-50 text-cyan-600" },
  ];

  const certifications = [
    "Certification Panafricaine",
    "Standard Régional Union Africaine",
    "International Business English Label",
    "Reconnaissance Globale TOEIC/TOEFL",
    "Cambridge Professional Excellence",
    "Partenaire Éducatif International",
    "Sceau du Leadership Africain",
    "Label Qualité Afrique Subsaharienne"
  ];

  const paymentLogos = [
    { component: <ICONS.OrangeMoney />, label: "Orange Money" },
    { component: <ICONS.MoovMoney />, label: "Moov Money" },
    { component: <ICONS.Visa />, label: "Visa" },
    { component: <ICONS.PayPal />, label: "PayPal" },
    { component: <ICONS.Ligidicash />, label: "Ligidicash" },
  ];

  return (
    <div className="overflow-hidden relative text-dark">
      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <ICONS.Whatsapp />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">Contact WhatsApp</span>
      </a>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Collaboration AccessLingua Afrique" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-transparent"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 text-white transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-center md:text-left">
            Maîtrisez l'anglais,<br />
            <span className="text-primary">Ouvrez les portes de l'Afrique</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300 text-center md:text-left">
            Formation professionnelle certifiante pour tout le continent africain. <br/>
            Siège social : {CONTACT_INFO.location}.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link to="/etudiant" className="bg-secondary hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-emerald-900/20">
              Commencer gratuitement
            </Link>
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center gap-2">
              <ICONS.Whatsapp /> WhatsApp Direct
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4 uppercase tracking-tight text-center">Impact Continental</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group p-10 rounded-[2.5rem] border border-gray-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-dark">{service.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">{service.desc}</p>
                <Link to="/etudiant" className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  S'inscrire Maintenant
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
             <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">Méthodes de Paiement Africaines et Globales</h3>
             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
               {paymentLogos.map((logo, i) => (
                 <div key={i} className="flex flex-col items-center gap-4 group transition-all duration-300">
                   <div className="group-hover:scale-110 transition-all duration-500 flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 min-w-[120px] h-20 overflow-hidden">
                     {logo.component}
                   </div>
                   <span className="text-[10px] font-black text-slate-400 group-hover:text-primary tracking-widest uppercase transition-colors">
                     {logo.label}
                   </span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Certification Showcase */}
      <section className="py-24 bg-dark text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
           <ICONS.Shield />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
          <h3 className="text-xl font-bold text-primary uppercase tracking-[0.3em] mb-8">Reconnaissance Africaine</h3>
          <div className="h-28 flex items-center justify-center overflow-hidden relative">
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                className={`absolute transition-all duration-1000 flex items-center gap-6 text-2xl md:text-4xl font-black ${activeCert === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                <div className="text-secondary scale-150 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"><ICONS.Shield /></div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500 italic">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex overflow-x-hidden opacity-10">
          <div className="py-6 animate-marquee whitespace-nowrap flex items-center gap-32">
            {certifications.concat(certifications).map((cert, i) => (
              <span key={i} className="text-5xl font-black uppercase tracking-tighter">{cert}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact Teaser */}
      <section className="py-40 bg-slate-950 overflow-hidden relative border-t border-slate-900">
        <div className="absolute top-0 right-0 opacity-5 text-primary scale-150">
          <ICONS.Globe />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-white text-4xl md:text-7xl font-black mb-12 italic tracking-tight leading-[1.1]">
            "Excellence Linguistique <br/>
            <span className="text-slate-600 block my-2">Impact Social Africain</span>
            <span className="text-primary">Leadership Continental"</span>
          </h2>
          <div className="w-32 h-1.5 bg-accent mx-auto mb-16 rounded-full"></div>
          <p className="text-slate-400 text-xl md:text-2xl max-w-4xl mx-auto mb-24 leading-relaxed font-medium">
            AccessLingua n'est pas qu'une école, c'est l'architecte de l'avenir de l'Afrique. 
            Nous bâtissons les ponts de communication indispensables à l'émergence de notre continent.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-left">
            {[
              { val: "54", label: "Pays d'Afrique" },
              { val: "2036", label: "Vision Horizon" },
              { val: "95%", label: "Réussite Certifiée" },
              { val: "10%", label: "Fonds Solidaire" }
            ].map((stat, i) => (
              <div key={i} className="text-white p-10 bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-[3rem] hover:border-primary transition-all duration-500 group shadow-2xl text-center">
                <p className="text-4xl md:text-6xl font-black mb-4 text-primary group-hover:scale-110 transition-transform">{stat.val}</p>
                <div className="w-8 h-1 bg-slate-800 mx-auto mb-4 group-hover:w-full transition-all"></div>
                <p className="text-slate-500 uppercase tracking-[0.2em] text-[10px] font-black">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Gateway Dashboard */}
      <GatewayDashboard />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
