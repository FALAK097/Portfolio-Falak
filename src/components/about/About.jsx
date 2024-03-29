import './About.css';
import Photo from '../../assets/photo.jpg';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Photo} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <h6>7 Months</h6>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <h6>5+ Completed</h6>
            </article>
          </div>

          <p>
            Greetings! My name is Falak Gala, and I am a final year
            undergraduate student pursuing Computer Engineering. While exploring
            the vast and dynamic world of technology, I have found myself drawn
            to the art and science of Web Development. With a passion for
            crafting engaging and intuitive user experiences, I am currently
            honing my skills in building dynamic websites and robust web
            applications.
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
