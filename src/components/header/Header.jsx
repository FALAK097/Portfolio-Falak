import React from 'react'
import './Header.css'
import CTA from './CTA'
// import ME from '../../assets/me.jpeg'
import Photo from '../../assets/photo.jpg'
import HeaderSocials from './HeaderSocials'
import Typical from 'react-typical'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
       
        <h3>Hello I am</h3>
        <h1>Falak Gala</h1>
        <h5 className="--color-light">
          {" "}
          <Typical 
          loop={Infinity}
          steps={[
            "Frontend Dev",
            1000,
            "Web Designer",
            1000,
            "Football Lover",
            1000, 
          ]}
          />
        </h5>
        <span className='header-role'>
          Knack of building web applications with front and back end operations.
        </span>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Photo} alt="me" />
        </div>
      </div>
     
    </header>
      
  )
}

export default Header