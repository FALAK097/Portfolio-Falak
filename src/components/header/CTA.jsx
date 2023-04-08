import React from 'react'
import CV from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn' target='_blank' rel="noreferrer">Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        <a href="#portfolio" className='btn btn-primary'>See My Work</a>
    </div>
  )
}

export default CTA