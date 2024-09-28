import React, { forwardRef } from "react";
import styled from "styled-components";
import ExperienceTimeline, { Timeline } from "./timeline";

const Experience = forwardRef(({}, ref) => {
  return (
    <ExperienceContainer ref={ref}>
      <ExperienceHeader>Experience</ExperienceHeader>
      <ExperienceTimeline></ExperienceTimeline>
    </ExperienceContainer>
  );
});

export const ExperienceContainer = styled.div`
  padding: 50px 0 20px 0;
`;

export const ExperienceHeader = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #173b6c;
  margin: 0 0 50px 0;
`;

export default Experience;
