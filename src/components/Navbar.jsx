import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <Code2 className="logo-icon" />
          <span className="code-font text-gradient">&lt;Developer /&gt;</span>
        </a>

        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contact" className="btn-primary">Hire Me</a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu glass">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }} 
            className="mobile-theme-toggle"
          >
            {theme === 'dark' ? <><Sun size={20} /> Dark Mode</> : <><Moon size={20} /> Light Mode</>}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
