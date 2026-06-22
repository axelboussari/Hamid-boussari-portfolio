import { aboutData, personalInfo } from '../../data/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

function About() {
  const textRef = useScrollAnimation('fade-in-left');
  const statsRef = useScrollAnimation('fade-in-right');

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-subtitle">Who I am</p>
          <h2 className="section-title">About Me</h2>
          <hr className="section-divider" />
        </div>

        <div className="row align-items-center g-5">
          <div className="col-lg-6" ref={textRef}>
            {aboutData.paragraphs.map((p, i) => (
              <p key={i} className="about-text">{p}</p>
            ))}
            <a
              href={personalInfo.cvPath}
              download
              className="btn btn-primary-custom mt-3"
            >
              <i className="bi bi-download me-2"></i>Download CV
            </a>
          </div>

          <div className="col-lg-6" ref={statsRef}>
            <div className="stats-grid">
              {aboutData.stats.map(({ label, value }) => (
                <div key={label} className="stat-card">
                  <span className="stat-value">{value}</span>
                  <span className="stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
