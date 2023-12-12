import React from 'react';
// import CV from '../../assets/Falak Gala Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:db7dc43f-a84a-481e-a256-252da7808b19"
        className="btn"
        target="_blank"
        rel="noreferrer">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
      <a href="#portfolio" className="btn btn-primary">
        See My Work
      </a>
    </div>
  );
};

export default CTA;
