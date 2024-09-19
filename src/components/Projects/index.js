import { forwardRef, React } from "react";
import {
  ProjectsCard,
  ProjectsHeader,
  ProjectsContainer,
  Card,
  CardImage,
  CardName,
  CardDescription,
  CardFooter,
  ViewButton,
} from "./ProjectsElements";
import { ProjectsData as data } from "./data";
const Projects = forwardRef(({}, ref) => {
  return (
    <ProjectsContainer ref={ref}>
      <ProjectsHeader>Projects</ProjectsHeader>
      <ProjectsCard>
        {data.map((project, index) => {
          return (
            <Card key={index}>
              <CardImage src={project.img} alt={project.alt}></CardImage>
              <CardName>{project.name}</CardName>
              <CardDescription>{project.description}</CardDescription>
              <CardFooter>
                <ViewButton>
                  <a href={project.link} target="_blank">
                    View
                  </a>
                </ViewButton>
              </CardFooter>
            </Card>
          );
        })}
      </ProjectsCard>
    </ProjectsContainer>
  );
});

export default Projects;
