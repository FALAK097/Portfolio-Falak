import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/P3.png";
import IMG2 from "../../assets/P1.png";
import IMG3 from "../../assets/project-3.png";
import IMG4 from "../../assets/P2.png";
import IMG5 from "../../assets/project-5.jpg";
import IMG6 from "../../assets/project-6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Luscious - Food Recipe PWA",
    category: "Web App",
    content:
      "Created a Food Recipe Progressive Web App (PWA) using Spoonacular API, React, React Router, and Framer Motion. Implemented features for recipe search, browsing, and detailed information, providing users with a seamless and interactive experience.",
    github: "https://github.com/FALAK097/Luscious",
    demo: "https://luscious-six.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Education Website",
    category: "Web Design",
    content:
      "Presenting a responsive multipage website for an educational institute, showcasing courses and built using HTML, SCSS, and JavaScript. Experience seamless navigation and explore the diverse educational opportunities with ease.",
    github: "https://github.com/FALAK097/Educationwebsite",
    demo: "https://falak097.github.io/Educationwebsite/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Project 03",
    category: "Web App",
    content:
      "Coming Soon",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "Educational Website",
    category: "Web Design",
    content:
      "Experience a responsive educational website featuring a diverse course selection and engaging blog content, meticulously built using HTML and CSS.",
    github: "https://github.com/FALAK097/EducationalWebsite",
    demo: "https://falak097.github.io/EducationalWebsite/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Project 05",
    category: "Web Design",
    content:
      "Coming Soon",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "Project 06",
    category: "Web App",
    content:
      "Coming Soon",
    github: "https://github.com",
    demo: "",
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
              className={`${active === index ? "active-work" : ""
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
                  GitHub
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
    name: "All",
  },
  {
    name: "Web App",
  },
  {
    name: "Web Design",
  },
];

export default Portfolio