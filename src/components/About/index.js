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
const About = forwardRef(({ scrollToSection},ref) => {
  return (
    <AboutContainer ref={ref}>
      <AboutWrapper>
        <AboutHeader>Rupa sri.A</AboutHeader>
        <AboutContent>
          I'm
          <span style={{ color: "white", fontWeight: "bold" }}>
            <Typewriter
              words={[" Student", " Engineer", " Learner"]}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              loop={0}
              cursor
              cursorStyle="|"
              cursorColor="white"
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
