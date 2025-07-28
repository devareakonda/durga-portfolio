import React from 'react'
import { Link,NavLink } from 'react-router-dom';
function Projcets() {
    const projects = [
    {
      title: 'HTML Projects',
      description: 'HTML5 is the latest version of HTML that structures web content and supports modern features like multimedia, graphics, and improved APIs without needing plugins.',
      tech: ['HTML5', 'CSS3'],
      link1:"https://ipmovies995.netlify.app/",
      link2:"file:///C:/SAMASREYA%20FOUNDATION/Samasreya%20Foundation.html"
    },
    {
      title: 'CSS Projects',
      description: 'CSS is a stylesheet language used to control the layout, design, and appearance of HTML elements on a web page.',
      tech: ['HTML5','CSS3'],
      link1:"https://photogallary995.netlify.app/",
    },
    {
      title: 'Java Script',
      description: ' JavaScript ES6 is a modern version of JavaScript that introduces new features like let/const, arrow functions, classes, and promises for more efficient and cleaner coding.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      link1:"https://calculater995.netlify.app/",
     
    },
    {
       title: 'Boostrap',
      description: 'Bootstrap is a popular front-end framework that helps developers build responsive and mobile-first websites quickly using pre-designed HTML, CSS, and JavaScript components.',
      tech: ['HTML5', 'CSS3', 'Bootstrap'],
      link1:"https://bootstrap995.netlify.app/",
    }, 
    {
       title: 'React JS',
      description: 'React.js is a JavaScript library developed by Meta for building fast and interactive user interfaces using a component-based architecture.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      link1:"https://ipmovies995.netlify.app/",
    }, 
    {
       title: 'WordPress',
      description: 'WordPress is a popular open-source content management system (CMS) that allows users to create and manage websites easily without needing advanced coding skills.',
      tech: ['WordPress'],
      link1:"https://dev-prasad-gym.pantheonsite.io/",
      link2:"https://dev-samasreya-charity.pantheonsite.io/"
    },
    {
       title: 'Adobe illustrator',
      description: 'WordPress is a popular open-source content management system (CMS) that allows users to create and manage websites easily without needing advanced coding skills.',
      tech: ['Adobeillustrator'],
      link1:"https://adobeillustrator9951.netlify.app/",
      link2:"https://adobeillustrator9951.netlify.app/"

    },
    {
       title: 'PhotoShop',
      description: 'WordPress is a popular open-source content management system (CMS) that allows users to create and manage websites easily without needing advanced coding skills.',
      tech: ['PhotoShop'],
      link1:"https://photoshop995.netlify.app/",
      link2:"https://photoshop995.netlify.app/"
    },
    {
       title: 'Fig ma',
      description: 'WordPress is a popular open-source content management system (CMS) that allows users to create and manage websites easily without needing advanced coding skills.',
      tech: ['Figma'],
     link1:"https://figma995.netlify.app/",
      link2:"https://figma995.netlify.app/"
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
                
                  
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <NavLink to={project.link1} className="text-white"><button className='btn btn-primary'>Project 1</button></NavLink>
                  <NavLink to={project.link2} className="text-white"><button className='btn btn-primary'>Project 2</button></NavLink>
                  
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}

export default Projcets



