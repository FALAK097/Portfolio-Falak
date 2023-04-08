import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
// import Education from "./components/education/Education";
import Qualification from "./components/qualification/Qualification";
import Experience from "./components/experience/Experience";
// import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Darkmode from "./components/Darkmode/Darkmode";
import ScrollUp from "./components/scrollup/ScrollUp";

const App = () => {
  return (
    <>
      <Header />
      <Darkmode />
      <Nav />
      <About />
      <Qualification />
      {/* <Education /> */}
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
