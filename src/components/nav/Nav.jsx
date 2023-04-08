import React from 'react'
import './Nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineProfile} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><FaUserAlt/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav ==='#portfolio' ? 'active' : ''}><AiOutlineProfile/></a>
      {/* <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><BiBook/></a> */}
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><RiServiceLine/></a> */}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav