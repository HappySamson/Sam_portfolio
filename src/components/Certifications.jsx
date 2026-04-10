import { motion } from 'framer-motion';
import { Award, ShieldCheck, Database, BrainCircuit } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Big Data Analytics",
      org: "Novitech Research & Development Pvt Ltd.",
      icon: <Database size={24} />,
      description: "Comprehensive training on large-scale data processing and analytical techniques."
    },
    {
      title: "Cyber Security",
      org: "Quick Heal Academy",
      icon: <ShieldCheck size={24} />,
      description: "Explored network security, threat detection, and defensive strategies for digital infrastructure."
    },
    {
      title: "Introduction to AI",
      org: "MyGreatLearning",
      icon: <BrainCircuit size={24} />,
      description: "Fundamentals of artificial intelligence, machine learning concepts, and their real-world applications."
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications <span className="text-gradient">&amp; Training</span>
        </motion.h2>
        
        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="cert-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="cert-header">
                <div className="cert-icon-container">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-org code-font">{cert.org}</p>
                </div>
              </div>
              <p className="cert-description">{cert.description}</p>
              <div className="cert-badge">
                <Award size={14} /> <span>Verified Achievement</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
