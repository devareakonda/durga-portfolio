import React from 'react';
import { NavLink } from 'react-router-dom';

function Projcets() {
  const projects = [
    {
      path: "https://verpex.com/assets/uploads/images/blog/Basic-HTML-Codes-for-Websites.webp?v=1691760654",
      title: 'HTML Projects',
      description: 'HTML5 is the latest version of HTML that structures web content and supports modern features like multimedia, graphics, and improved APIs without needing plugins.',
      tech: ['HTML5', 'CSS3'],
      link1: "https://ipmovies995.netlify.app/",
      link2: "file:///C:/SAMASREYA%20FOUNDATION/Samasreya%20Foundation.html"
    },
    {
      path: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2025/03/illustration-of-a-laptop-with-the-css-logo-a-grid-in-the-behind-and-some-icons-around-it.png",
      title: 'CSS Projects',
      description: 'CSS is a stylesheet language used to control the layout, design, and appearance of HTML elements on a web page.',
      tech: ['HTML5', 'CSS3'],
      link1: "https://photogallary995.netlify.app/",
      link2: "https://photogallary995.netlify.app/",
    },
    {
      path: "https://ik.imagekit.io/ably/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png?tr=w-1728,q-50",
      title: 'Java Script',
      description: ' JavaScript ES6 is a modern version of JavaScript that introduces new features like let/const, arrow functions, classes, and promises for more efficient and cleaner coding.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      link1: "https://calculater995.netlify.app/",
      link2: "https://calculater995.netlify.app/"
    },
    {
      path: "https://www.openlogic.com/sites/default/files/image-ol-boostrap-framwork-basics.jpg.jpeg",
      title: 'Boostrap',
      description: 'Bootstrap is a popular front-end framework that helps developers build responsive and mobile-first websites quickly using pre-designed HTML, CSS, and JavaScript components.',
      tech: ['HTML5', 'CSS3', 'Bootstrap'],
      link1: "https://bootstrap995.netlify.app/",
      link2: "https://bootstrap995.netlify.app/"
    },
    {
      path: "https://qualitythought.in/wp-content/uploads/2024/08/the_future_of_web_development_reactjs.webp",
      title: 'React JS',
      description: 'React.js is a JavaScript library developed by Meta for building fast and interactive user interfaces using a component-based architecture.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      link1: "https://classy-syrniki-73667a.netlify.app/",
      link2: "https://tiny-starburst-2e02c2.netlify.app/"
    },
    {
      path: "https://kinsta.com/wp-content/uploads/2018/02/what-is-wordpress.png",
      title: 'WordPress',
      description: 'WordPress is a popular open-source content management system (CMS) that allows users to create and manage websites easily without needing advanced coding skills.',
      tech: ['WordPress'],
      link1: "https://dev-prasad-gym.pantheonsite.io/",
      link2: "https://dev-samasreya-charity.pantheonsite.io/"
    },
    {
      path: "https://blog.sribu.com/wp-content/uploads/2024/08/ADOBE-Illustrator-CC.webp",
      title: 'Adobe illustrator',
      description: 'Adobe Illustrator is a popular vector graphics design software that allows users to create logos, icons, illustrations, and other artwork easily without needing advanced drawing or painting skills.',
      tech: ['Adobeillustrator'],
      link1: "https://adobeillustrator9951.netlify.app/",
    },
    {
      path: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/06/adobe_photoshop_hero_1200x675.jpg",
      title: 'PhotoShop',
      description: 'Adobe Photoshop is a widely used image editing software that allows users to enhance, manipulate, and create digital images and graphics easily without needing advanced photo editing skills.',
      tech: ['PhotoShop'],
      link1: "https://photoshop995.netlify.app/",
    },
    {
      path: "https://miro.medium.com/v2/resize:fit:895/0*_sQDQad1eiEyOgcw.png",
      title: 'Figma',
      description: 'Figma is a collaborative web-based design tool that allows users to create user interfaces, prototypes, and wireframes easily without needing advanced design or coding skills.',
      tech: ['Figma'],
      link1: "https://figma995.netlify.app/",
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <img src={project.path} alt={project.title} className="img-fluid mb-3" style={{ maxHeight: '210px' }} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* ✅ Only ONE center button for the last 3 projects */}
                {(project.title === 'Adobe illustrator' || project.title === 'PhotoShop' || project.title === 'Figma') ? (
                  <div className="d-flex justify-content-center">
                    <NavLink to={project.link1} className="text-white mb-2">
                      <button className='prbut btn btn-primary'>View Project</button>
                    </NavLink>
                  </div>
                ) : (
                  <>
                    <NavLink to={project.link1} className="text-white me-2 mb-2">
                      <button className='pbut btn btn-primary'>Project 1</button>
                    </NavLink>
                    <NavLink to={project.link2} className="text-white mb-2">
                      <button className='pbut btn btn-primary'>Project 2</button>
                    </NavLink>
                  </>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projcets;
