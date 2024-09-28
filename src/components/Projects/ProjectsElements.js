import styled from "styled-components";
export const ProjectsContainer = styled.div`
  padding: 50px 0 20px 0;
  display: flex;
  flex-direction: column;
  background-color: #dde7f2;
`;

export const ProjectsHeader = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #173b6c;
`;

export const ProjectsCard = styled.div`
  display: flex;
  padding: 30px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-radius: 5px;
`;

export const Card = styled.div`
  box-shadow: 5px 13px 8px -10px rgb(79 151 198 / 67%);
  width: 350px;
  margin: 20px;
  border-radius: 5px;
  background-color: #fff;
  padding-bottom:10px;
`;

export const CardImage = styled.img`
  height: 200px;
  width: 100%;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  `;

export const CardName = styled.h3`
  margin: 10px;
  font-size: 22px;
`;

export const CardDescription = styled.p`
  margin: 10px;
  font-size: 20px;
  font-family: "Lucida Grande", serif;
`;
