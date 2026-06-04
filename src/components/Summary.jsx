import { motion } from 'framer-motion';
import './Summary.css';

const Summary = () => {
  return (
    <section id="summary" className="summary-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional <span className="text-gradient">Summary</span>
        </motion.h2>
        <motion.p className="objective" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>

        </motion.p>
        <div className="grid-2">
          <motion.div className="strengths" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3>Strengths</h3>
            <ul>
              <li>Problem‑solving</li>
              <li>Communication</li>
              <li>Adaptability</li>
              <li>Teamwork</li>
              <li>Quick learner</li>
            </ul>
          </motion.div>
          <motion.div className="hobbies" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3>Hobbies</h3>
            <ul>
              <li>Reading</li>
              <li>Technology exploration</li>
              <li>Travelling</li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Summary;
