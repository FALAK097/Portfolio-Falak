import './ScrollUp.css';
import { BiUpArrowAlt } from 'react-icons/bi';

const ScrollUp = () => {
  window.addEventListener('scroll', function () {
    // when the scroll is higher than 560 viewport height,
    // add the show-scroll class to a tag with the scroll-top class
    const scrollUp = this.document.querySelector('.scrollup');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  });
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="scrollup" aria-label="Go up">
      <BiUpArrowAlt className="scrollup_icon" aria-label="Icon of go up" />
    </a>
  );
};

export default ScrollUp;
