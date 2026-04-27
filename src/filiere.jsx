import { useState } from 'react';
import './index.css';

const filiereData = [
  {
    id: 1,
    name: "Développement Digital",
    icon: "💻",
    modules: [
      "Programmation Orientée Objet",
      "Développement Web Frontend",
      "Développement Web Backend",
      "Bases de Données",
      "Analyse et Conception",
      "Développement Mobile",
      "Cloud Computing",
      "DevOps"
    ]
  },
  {
    id: 2,
    name: "Infrastructure Digitale",
    icon: "🌐",
    modules: [
      "Administration Systèmes",
      "Administration Réseaux",
      "Sécurité Informatique",
      "Virtualisation et Cloud",
      "Services Réseaux Avancés",
      "Scripting et Automatisation",
      "Infrastructure Sans Fil",
      "IoT (Internet des Objets)"
    ]
  },
  {
    id: 3,
    name: "Gestion des Entreprises",
    icon: "📊",
    modules: [
      "Management des Organisations",
      "Comptabilité Générale",
      "Gestion de Projet",
      "Ressources Humaines",
      "Marketing",
      "Stratégie d'Entreprise"
    ]
  },
  {
    id: 4,
    name: "Commerce & Marketing",
    icon: "🛒",
    modules: [
      "Techniques de Vente",
      "Merchandising",
      "Distribution et Logistique",
      "Négociation Commerciale",
      "Marketing Digital",
      "Relation Client"
    ]
  },
  {
    id: 5,
    name: "Finance & Comptabilité",
    icon: "💰",
    modules: [
      "Comptabilité des Sociétés",
      "Fiscalité",
      "Contrôle de Gestion",
      "Finance d'Entreprise",
      "Audit et Diagnostic",
      "Bureautique Avancée"
    ]
  },
  {
    id: 6,
    name: "Réseaux Informatiques",
    icon: "🖧",
    modules: [
      "Architecture des Réseaux",
      "Systèmes d'Exploitation",
      "Sécurité des Réseaux",
      "IoT et Domotique",
      "Télécommunications",
      "Services Réseaux"
    ]
  },
  {
    id: 7,
    name: "Électromécanique",
    icon: "⚙️",
    modules: [
      "Maintenance des Machines",
      "Automatisme et Régulation",
      "Électrotechnique",
      "Mécanique Générale",
      "CNC et CFAO",
      "Hydraulique et Pneumatique"
    ]
  },
  {
    id: 8,
    name: "Froid & Climatisation",
    icon: "❄️",
    modules: [
      "Installation Frigorifique",
      "Climatisation",
      "Thermodynamique",
      "Maintenance Industrielle",
      "Régulation et Automatisme",
      "Ventilation et Chauffage"
    ]
  }
];

export default function Filiere() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="filiere-container">
      <h1 className="filiere-title">🎓 ISTA - OFPPT Filières</h1>
      <p className="filiere-subtitle">Cliquez sur une filière pour voir ses modules</p>
      <div className="filiere-grid">
        {filiereData.map((filiere) => (
          <div 
            key={filiere.id} 
            className={`filiere-card ${expandedId === filiere.id ? 'expanded' : ''}`}
            onClick={() => toggleExpand(filiere.id)}
          >
            <div className="filiere-header">
              <span className="filiere-icon">{filiere.icon}</span>
              <h2>{filiere.name}</h2>
              <span className="module-count">{filiere.modules.length} modules</span>
            </div>
            {expandedId === filiere.id && (
              <div className="modules-list">
                <ul>
                  {filiere.modules.map((module, index) => (
                    <li key={index}>📘 {module}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
