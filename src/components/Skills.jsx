import { motion } from 'framer-motion';
import { Database, Code, Server, Layout, Search, Layers } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout size={24} />,
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express.js", "Python", "Java", "PHP"]
    },
    {
      title: "Database Management",
      icon: <Database size={24} />,
      skills: ["MySQL", "MongoDB", "DBMS Concepts"]
    },
    {
      title: "Tools & Programming",
      icon: <Code size={24} />,
      skills: ["Git & GitHub", "VS Code", "Data Structures", "OOP Concepts"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="skill-header">
                <div className="skill-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-bullet"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
