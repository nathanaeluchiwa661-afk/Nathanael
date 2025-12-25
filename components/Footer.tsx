
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, ICONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">AL</div>
            <span className="text-2xl font-bold tracking-tight">AccessLingua</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            SASU au capital social engagé pour l'éducation. Excellence linguistique au service de l'émergence sahélienne.
          </p>
          <div className="flex gap-4">
             <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
               <ICONS.Facebook />
             </a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
               <ICONS.Linkedin />
             </a>
             <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
               <ICONS.Tiktok />
             </a>
             <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer text-white">
               <ICONS.Whatsapp />
             </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary">Explorer</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/vision" className="hover:text-white transition-colors">Notre Vision AES</Link></li>
            <li><Link to="/tarification" className="hover:text-white transition-colors">Tarifs Sociaux</Link></li>
            <li><Link to="/formateur" className="hover:text-white transition-colors">Devenir Formateur</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Actualités Impact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary">Contact Direct</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex flex-col">
              <span className="text-white font-bold mb-1">Siège Social</span>
              <span>{CONTACT_INFO.location}</span>
            </li>
            <li className="flex flex-col">
              <span className="text-white font-bold mb-1">WhatsApp</span>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="flex items-center gap-2 hover:text-green-400 transition-colors">
                <ICONS.Whatsapp />
                {CONTACT_INFO.whatsappDisplay}
              </a>
            </li>
            <li className="flex flex-col">
              <span className="text-white font-bold mb-1">Téléphone Mobile</span>
              <a href={`tel:${CONTACT_INFO.mobile.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <ICONS.Phone />
                {CONTACT_INFO.mobile}
              </a>
            </li>
            <li className="flex flex-col">
              <span className="text-white font-bold mb-1">Email</span>
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary">Localisation</h4>
          <p className="text-sm text-gray-400 mb-4">Burkina Faso, Bobo-Dioulasso.</p>
          <div className="w-full h-32 bg-white/5 rounded-xl border border-white/10 overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
               <ICONS.Globe />
            </div>
            <div className="absolute bottom-2 left-2 bg-dark/80 px-2 py-1 rounded text-[10px]">Bobo-Dioulasso, BF</div>
          </div>
          <p className="text-[10px] text-gray-500 mt-4">Retrouvez-nous au cœur du Sahel.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2026 AccessLingua SASU. "Excellence Linguistique - Impact Social".</p>
        <div className="flex gap-6">
          <Link to="/mentions-legales" className="hover:text-white cursor-pointer">Mentions Légales</Link>
          <Link to="/confidentialite" className="hover:text-white cursor-pointer">Confidentialité</Link>
          <span className="hover:text-white cursor-pointer">AES Compliance</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
