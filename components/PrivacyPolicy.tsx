
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-24 bg-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
        <h1 className="text-4xl font-black mb-8 text-primary">Politique de Confidentialité</h1>
        
        <div className="space-y-8 text-gray-600 leading-relaxed">
          <p className="font-medium text-lg text-dark">
            Chez AccessLingua, nous considérons la protection de vos données comme le socle de la confiance nécessaire à votre 
            apprentissage sur tout le continent africain.
          </p>

          <section>
            <h2 className="text-xl font-bold text-dark mb-3">1. Collecte des données</h2>
            <p>Nous collectons les informations suivantes pour garantir un service panafricain de qualité :</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Identité et Pays de résidence en Afrique</li>
              <li>Coordonnées professionnelles</li>
              <li>Données de progression pédagogique</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-3">2. Utilisation des données</h2>
            <p>Vos données sont exclusivement utilisées pour l'édition de vos certifications professionnelles africaines et la gestion de votre parcours.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-dark mb-3">3. Sécurité Continentale</h2>
            <p>
              Vos données sont chiffrées et conservées dans le respect des normes de protection des données personnelles en vigueur dans les pays d'Afrique où nous opérons.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
