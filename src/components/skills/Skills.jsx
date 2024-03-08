import './Skills.css';
import { BsPatchCheckFill, BsBootstrapFill } from 'react-icons/bs';
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io';
import { GrMysql } from 'react-icons/gr';
import { AiOutlineGithub, AiOutlineThunderbolt } from 'react-icons/ai';
import { TbApi } from 'react-icons/tb';
import { FaSass, FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVisualstudiocode,
  SiPostman,
} from 'react-icons/si';

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Technical Knowledge</h5>
      <h2>Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>
            <BsPatchCheckFill className="experience_details-icon" /> Frontend
            Development
          </h3>

          <div className="experience_content">
            <article className="experience_details">
              <ImHtmlFive className="experience_details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience_details">
              <IoLogoCss3 className="experience_details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience_details">
              <SiJavascript className="experience_details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience_details">
              <FaReact className="experience_details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience_details">
              <SiTailwindcss className="experience_details-icon" />
              <h4>Tailwind</h4>
            </article>
            <article className="experience_details">
              <BsBootstrapFill className="experience_details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience_details">
              <FaSass className="experience_details-icon" />
              <h4>SASS</h4>
            </article>
          </div>
        </div>

        {/* End of Frontend Development */}

        <div className="experience_backend">
          <h3>
            <BsPatchCheckFill className="experience_details-icon" /> Backend
            Development & API Integration
          </h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaNodeJs className="experience_details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience_details">
              <SiExpress className="experience_details-icon" />
              <h4>Express.js</h4>
            </article>
            <article className="experience_details">
              <SiMongodb className="experience_details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience_details">
              <GrMysql className="experience_details-icon" />
              <h4>MySQL</h4>
            </article>
            <article className="experience_details">
              <TbApi className="experience_details-icon" />
              <h4>RESTful APIs</h4>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>
            <BsPatchCheckFill className="experience_details-icon" /> Tools
          </h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiOutlineGithub className="experience_details-icon" />
              <h4>Git/GitHub</h4>
            </article>
            <article className="experience_details">
              <SiVisualstudiocode className="experience_details-icon" />
              <h4>VS Code</h4>
            </article>
            <article className="experience_details">
              <SiPostman className="experience_details-icon" />
              <h4>Postman</h4>
            </article>
            <article className="experience_details">
              <AiOutlineThunderbolt className="experience_details-icon" />
              <h4>Thunder Client</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
