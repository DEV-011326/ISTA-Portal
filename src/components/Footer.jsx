const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ISTA Nador</h3>
          <p>Institut Spécialisé de Technologie Appliquée - Nador</p>
          <p>Partenaire de l'OFPPT</p>
        </div>
        <div className="footer-section">
          <h3>Liens Rapides</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/programs">Formations</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Nador, Maroc</p>
          <p>Tél: +212 536 XX XX XX</p>
          <p>Email: contact@istanador.ma</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ISTA Nador - OFPPT. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

