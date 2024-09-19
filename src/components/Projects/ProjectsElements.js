import styled from "styled-components";
export const ProjectsContainer = styled.div`
  padding: 50px 0 20px 0;
  display: flex;
  flex-direction: column;
  background-color: #f2c9ef;
`;

export const ProjectsHeader = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #7d0669;
`;

export const ProjectsCard = styled.div`
  display: flex;
  padding: 30px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-radius: 5px;
`;

export const Card = styled.div`
  box-shadow: 5px 13px 8px -10px rgb(208 44 173 / 67%);
  width: 350px;
  margin: 20px;
  border-radius: 5px;
  background-color: #fff;
`;

export const CardImage = styled.img`
  height: auto;
  width: 100%;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewButton = styled.button`
  border-top: 1px solid #e597f7;
  background: #ce65d6;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#a621a4),
    to(#ce65d6)
  );
  background: -webkit-linear-gradient(top, #a621a4, #ce65d6);
  background: -moz-linear-gradient(top, #a621a4, #ce65d6);
  background: -ms-linear-gradient(top, #a621a4, #ce65d6);
  background: -o-linear-gradient(top, #a621a4, #ce65d6);
  padding: 8.5px 17px;
  -webkit-border-radius: 17px;
  -moz-border-radius: 17px;
  border-radius: 17px;
  -webkit-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
  -moz-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
  box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
  text-shadow: rgba(0, 0, 0, 0.4) 0 1px 0;
  color: white;
  font-size: 14px;
  cursor: pointer;
  font-family: Georgia, Serif;
  text-decoration: none;
  vertical-align: middle;
  &:hover {
    border-top-color: #692878;
    background: #692878;
    color: #ccc;
  }
  &:active {
    border-top-color: #581b5c;
    background: #581b5c;
  }
    margin: 10px;
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
