/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="banner">
      <a href="#" className="footer_logo">
        Falak Gala
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/falak-gala/"
          target="_blank"
          rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/FALAK097" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/FalakGala097"
          target="_blank"
          rel="noreferrer">
          <BsTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <h4>
          Made with ❤ By{' '}
          <a href="/" rel="noopener noreferrer">
            Falak Gala{' '}
          </a>{' '}
          || All Rights Reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
