import Navbar from '../components/common/Navbar';
import Hero from '../features/hero/Hero';
import About from '../features/about/About';
import Skills from '../features/skills/Skills';
import Projects from '../features/projects/Projects';
import Contact from '../features/contact/Contact';
import { personalInfo } from '../data/portfolioData';
import './Home.css';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. Built with React &amp; Vite.
        </p>
      </footer>
    </>
  );
}

export default HomePage;
