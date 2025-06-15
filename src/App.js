import React, { useState, useEffect } from 'react';
// imp  ort { Link,NavLink } from 'react-router-dom'; // Add this import if using React Router
import Projcets from './Projcets'; // Adjust the import path as necessary
import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'Bootstrap', level: 85 },
    { name: 'jQuery', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'UI/UX Design', level: 90 }
  ];

  

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrollY > 50 ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Durga Prasad</h2>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
            <a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a href="#skills" onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#projects" onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </div>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Devarakonda Durga Prasad</span>
            </h1>
            <h2 className="hero-subtitle">Front-End Developer & UI/UX Designer</h2>
            <p className="hero-description">
              Passionate about creating beautiful, responsive, and user-friendly web experiences
              with modern technologies and design principles.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>View My Work</button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Get In Touch</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-img">
                <img src="/prasad.jpg" alt=""/>
                {/* <div className="img-placeholder">DP</div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Front-End Developer & UI/UX Designer</h3>
              <p>
                I'm a passionate front-end developer and UI/UX designer with expertise in creating 
                modern, responsive, and user-friendly web applications. My journey in web development 
                has equipped me with strong skills in HTML5, CSS3, Bootstrap, jQuery, and JavaScript.
              </p>
              <p>
                With a Master's degree in Business Administration (MBA), I bring both technical 
                expertise and business acumen to every project. I love transforming ideas into 
                beautiful, functional digital experiences that users love.
              </p>
              <div className="education">
                <h4>Education</h4>
                <div className="education-item">
                  <h5>Master of Business Administration (MBA)</h5>
                  <p>Post Graduate Degree</p>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>7</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>Fresher</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-content">
            <div className="skills-text">
              <h3>Technologies I Work With</h3>
              <p>
                I specialize in front-end development and UI/UX design, with a strong foundation 
                in modern web technologies. Here are the skills I've mastered over the years.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <h4>{skill.name}</h4>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projcets
      />
      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to collaborate!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <h4>Email</h4>
                  <p>devarakonda.durgaprasad123@gmail.com</p>
                </div>
                <div className="contact-item">
                  <h4>Phone</h4>
                  <p>+91 9951499830</p>
                </div>
                <div className="contact-item">
                  <h4>Location</h4>
                  <p>Visakhapatnam</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <p>&copy; 2025 Devarakonda Durga Prasad. All rights reserved.</p>
            </div>
            <div className="social-links">
              <NavLink to="https://in.linkedin.com/?trk=guest_homepage-basic_nav-header-logo" className="social-link">LinkedIn</NavLink>
              <NavLink to="https://github.com/dashboard" className="social-link">GitHub</NavLink>
              <NavLink to="https://x.com/" className="social-link">Twitter</NavLink>
              <NavLink to="https://www.instagram.com/" className="social-link">Instagram</NavLink>
              <NavLink to="https://www.facebook.com/" className="social-link">Facebook</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
