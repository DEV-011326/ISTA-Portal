import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/ISTA-Portal/', label: 'Accueil' },
    { path: '/ISTA-Portal/about', label: 'À propos' },
    { path: '/ISTA-Portal/programs', label: 'Formations' },
    { path: '/ISTA-Portal/contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/ISTA-Portal/" className="nav-logo">
          ISTA Nador
        </Link>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
