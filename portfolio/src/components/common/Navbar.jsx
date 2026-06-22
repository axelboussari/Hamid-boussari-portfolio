import { useTheme } from '../../hooks/useTheme';
import { useActiveSection } from '../../hooks/useActiveSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { personalInfo, navItems } from '../../data/portfolioData';
import './Navbar.css';

const sectionIds = navItems.map(item => item.id);

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid px-4">
        <a className="navbar-brand" href="#hero">
          {personalInfo.name.split(' ')[0]}
          <span className="brand-accent"> {personalInfo.name.split(' ').slice(1).join(' ')}</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navItems.map(({ id, label }) => (
              <li key={id} className="nav-item">
                <a
                  className={`nav-link ${activeSection === id ? 'active' : ''}`}
                  href={`#${id}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-icons d-flex align-items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="nav-icon"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <i className={`bi bi-${theme === 'dark' ? 'sun' : 'moon-stars'}`}></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
