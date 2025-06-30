import React from 'react'
import { Link,NavLink } from 'react-router-dom'; // Add this import if using React Router

function Projcets() {
    const projects = [
    {
      title: 'HTML Projects',
      description: 'HTML5 is the latest version of HTML that structures web content and supports modern features like multimedia, graphics, and improved APIs without needing plugins.',
      tech: ['HTML5', 'CSS3'],
      link: 'https://devareakonda.github.io/IP-Movies/',
      path:'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R138894910&ga=GA1.1.1020290531.1740015977&semt=ais_hybrid&w=740',
    },
    {
      title: 'CSS Projects',
      description: 'CSS is a stylesheet language used to control the layout, design, and appearance of HTML elements on a web page.',
      tech: ['HTML5','CSS3'],
      link: 'https://devareakonda.github.io/prasad-gallery/',
    },
    {
      title: 'Java Script',
      description: ' JavaScript ES6 is a modern version of JavaScript that introduces new features like let/const, arrow functions, classes, and promises for more efficient and cleaner coding.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      link: 'https://devareakonda.github.io/Calculator/',
     
    },
    {
       title: 'Boostrap',
      description: 'Bootstrap is a popular front-end framework that helps developers build responsive and mobile-first websites quickly using pre-designed HTML, CSS, and JavaScript components.',
      tech: ['HTML5', 'CSS3', 'Bootstrap'],
      link: 'https://devareakonda.github.io/Bootstrap-project/',

    }, 
    {
       title: 'React JS',
      description: 'React.js is a JavaScript library developed by Meta for building fast and interactive user interfaces using a component-based architecture.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript']
    }, 
    {
       title: 'WordPress',
      description: 'WordPress is a popular open-source content management system (CMS) that allows users to create and manage websites easily without needing advanced coding skills.',
      tech: ['WordPress'],
      link: 'https://dev-prasad-gym.pantheonsite.io/',
    },
    {
       title: 'Adobe Illustrator',
      description: 'WordPress is a popular open-source content management system (CMS) that allows users to create and manage websites easily without needing advanced coding skills.',
      tech: ['Adobeillustrator'],
      link:'https://devareakonda.github.io/illustrator/',

    },
    {
       title: 'PhotoShop',
      description: 'WordPress is a popular open-source content management system (CMS) that allows users to create and manage websites easily without needing advanced coding skills.',
      tech: ['PhotoShop'],
      link: 'https://devareakonda.github.io/photoshop/',
    },
    {
       title: 'Figma',
      description: 'WordPress is a popular open-source content management system (CMS) that allows users to create and manage websites easily without needing advanced coding skills.',
      tech: ['Figma'],
       link:'https://devareakonda.github.io/Figma/',
    }
  ];
  return (
    <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                <div className="project-overlay">
                  
                    {project.link ? (
                      project.link.startsWith('http') ? (
                        <NavLink
                          to={project.link}
                        // traget={id}
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          View Project
                        </NavLink>
                      ) : (
                        <Link
                          to={project.link}
                          className="btn btn-primary"
                        >
                          View Project
                        </Link>
                      )
                    ) : (
                      <button className="btn btn-primary" disabled>
                        No Link Available
                      </button>
                    )}
                  </div>
                  
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}

export default Projcets



