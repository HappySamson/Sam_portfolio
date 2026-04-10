import { motion } from 'framer-motion';
import { Terminal, ArrowRight, GitBranch, Link, Mail } from 'lucide-react';
import './Hero.css';

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
            Entry-level Full Stack Developer with expertise in React.js, Node.js, and Python. 
            Passionate about building scalable applications and developing professional experience 
            in modern full-stack engineering.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary hero-btn">
              View Work <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" download="Samson_V_Resume.pdf" className="btn-secondary hero-btn">
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
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="code-window glass">
            <div className="window-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <span className="window-title code-font">developer.py</span>
            </div>
            <pre className="code-body code-font">
              <code>
                <span className="keyword">class</span> <span className="class-name">PythonDeveloper</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">def</span> <span className="function">__init__</span>(<span className="self">self</span>):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="self">self</span>.name = <span className="string">"Samson V"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="self">self</span>.role = <span className="string">"Fresher"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="self">self</span>.skills = [<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Python"</span>, <span className="string">"Django"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"SQL"</span>, <span className="string">"REST APIs"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">def</span> <span className="function">build_future</span>(<span className="self">self</span>):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="string">"Scalable Solutions"</span><br/>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
