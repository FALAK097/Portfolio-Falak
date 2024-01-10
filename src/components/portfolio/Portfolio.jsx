import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/foodrecipe.png';
import IMG2 from '../../assets/edu1.png';
import IMG3 from '../../assets/spotify.PNG';
import IMG4 from '../../assets/edu2.png';
import IMG5 from '../../assets/wildheart.png';
import IMG6 from '../../assets/Nike.PNG';
import IMG7 from '../../assets/airbnb.png';
import IMG8 from '../../assets/blog.png';
const data = [
  {
    id: 1,
    image: IMG3,
    title: 'Spotify Clone',
    category: 'Web App',
    content:
      'Developed a Spotify Clone, a full-stack music streaming application, using Next.js, React, Tailwind CSS, Supabase, PostgreSQL, and Stripe. The project includes features such as user authentication, song playback, favorites, playlists, and integration with Stripe for premium subscriptions, providing users with a Spotify-like experience.',
    github: 'https://github.com/FALAK097/spotify_clone',
    demo: 'https://spotify-clone-falak097.vercel.app/',
  },
  {
    id: 2,
    image: IMG7,
    title: 'Airbnb Clone',
    category: 'Web App',
    content:
      "Welcome to my Airbnb Clone project, a showcase of my MERN stack expertise. This full-stack application mirrors Airbnb's core functionalities, offering users seamless registration, accommodation exploration, and booking confirmations. Leveraging React.js, Node.js, MongoDB, and a suite of tools, this project highlights my proficiency in developing immersive and functional web applications.",
    github: 'https://github.com/FALAK097/Airbnb-clone',
  },
  {
    id: 3,
    image: IMG8,
    title: 'Blog Nest',
    category: 'Web App',
    content:
      'Blog Nest is a robust MERN stack web application designed for content creators. This full-stack platform facilitates article creation, editing, and publishing. With secure JWT-based authentication, Quill.js for rich text editing, and PWA capabilities, Blog Nest provides a seamless user experience. The tech stack includes React, Express.js, MongoDB, and more, demonstrating proficiency in modern web development.',
    github: 'https://github.com/FALAK097/Blog-Nest',
  },
  {
    id: 4,
    image: IMG1,
    title: 'Luscious - Food Recipe PWA',
    category: 'Web App',
    content:
      'Created a Food Recipe Progressive Web App (PWA) using Spoonacular API, React, React Router, and Framer Motion. Implemented features for recipe search, browsing, and detailed information, providing users with a seamless and interactive experience.',
    github: 'https://github.com/FALAK097/Luscious',
    demo: 'https://luscious-falak097.vercel.app/',
  },
  {
    id: 5,
    image: IMG6,
    title: 'Nike Landing Page',
    category: 'Web Design',
    content:
      'Designed and developed a responsive Nike landing page using React, Vite, and Tailwind CSS, showcasing products, services, special offers, and a subscription section. Built with a focus on seamless user interaction and visual appeal.',
    github: 'https://github.com/FALAK097/Nike',
    demo: 'https://nike-falak097.vercel.app/',
  },
  {
    id: 6,
    image: IMG5,
    title: 'Wild Heart',
    category: 'Web Design',
    content:
      'WildHeart - A Website for Animal Charity built using HTML, CSS is a website dedicated to promoting animal welfare and conservation efforts. The website provides information about various animal species, their habitats, and the importance of preserving biodiversity.',
    github: 'https://github.com/FALAK097/WildHeart',
    demo: 'https://falak097.github.io/WildHeart/',
  },
  {
    id: 7,
    image: IMG2,
    title: 'Education Website',
    category: 'Web Design',
    content:
      'Presenting a responsive multipage website for an educational institute, showcasing courses and built using HTML, SCSS, and JavaScript. Experience seamless navigation and explore the diverse educational opportunities with ease.',
    github: 'https://github.com/FALAK097/Educationwebsite',
    demo: 'https://falak097.github.io/Educationwebsite/',
  },
];

const Portfolio = () => {
  const [item, setItem] = useState({ name: 'All' });
  const [projects, setProjects] = useState(data);
  const [active, setActive] = useState(0);

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

export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'Web Design',
  },
  {
    name: 'Web App',
  },
];

export default Portfolio;
