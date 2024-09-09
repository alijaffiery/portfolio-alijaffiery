import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import { Element } from "react-scroll";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <>
      <Header />
      <Element name="home">
          <Home />
      </Element>
      <Element name="about">
          <AboutMe />
      </Element>
      <Element name="skills">
          <Skills />
      </Element>
      <Element name="projects">
          <Projects />
      </Element>
      <Element name="contact">
          <ContactUs />
      </Element>
    </>
  );
};

export default App;
