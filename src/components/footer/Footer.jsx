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
          rel="noreferrer"
          aria-label="LinkedIn profile link">
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/FALAK097"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile link">
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/FalakGala097"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter profile link">
          <BsTwitter />
        </a>
        <a
          href="https://falak.hashnode.dev"
          target="_blank"
          rel="noreferrer"
          aria-label="Hashnode Blog's profile link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="12"
            height="12"
            viewBox="0 0 48 48">
            <path
              fill="#2962ff"
              d="M42.164,17.126L30.874,5.835c-3.781-3.781-9.967-3.781-13.748,0L5.836,17.126	c-3.781,3.781-3.781,9.967,0,13.748l11.291,11.291c3.781,3.781,9.967,3.781,13.748,0l11.291-11.291	C45.945,27.093,45.945,20.907,42.164,17.126z M24,31c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7	C31,27.866,27.866,31,24,31z"></path>
          </svg>
        </a>
        <a
          href="https://bento.me/falak"
          target="_blank"
          rel="noreferrer"
          aria-label="Bento profile link">
          <img
            src="https://asset.brandfetch.io/idA7XqNLPL/idzA6wjIir.svg"
            alt="bento"
            width="12"
            height="12"
          />
        </a>
      </div>

      <div className="footer_copyright">
        <h4>
          Made with ❤ By{' '}
          <a
            href="https://falakgala.dev"
            rel="noopener noreferrer"
            aria-label="Visit Falak Gala's website">
            Falak Gala{' '}
          </a>{' '}
          || All Rights Reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
