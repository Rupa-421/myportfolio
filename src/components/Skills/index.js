import { React, forwardRef } from "react";
import {
  SkillsContainer,
  SkillsHeader,
  SkillName,
  SkillsContent,
  SkillsWrapper,
  ProgressbarWrap,
  Progress,
} from "./SkillsElements";
import { skillsData as data } from "./data";
const Skills = forwardRef(({}, ref) => {
  return (
    <SkillsContainer ref={ref}>
      <SkillsHeader>Skills</SkillsHeader>

      <SkillsContent>
        {data.map((skill, index) => {
          return (
            <SkillsWrapper key={index}>
              <SkillName>{skill.name}</SkillName>
              <ProgressbarWrap>
                <Progress width={skill.progress}></Progress>
              </ProgressbarWrap>
            </SkillsWrapper>
          );
        })}
      </SkillsContent>
    </SkillsContainer>
  );
});

export default Skills;
