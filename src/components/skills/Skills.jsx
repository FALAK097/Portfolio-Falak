import { useState, useEffect } from 'react';
import './Skills.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { TbApi } from 'react-icons/tb';

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('experience');
      if (skillsSection) {
        const skillsSectionTop = skillsSection.offsetTop;
        const skillsSectionHeight = skillsSection.offsetHeight;
        const windowScroll = window.scrollY;

        if (
          windowScroll >
          skillsSectionTop - window.innerHeight + skillsSectionHeight / 2
        ) {
          setAnimateSkills(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="experience">
      <h5>My Technical Knowledge</h5>
      <h2>Skills</h2>
      <div
        className={`container experience_container ${
          animateSkills ? 'animate' : ''
        }`}>
        <div className="experience_frontend">
          <h3>
            <BsPatchCheckFill className="experience_details-icon" /> Frontend
            Development
          </h3>

          <div className="experience_content">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
              alt="html"
              width="70%"
              height="100%"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
              alt="css"
              width="70%"
              height="100%"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
              alt="sass"
              width="70%"
              height="100%"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="tailwindcss"
              width="70%"
              height="100%"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"
              alt="bootstrap"
              width="70%"
              height="100%"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
              alt="javascript"
              width="70%"
              height="100%"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
              alt="react"
              width="70%"
              height="100%"
            />
          </div>
        </div>

        {/* End of Frontend Development */}

        <div className="experience_backend">
          <h3>
            <BsPatchCheckFill className="experience_details-icon" /> Backend
            Development & API Integration
          </h3>
          <div className="experience_content">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
              alt="nodejs"
              width="70%"
              height="100%"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
              alt="express"
              width="70%"
              height="100%"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
              alt="mongodb"
              width="70%"
              height="100%"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              width="70%"
              height="100%"
            />
            <article className="experience_details">
              <TbApi className="experience_details-icon" />
              <h4>APIs</h4>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>
            <BsPatchCheckFill className="experience_details-icon" /> Tools
          </h3>
          <div className="experience_content">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
              alt="github"
              width="70%"
              height="100%"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg"
              alt="vscode"
              width="70%"
              height="100%"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg"
              alt="postman"
              width="70%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
