import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import {BsBootstrapFill} from 'react-icons/bs'
import {FaSass} from 'react-icons/fa'
// import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
// import {FaAngular} from "react-icons/fa";
// import {RiVuejsFill} from 'react-icons/ri'
import {SiMongodb} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiMysql} from "react-icons/si";
import {SiVisualstudiocode} from "react-icons/si"
import {AiOutlineGithub} from "react-icons/ai"
// import {SiPhp} from 'react-icons/si'
const Experience = () => {
  return (
    <section id="experience">
      <h5>My Technical Knowledge</h5>
      <h2>Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3><BsPatchCheckFill  classname="experience_details-icon" />   Frontend Development</h3>

          <div className="experience_content">
            <article className="experience_details">
              <ImHtmlFive classname="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
              <IoLogoCss3 classname="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiJavascript classname="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
             
            {/* <article className="experience_details">
              <SiTailwindcss classname="experience_details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>  */}
            <article className="experience_details">
              <FaReact classname="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            {/* <article className="experience_details">
              <FaAngular classname="experience_details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <RiVuejsFill classname="experience_details-icon" />
              <div>
                <h4>Vue</h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */}
          </div>
        </div>

        {/* End of Frontend Development */}

        <div className="experience_backend">
          <h3><BsPatchCheckFill  classname="experience_details-icon" /> Backend Development</h3>
          <div className="experience_content">
            
            <article className="experience_details">
              <SiExpress classname="experience_details-icon" />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <FaNodeJs classname="experience_details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
            {/* <article className="experience_details">
              <SiPhp classname="experience_details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */}
          </div>
        </div>

        {/* End of Backend Development */}
        <div className="experience_backend">
          <h3><BsPatchCheckFill  classname="experience_details-icon" /> Database</h3>
          <div className="experience_content">
        <article className="experience_details">
              <SiMongodb classname="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <SiMysql classname="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            </div>
            </div>

            <div className="experience_backend">
          <h3><BsPatchCheckFill  classname="experience_details-icon" /> Tools</h3>
          <div className="experience_content">
        <article className="experience_details">
              <AiOutlineGithub classname="experience_details-icon" />
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiVisualstudiocode classname="experience_details-icon" />
              <div>
                <h4>VS Code</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsBootstrapFill classname="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaSass classname="experience_details-icon" />
              <div>
                <h4>SASS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            </div>
            </div>
      </div>
    </section>
  );
};

export default Experience;
