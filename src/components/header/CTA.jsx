import React from 'react';
// import CV from '../../assets/Falak Gala Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:186a790c-f8f9-41b0-818a-3b6dcbcfc7b5"
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
