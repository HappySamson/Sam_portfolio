import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Sacred Heart Church Management System",
      description: "A full-stack web application developed to manage church activities, memberships, and events efficiently. Features a secure admin dashbord and real-time database updates.",
      techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/HappySamson/",
      liveUrl: "",
      type: "Full Stack"
    },
    {
      title: "Interactive Quiz Application",
      description: "A fast and responsive quiz portal built with React.js. It allows users to take technical tests and get instant results, featuring a clean UI and state management.",
      techStack: ["React.js", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/HappySamson/",
      liveUrl: "https://quiz-app-one-roan-39.vercel.app/",
      type: "React App"
    },
    {
      title: "Professional Personal Portfolio",
      description: "A highly responsive and visually appealing developer portfolio built with React and Vite. Focused on performance, accessibility, and professional aesthetics.",
      techStack: ["React.js", "Vite", "Vanilla CSS", "Lucide Icons"],
      githubUrl: "https://github.com/HappySamson/",
      liveUrl: "https://my-portfolio-gamma-six-24.vercel.app/",
      type: "Frontend"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="project-header">
                <div className="folder-icon">
                  <Code size={32} />
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                      <GitBranch size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="External Link">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-body">
                <span className="project-type code-font">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              
              <div className="project-footer">
                <ul className="project-tech-list code-font">
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
