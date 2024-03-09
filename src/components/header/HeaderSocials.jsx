import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
const HeaderSocials = () => {
  return (
    <div className="header_socials">
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
    </div>
  );
};

export default HeaderSocials;
