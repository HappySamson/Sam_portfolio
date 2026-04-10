import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Ganadipathy Tulsi’s Jain Engineering College",
      location: "Kanniyambadi, Vellore",
      period: "2024 - 2026",
      grade: "CGPA: 8.58",
      description: "Advanced studies in computer applications, specializing in full-stack development and modern architecture.",
      achievements: [
        "Consistent academic excellence",
        "Focused on React.js and Node.js ecosystems"
      ]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Don Bosco College (co-ed)",
      location: "Yelagiri Hills, Tirupattur",
      period: "2021 - 2024",
      grade: "Percentage: 78%",
      description: "Foundation in computer science, programming fundamentals, and database management.",
      achievements: []
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "TMKV Govt. Boys Hr. Sec. School",
      location: "Kangeyanallur, Vellore",
      period: "2020 - 2021",
      grade: "Percentage: 80%",
      description: "Focused on core science and mathematics.",
      achievements: []
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education <span className="text-gradient">&amp; Qualifications</span></h2>
        
        <div className="timeline">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index} 
              className="timeline-item glass"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-icon">
                <GraduationCap size={24} />
              </div>
              
              <div className="timeline-content">
                <h3 className="degree">{edu.degree}</h3>
                <h4 className="institution text-gradient">{edu.institution}</h4>
                
                <div className="meta-info">
                  <span className="meta-item code-font">
                    <Calendar size={14} /> {edu.period}
                  </span>
                  <span className="meta-item code-font">
                    <MapPin size={14} /> {edu.location}
                  </span>
                  <span className="grade-badge">{edu.grade}</span>
                </div>
                
                <p className="description">{edu.description}</p>
                
                {edu.achievements.length > 0 && (
                  <ul className="achievements-list">
                    {edu.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
