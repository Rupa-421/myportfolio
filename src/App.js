import React, { useRef, Suspense, CSSProperties } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { nanoid } from "nanoid";
import { RingLoader } from "react-spinners";
// Dynamically import components using React.lazy

const Nav = React.lazy(() => import("./components/Nav"));
const About = React.lazy(() => import("./components/About"));
const Skills = React.lazy(() => import("./components/Skills"));
const Education = React.lazy(() => import("./components/Education"));
const Experience = React.lazy(() => import("./components/Experience"));
const Contact = React.lazy(() => import("./components/Contact"));
const Projects = React.lazy(() => import("./components/Projects"));
const Testimonials = React.lazy(() => import("./components/Testimonials"));

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      about: aboutRef,
      skills: skillsRef,
      education: educationRef,
      experience: experienceRef,
      contact: contactRef,
      projects: projectsRef,
      testimonials: testimonialsRef,
    };
    sectionRefs[section]?.current.scrollIntoView({ behavior: "smooth" });
  };
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <Router>
      <GlobalStyle />
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <RingLoader color="#339DFF" cssOverride={override}></RingLoader>
          </div>
        }
      >
        <Nav scrollToSection={scrollToSection} />
        <About ref={aboutRef} scrollToSection={scrollToSection} />
        <Experience ref={experienceRef} />
        <Projects ref={projectsRef} />
        <Skills ref={skillsRef} />
        <Education ref={educationRef} />
        <Testimonials ref={testimonialsRef} />
        <Contact ref={contactRef} />
      </Suspense>
    </Router>
  );
}

export default App;
