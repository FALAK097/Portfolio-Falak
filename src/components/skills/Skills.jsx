import { useState, useEffect } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { TbApi } from 'react-icons/tb';

import './Skills.css';
import {
  BootstrapIcon,
  CssIcon,
  ExpressIcon,
  FirebaseIcon,
  GitHubIcon,
  HtmlIcon,
  JavascriptIcon,
  MongoDBIcon,
  MySQLIcon,
  NodeIcon,
  PostmanIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  VsCodeIcon,
} from './Icons';

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
            <HtmlIcon />

            <CssIcon />

            <TailwindIcon />

            <SassIcon />

            <BootstrapIcon />

            <JavascriptIcon />

            <ReactIcon />

            <ReduxIcon />
          </div>
        </div>

        <div className="experience_backend">
          <h3>
            <BsPatchCheckFill className="experience_details-icon" /> Backend
            Development
          </h3>
          <div className="experience_content">
            <NodeIcon />

            <ExpressIcon />

            <MongoDBIcon />

            <MySQLIcon />

            <FirebaseIcon />

            <article className="experience_details">
              <TbApi className="experience_details-icon" size={50} />
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>
            <BsPatchCheckFill className="experience_details-icon" /> Tools
          </h3>
          <div className="experience_content">
            <GitHubIcon />

            <VsCodeIcon />

            <PostmanIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
