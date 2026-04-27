import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">ISTA Nador Portal</h1>
        <p className="hero-description">
          Votre passerelle vers l'excellence en formation professionnelle. 
          L'Institut Spécialisé de Technologie Appliquée de Nador, affilié à l'OFPPT, 
          vous offre des formations de qualité dans divers domaines techniques et professionnels.
        </p>
        <div className="hero-buttons">
          <Link to="/programs" className="btn btn-primary">
            Voir les Formations
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contactez-nous
          </Link>
        </div>
      </div>
      <div className="hero-features">
        <div className="feature">
          <h3>+10</h3>
          <p>Programmes de Formation</p>
        </div>
        <div className="feature">
          <h3>500+</h3>
          <p>Étudiants Formés</p>
        </div>
        <div className="feature">
          <h3>95%</h3>
          <p>Taux d'Insertion</p>
        </div>
      </div>
    </section>
  );
};

export default Home;

