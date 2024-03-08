/* eslint-disable jsx-a11y/anchor-is-valid */
import './Nav.css';
import { FaHome } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { BiBook } from 'react-icons/bi';
import { AiOutlineProfile } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}>
        <span className="nav-icon">
          <FaHome />
          {activeNav === '#' && <span className="nav-tooltip">Home</span>}
        </span>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <span className="nav-icon">
          <FaUserAlt />
          {activeNav === '#about' && <span className="nav-tooltip">About</span>}
        </span>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}>
        <span className="nav-icon">
          <BiBook />
          {activeNav === '#experience' && (
            <span className="nav-tooltip">Experience</span>
          )}
        </span>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}>
        <span className="nav-icon">
          <AiOutlineProfile />
          {activeNav === '#portfolio' && (
            <span className="nav-tooltip">Portfolio</span>
          )}
        </span>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <span className="nav-icon">
          <BiMessageSquareDetail />
          {activeNav === '#contact' && (
            <span className="nav-tooltip">Contact</span>
          )}
        </span>
      </a>
    </nav>
  );
};

export default Nav;
