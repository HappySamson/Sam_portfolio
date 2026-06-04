import { motion } from 'framer-motion';
import { Terminal, ArrowRight, GitBranch, Link, Mail } from 'lucide-react';
import './Hero.css';
import profile from '../assets/sam.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge code-font">
            <Terminal size={14} className="badge-icon" />
            <span>Hello, World!</span>
          </div>

          <h1 className="hero-title">
            I'm <span className="text-gradient">Samson V</span><br />
            Full Stack Web Developer
          </h1>

          <p className="hero-subtitle">
            Seeking an entry-level Software Developer position to leverage my skills in Python, web technologies, and database management while contributing to the development of high-quality software solutions and advancing my professional growth.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary hero-btn">
              View Work <ArrowRight size={18} />
            </a>
            <a href="/public/SAMSON V.pdf" download="SAMSON V.pdf" className="btn-secondary hero-btn">
              Download Resume
            </a>
            <div className="social-links">
              <a href="https://github.com/HappySamson/" target="_blank" rel="noreferrer" className="glass-icon">
                <GitBranch size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sam-son-3491932a2" target="_blank" rel="noreferrer" className="glass-icon">
                <Link size={20} />
              </a>
              <a href="mailto:sson76628@gmail.com" className="glass-icon">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <img src={profile} className="hero-visual" alt="Samson V" />
      </div>
    </section>
  );
};

export default Hero;
