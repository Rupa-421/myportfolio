import React from "react";
import styled from "styled-components";

const AboutScroller = ({ scrollToSection }) => {
  return <button onClick={()=>scrollToSection('contact')}>Hire me</button>;
};


export default AboutScroller;
