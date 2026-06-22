import { personalInfo } from '../../data/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Hero.css';

function Hero() {
  const textRef = useScrollAnimation('fade-in-left');
  const imgRef = useScrollAnimation('fade-in-right');

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 hero-text" ref={textRef}>
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">{personalInfo.name}</h1>
            <h2 className="hero-role">{personalInfo.role}</h2>
            <p className="hero-description">{personalInfo.description}</p>
            <div className="hero-actions">
              <a
                href={personalInfo.cvPath}
                download
                className="btn btn-primary-custom me-3"
              >
                <i className="bi bi-download me-2"></i>Download CV
              </a>
              <a href="#projects" className="btn btn-outline-custom">
                View Projects
              </a>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center" ref={imgRef}>
            <div className="hero-img-wrapper">
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
