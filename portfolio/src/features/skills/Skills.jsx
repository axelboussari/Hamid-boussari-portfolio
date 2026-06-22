import { skillsData } from '../../data/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Skills.css';

function Skills() {
  const ref = useScrollAnimation('fade-in');

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-subtitle">What I know</p>
          <h2 className="section-title">Skills</h2>
          <hr className="section-divider" />
        </div>

        <div className="skills-grid" ref={ref}>
          {skillsData.map(({ category, icon, items }) => (
            <div key={category} className="skill-card">
              <div className="skill-card-header">
                <i className={`bi ${icon} skill-icon`}></i>
                <h3 className="skill-category">{category}</h3>
              </div>
              <div className="skill-tags">
                {items.map(item => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
