import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Darkmode from './components/Darkmode/Darkmode';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
      <Header />
      <Darkmode />
      <Nav />
      <About />
      <Qualification />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
