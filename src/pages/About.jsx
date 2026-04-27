const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1 className="page-title">À propos d'ISTA Nador</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Qu'est-ce que l'ISTA Nador ?</h2>
            <p>
              L'<strong>Institut Spécialisé de Technologie Appliquée (ISTA) de Nador</strong> est un établissement 
              d'enseignement supérieur professionnel situé dans la ville de Nador, au nord-est du Maroc. 
              Il fait partie du réseau des instituts spécialisés gérés par l'<strong>OFPPT</strong> 
              (Office de la Formation Professionnelle et de la Promotion du Travail).
            </p>
            <p>
              Notre mission est de former des techniciens spécialisés hautement qualifiés, capables de 
              répondre aux besoins du marché du travail marocain et international. Nous proposons des 
              formations pratiques et théoriques dans des domaines variés tels que l'informatique, 
              les réseaux, la gestion, et l'électricité.
            </p>
          </div>
          
          <div className="about-mission">
            <h2>Notre Mission</h2>
            <div className="mission-cards">
              <div className="mission-card">
                <h3>Formation Professionnelle</h3>
                <p>Offrir des formations de qualité répondant aux standards internationaux et aux besoins du marché.</p>
              </div>
              <div className="mission-card">
                <h3>Préparation à l'Emploi</h3>
                <p>Accompagner nos stagiaires vers une insertion professionnelle réussie grâce à des stages et partenariats.</p>
              </div>
              <div className="mission-card">
                <h3>Innovation</h3>
                <p>Intégrer les nouvelles technologies et méthodes pédagogiques dans nos programmes d'enseignement.</p>
              </div>
            </div>
          </div>

          <div className="about-ofppt">
            <h2>Partenaire OFPPT</h2>
            <p>
              L'OFPPT est le plus grand opérateur public de formation professionnelle au Maroc et en Afrique. 
              En tant qu'établissement affilié, l'ISTA Nador bénéficie du soutien et de l'expertise de l'OFPPT 
              pour développer des programmes de formation adaptés aux exigences des entreprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

