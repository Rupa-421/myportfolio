import { forwardRef, React } from "react";
import EducationTimeline, { Timeline } from "./timeline";
import styled from "styled-components";

const Education = forwardRef(({}, ref) => {
  return (
    <EducationContainer ref={ref}>
      <EducationHeader>Education</EducationHeader>
      <EducationTimeline></EducationTimeline>
    </EducationContainer>
  );
});

export const EducationContainer = styled.div`
  background-color: #f2c9ef;
  height: 100vh;
  padding: 50px 0 20px 0;
`;

export const EducationHeader = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #7d0669;
  margin: 0 0 50px 0;
`;

export default Education;
