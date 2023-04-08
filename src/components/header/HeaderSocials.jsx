import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
// import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
// import {BsTwitter} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/falak-gala/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/FALAK097" target="_blank" rel="noreferrer"><FaGithub/></a>
        {/* <a href="https://www.facebook.com/falak.gala.39" target="_blank"><FaFacebook/></a> */}
        <a href="https://www.instagram.com/falak.097/" target="_blank" rel="noreferrer"><FaInstagram/></a>
        {/* <a href="https://twitter.com/FalakGala09" target="_blank"><BsTwitter/></a> */}
        
    </div>
  )
}

export default HeaderSocials