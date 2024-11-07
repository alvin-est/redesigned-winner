/* Inserted in <Outlet /> on browser route: /portfolio */

import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    { title: "Project 1", image: "project1.jpg", deployedLink: "link.com", githubLink: "github.com" },
    { title: "Project 2", image: "project2.jpg", deployedLink: "link.com", githubLink: "github.com" },
    // .. more projects to come!
  ];

  return (
    <main className="container">
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project 
            key={index} 
            title={project.title} 
            image={project.image} 
            deployedLink={project.deployedLink} 
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
    </main>
  );
};

export default Portfolio;