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
            <li><a href="/ISTA-Portal/">Accueil</a></li>
            <li><a href="/ISTA-Portal/about">À propos</a></li>
            <li><a href="/ISTA-Portal/programs">Formations</a></li>
            <li><a href="/ISTA-Portal/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Nador, Maroc</p>
          <p>Tél: +212 536 XX XX XX</p>
          <p>Email: contact@istanador.ma</p>
        </div>
        <div className="footer-section">
          <h3>Developers</h3>
          <p>Abdelouahid Amezian</p>
          <p>Jamal Alaoui</p>
          <h3>Email</h3>
          <p>abdelouahidamezian@gmail.com</p>
          <p>jamalalaoui@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 ISTA Nador - OFPPT. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

