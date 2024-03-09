/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import './Nav.css';
import { FaHome } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { BiBook } from 'react-icons/bi';
import { AiOutlineProfile } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(() => currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className={visible ? 'visible' : 'hidden'}>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}>
        <span className="nav-icon">
          <FaHome />
          <span className="nav-tooltip">Home</span>
        </span>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <span className="nav-icon">
          <FaUserAlt />
          <span className="nav-tooltip">About</span>
        </span>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}>
        <span className="nav-icon">
          <BiBook />
          <span className="nav-tooltip">Skills</span>
        </span>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}>
        <span className="nav-icon">
          <AiOutlineProfile />
          <span className="nav-tooltip">Portfolio</span>
        </span>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <span className="nav-icon">
          <BiMessageSquareDetail />
          <span className="nav-tooltip">Contact</span>
        </span>
      </a>
    </nav>
  );
};

export default Nav;
