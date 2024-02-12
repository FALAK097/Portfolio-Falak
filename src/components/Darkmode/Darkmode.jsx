import { useEffect, useState } from 'react';
import './Darkmode.css';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/moon.svg';

const Darkmode = () => {
  const [theme, setTheme] = useState('dark-theme');
  const [isToggleHidden, setIsToggleHidden] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'
    );
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const toggleEl = document.querySelector('.toggle');

      if (top === 0 && isToggleHidden) {
        setIsToggleHidden(false);
        toggleEl.classList.remove('toggle--hidden');
      } else if (top !== 0 && !isToggleHidden) {
        setIsToggleHidden(true);
        toggleEl.classList.add('toggle--hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isToggleHidden]);

  return (
    <div>
      <label
        className={`toggle${isToggleHidden ? ' toggle--hidden' : ''}`}
        htmlFor="myToggle">
        <input
          className="toggle__input"
          name=""
          type="checkbox"
          id="myToggle"
          checked={theme === 'light-theme'}
          onChange={toggleTheme}
        />
        <div
          className="toggle__button"
          style={{
            backgroundColor: theme === 'dark-theme' ? '#eee' : '#666',
          }}>
          <SunIcon className="sun-icon" />
          <MoonIcon
            className="moon-icon"
            style={{
              color: theme === 'dark-theme' ? '#666' : '#eee',
            }}
          />
        </div>
        <div className="toggle__fill"></div>
      </label>
    </div>
  );
};

export default Darkmode;
