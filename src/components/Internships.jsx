import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './Internships.css';

const Internships = () => {
  const internships = [
    {
      role: "Python Full Stack Developer Intern",
      organization: "Gradtwin Services Pvt Ltd",
      period: "Jan 2026 – Mar 2026",
      description: "Built responsive web applications using Python, Django, HTML, CSS, Bootstrap, and MySQL. Developed CRUD operations and integrated database functionality. Participated in testing, debugging, and deployment activities."
    }
  ];

  return (
    <section id="internships" className="internships-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work <span className="text-gradient">Experience</span>
        </motion.h2>
        <div className="internships-grid">
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              className="internship-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="internship-header">
                <div className="internship-icon">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="internship-role">{intern.role}</h3>
                  <h4 className="internship-org text-gradient">{intern.organization}</h4>
                </div>
              </div>
              <div className="internship-meta code-font">
                <Calendar size={16} /> <span>{intern.period}</span>
              </div>
              <p className="internship-desc">{intern.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
