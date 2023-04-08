import React from "react";
import "./About.css";
import ME from "../../assets/me.jpeg";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>0 Years</small>
            </article>

            {/* <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>0 Worldwide</small>
            </article> */}

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
          Greetings! My name is Falak Gala, and I am on an exciting journey pursuing an undergraduate degree in Computer Engineering T.E. While exploring the vast and dynamic world of technology, I have found myself drawn to the art and science of web development. With a passion for crafting engaging and intuitive user experiences, I am currently honing my skills in building dynamic websites and robust web applications.

          </p>

          <a href="#contact" className="btn btn-primary">
            Want to know more?
          </a>
        </div>
      </div>  
  </section>
  );
};

export default About;
