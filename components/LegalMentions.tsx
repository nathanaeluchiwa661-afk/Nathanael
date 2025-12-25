
import React from 'react';

const LegalMentions: React.FC = () => {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-black mb-8 border-b-4 border-primary pb-4 inline-block">Mentions Légales</h1>
        
        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">1. Éditeur du Site</h2>
            <p>
              Le site <strong>AccessLingua</strong> est édité par la société <strong>AccessLingua SASU</strong>, 
              Société par Actions Simplifiée à Associé Unique au capital social engagé pour l'éducation africaine.
            </p>
            <ul className="mt-4 space-y-2">
              <li><strong>Siège social :</strong> Bobo-Dioulasso, Burkina Faso</li>
              <li><strong>Portée :</strong> Panafricaine</li>
              <li><strong>Email :</strong> acesslingua@gmail.com</li>
              <li><strong>WhatsApp :</strong> +226 66 84 46 99</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">2. Hébergement</h2>
            <p>
              Conformément à notre vision de souveraineté numérique continentale, le site est hébergé sur des serveurs localisés au 
              <strong> Burkina Faso</strong> avec des systèmes de sauvegarde sécurisés pour garantir la disponibilité pour tous nos étudiants d'Afrique.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">3. Propriété Intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation internationale sur le droit d'auteur. 
              "Excellence Linguistique - Impact Social - Leadership Africain" est une marque déposée de AccessLingua SASU.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">4. Droit Applicable</h2>
            <p>
              Tout litige en relation avec l'utilisation du site AccessLingua est soumis au droit burkinabè, en harmonie avec les conventions OHADA applicables en Afrique.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalMentions;
