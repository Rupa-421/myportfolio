import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  AboutContainer,
  AboutHeader,
  AboutContent,
  AboutWrapper,
  AboutFooter,
} from "./AboutElements";
import Resume from "./Resume";
import AboutScroller from "./AboutScroller";
import { forwardRef } from "react";
const About = forwardRef(({ scrollToSection }, ref) => {
  return (
    <AboutContainer ref={ref}>
      <AboutWrapper>
        <AboutHeader>Rupa sri.A</AboutHeader>
        <AboutContent>
          I'm
          <span style={{ color: "#339DFF", fontWeight: "bold" }}>
            <Typewriter
              words={[" Programmer", " Engineer", " Problem solver"]}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              loop={0}
              cursor
              cursorStyle="|"
              cursorColor="#339DFF"
            />
          </span>
        </AboutContent>
      </AboutWrapper>
      <AboutFooter>
        <AboutScroller scrollToSection={scrollToSection} />
        <Resume></Resume>
      </AboutFooter>
    </AboutContainer>
  );
});

export default About;
