import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  height: 100vh;
  padding: 50px 0 20px 0;
`;

export const TestimonialsHeader = styled.h2`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #173b6c;
  margin: 0 0 50px 0;
`;

export const TestimonialsWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  width: 80vw;
  margin-left:10vw;
`;

export const ScrollContent = styled.div`
  display: flex;
  animation: scroll 30s linear infinite;
  text-wrap: wrap;

  @keyframes scroll {
    0% {
      transform: translateX(80vw);
    }
    80vw {
      transform: translateX(-180vw);
    }
  }
    &:hover{
    animation-play-state: paused
    }
`;
export const Card = styled.div`
  min-width: 450px;
  margin: 0 10px;
  padding: 20px;
  background-color: #dde7f2;
  border-radius: 10px;
  text-align: center;
`;

export const CardImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const CardName = styled.h3`
  font-size: 20px;
  margin: 10px 0;
`;

export const CardDescription = styled.p`
  font-size: 18px;
  color: #555;
  font-family: "Georgia", serif;
  font-style: italic;
`;
