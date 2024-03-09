import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import data from './PortfolioData';
import { projectsNav } from './PortfolioNav';

const Portfolio = () => {
  const [item, setItem] = useState({ name: 'All' });
  const [projects, setProjects] = useState(data);
  const [active, setActive] = useState(0);

  // Filtering the projects based on selected category
  useEffect(() => {
    if (item.name === 'All') {
      setProjects(data);
    } else {
      const newProjects = data.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  // Function to handle click event on filter
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${
                active === index ? 'active-work' : ''
              } portfolio__item`}
              key={index}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="container portfolio_container">
        {projects.map(({ id, image, title, content, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p className="portfolio-content">{content}</p>
              <div className="portfolio_item-cta">
                <a
                  rel="noreferrer"
                  href={github}
                  className="btn"
                  target="_blank">
                  GitHub
                </a>
                {demo && (
                  <a
                    rel="noreferrer"
                    href={demo}
                    className="btn btn-primary"
                    target="_blank">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
