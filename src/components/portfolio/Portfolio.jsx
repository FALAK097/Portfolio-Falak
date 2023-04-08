import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/project-1.png";
import IMG2 from "../../assets/project-2.png";
import IMG3 from "../../assets/project-3.png";
import IMG4 from "../../assets/project-4.png";
import IMG5 from "../../assets/project-5.jpg";
import IMG6 from "../../assets/project-6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project 01",
    category: "Web App",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, culpa laboriosam soluta Quidem, nihil!",
    github: "https://github.com",
    demo: "https://instagram.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project 02",
    category: "Web Design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, culpa laboriosam soluta Quidem, nihil!",
    github: "https://github.com",
    demo: "https://instagram.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Project 03",
    category: "Web App",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, culpa laboriosam soluta Quidem, nihil!",
    github: "https://github.com",
    demo: "https://instagram.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Project 04",
    category: "Web Design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, culpa laboriosam soluta Quidem, nihil!",
    github: "https://github.com",
    demo: "https://instagram.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Project 05",
    category: "Web Design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, culpa laboriosam soluta Quidem, nihil!",
    github: "https://github.com",
    demo: "https://instagram.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Project 06",
    category: "Web App",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, culpa laboriosam soluta Quidem, nihil!",
    github: "https://github.com",
    demo: "https://twitter.com",
  },
];

const Portfolio = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState(data);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(data);
    } else {
      const newProjects = data.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

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
                active === index ? "active-work" : ""
              } portfolio__item`}
              key={index}
            >
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
                  target="_blank"
                >
                  Github
                </a>
                <a
                  rel="noreferrer"
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export const projectsNav = [
  {
    name : "All",
  },
  {
    name : "Web App",
  },
  {
    name : "Web Design",
  },
];

export default Portfolio