import Typical from 'react-typical';

import './Header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

import Profile from '../../assets/profile.png';

const Header = () => {
  return (
    <header className="banner02">
      <div className="container header_container">
        <h3>Hi There I'm</h3>
        <h1>Falak Gala</h1>
        <h5 className="--color-light">
          {' '}
          <Typical
            loop={Infinity}
            steps={[
              'Frontend Developer',
              1000,
              'React Developer',
              1000,
              'MERN Stack',
              1000,
              'Open for Exciting Opportunities',
              1000,
              'Football Lover ',
              1000,
            ]}
          />
        </h5>
        <span className="header-role">
          Designing Robust Software: From Concept to Production-Ready
          Applications
        </span>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Profile} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
