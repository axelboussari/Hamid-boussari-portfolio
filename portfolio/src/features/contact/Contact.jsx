import { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Contact.css';

const socials = [
  { icon: faLinkedin, label: 'LinkedIn', href: personalInfo.linkedin },
  { icon: faGithub, label: 'GitHub', href: personalInfo.github },
  { icon: faEnvelope, label: 'Email', href: `mailto:${personalInfo.email}` },
];

function Contact() {
  const leftRef = useScrollAnimation('fade-in-left');
  const rightRef = useScrollAnimation('fade-in-right');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio — message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-subtitle">Get in touch</p>
          <h2 className="section-title">Contact</h2>
          <hr className="section-divider" />
        </div>

        <div className="row g-5">
          <div className="col-lg-5" ref={leftRef}>
            <h3 className="contact-heading">Let's work together</h3>
            <p className="contact-text">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>

            <div className="contact-socials">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={icon} className="social-link-icon" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-7" ref={rightRef}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label-custom" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="input-custom"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label-custom" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="input-custom"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label-custom" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="input-custom"
                    rows="5"
                    placeholder="Your message..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary-custom w-100">
                    <i className="bi bi-send me-2"></i>
                    {sent ? 'Opening your mail client...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
