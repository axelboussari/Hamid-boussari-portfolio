import { projectsData } from '../../data/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Projects.css';

function Projects() {
  const ref = useScrollAnimation('fade-in');

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-subtitle">What I've built</p>
          <h2 className="section-title">Projects</h2>
          <hr className="section-divider" />
        </div>

        <div className="projects-grid" ref={ref}>
          {projectsData.map(({ title, description, tags, github, demo }) => (
            <div key={title} className="project-card">
              <div className="project-card-header">
                <i className="bi bi-folder2-open project-folder-icon"></i>
                <div className="project-links">
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <i className="bi bi-github"></i>
                    </a>
                  )}
                  {demo && (
                    <a href={demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{title}</h3>
              <p className="project-description">{description}</p>

              <div className="project-tags">
                {tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
