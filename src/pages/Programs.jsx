import Card from '../components/Card';

const programsData = [
  {
    title: 'Développement Informatique (TDI)',
    description: 'Formation complète en développement d\'applications web et mobiles, bases de données, et programmation orientée objet. Les stagiaires apprennent les langages modernes comme Java, Python, JavaScript et les frameworks populaires.',
    duration: '2 ans',
    icon: '💻'
  },
  {
    title: 'Réseaux Informatiques (TSR)',
    description: 'Spécialisation dans l\'administration des réseaux, la cybersécurité, et la gestion des infrastructures IT. Formation sur les équipements Cisco, la virtualisation, et la sécurité des systèmes d\'information.',
    duration: '2 ans',
    icon: '🌐'
  },
  {
    title: 'Gestion / Comptabilité',
    description: 'Programme destiné à former des techniciens en gestion et comptabilité. Maîtrise des outils de gestion, logiciels comptables, et techniques d\'analyse financière pour préparer les stagiaires aux métiers de l\'administration.',
    duration: '2 ans',
    icon: '📊'
  },
  {
    title: 'Électricité',
    description: 'Formation technique en électricité industrielle et bâtiment. Les stagiaires acquièrent des compétences en installation électrique, maintenance, automatismes, et énergies renouvelables.',
    duration: '2 ans',
    icon: '⚡'
  }
];

const Programs = () => {
  return (
    <section className="programs">
      <div className="programs-container">
        <h1 className="page-title">Nos Formations</h1>
        <p className="page-description">
          Découvrez nos programmes de formation professionnelle conçus pour répondre 
          aux besoins du marché du travail et garantir une insertion professionnelle réussie.
        </p>
        
        <div className="programs-grid">
          {programsData.map((program, index) => (
            <Card
              key={index}
              title={program.title}
              description={program.description}
              duration={program.duration}
              icon={program.icon}
            />
          ))}
        </div>
        
        <div className="programs-info">
          <h2>Pourquoi choisir nos formations ?</h2>
          <ul>
            <li>✅ Formation pratique et professionnalisante</li>
            <li>✅ Stages en entreprise intégrés au programme</li>
            <li>✅ Certification reconnue par l'OFPPT et le Ministère</li>
            <li>✅ Accompagnement à l'insertion professionnelle</li>
            <li>✅ Ateliers équipés de matériel moderne</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Programs;

