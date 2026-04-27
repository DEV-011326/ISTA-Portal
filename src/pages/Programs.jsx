import React, { useState } from 'react';
import Card from '../components/Card';

const programsData = [
  // --- Technicien Spécialisé (Bac) ---
  {
    title: 'Développement Digital (TS)',
    category: 'Digital',
    description: 'Développement Web, Mobile, et applications desktop. Maîtrise des langages modernes (JS, Python, Java).',
    duration: '2 ans',
    icon: '💻'
  },
  {
    title: 'Infrastructure Digitale (TS)',
    category: 'Digital',
    description: 'Administration réseaux, serveurs, sécurité informatique et solutions Cloud.',
    duration: '2 ans',
    icon: '🌐'
  },
  {
    title: 'Gestion des Entreprises (TS)',
    category: 'Gestion',
    description: 'Management, marketing, comptabilité et gestion administrative des organisations.',
    duration: '2 ans',
    icon: '🏢'
  },
  {
    title: 'Comptabilité et Finance (TS)',
    category: 'Gestion',
    description: 'Gestion comptable approfondie, fiscalité, et analyse financière des entreprises.',
    duration: '2 ans',
    icon: '📊'
  },
  {
    title: 'Génie Civil (TS)',
    category: 'BTP',
    description: 'Conception technique, calcul de structures et suivi des travaux de bâtiment.',
    duration: '2 ans',
    icon: '🏗️'
  },
  {
    title: 'Electromécanique (TS)',
    category: 'Industrie',
    description: 'Maintenance des systèmes automatisés, électricité industrielle et mécanique.',
    duration: '2 ans',
    icon: '⚙️'
  },

  // --- Technicien (Niveau Bac) ---
  {
    title: 'Comptable d’Entreprises (T)',
    category: 'Gestion',
    description: 'Tenue de comptabilité, gestion de la paie et déclarations fiscales.',
    duration: '2 ans',
    icon: '📖'
  },
  {
    title: 'Maintenance Automobile (T)',
    category: 'Transport',
    description: 'Diagnostic et réparation des systèmes mécaniques et électroniques des voitures.',
    duration: '2 ans',
    icon: '🚗'
  },
  {
    title: 'Dessinateur de Bâtiment (T)',
    category: 'BTP',
    description: 'Élaboration de plans architecturaux et dessins techniques de construction.',
    duration: '2 ans',
    icon: '📏'
  },

  // --- Qualification (9ème Fondamental) ---
  {
    title: 'Électricité de Bâtiment (Q)',
    category: 'BTP',
    description: 'Installations électriques domestiques et maintenance de base.',
    duration: '1-2 ans',
    icon: '⚡'
  },
  {
    title: 'Menuiserie Aluminium (Q)',
    category: 'Artisanat',
    description: 'Fabrication et montage des structures en aluminium et vitrerie.',
    duration: '1 an',
    icon: '🪟'
  }
];

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // منطق البحث: كنقارنو داكشي لي دخل user مع العنوان أو الوصف
  const filteredPrograms = programsData.filter((program) =>
    program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    program.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="programs">
      <div className="programs-container">
        <h1 className="page-title">Nos Formations à ISTA Nador</h1>
        <p className="page-description">
          Explorez nos programmes diversifiés adaptés aux besoins du marché de l'emploi.
        </p>

        {/* خانة البحث */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Rechercher une filière (ex: Digital, TS, Électricité...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="programs-grid">
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map((program, index) => (
              <Card
                key={index}
                title={program.title}
                description={program.description}
                duration={program.duration}
                icon={program.icon}
              />
            ))
          ) : (
            <p className="no-results">Aucune formation trouvée pour "{searchTerm}"</p>
          )}
        </div>

        <div className="programs-info">
          <h2>Pourquoi choisir ISTA Nador ?</h2>
          <ul>
            <li>✅ Formation pratique (70% de pratique)</li>
            <li>✅ Diplôme reconnu par l'État</li>
            <li>✅ Partenariats avec les entreprises locales</li>
            <li>✅ Ateliers équipés de technologies modernes</li>
          </ul>
        </div>
      </div>

      {/* CSS بسيط باش تقاد خانة البحث (ممكن تزيدو فـ CSS file ديالك) */}
      <style jsx>{`
        .search-box {
          margin: 20px 0 40px;
          text-align: center;
        }
        .search-input {
          width: 100%;
          max-width: 500px;
          padding: 12px 20px;
          border-radius: 25px;
          border: 2px solid #ddd;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s;
        }
        .search-input:focus {
          border-color: #007bff;
        }
        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          font-size: 1.2rem;
          color: #666;
        }
      `}</style>
    </section>
  );
};

export default Programs;