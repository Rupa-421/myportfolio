import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  height: 100vh;
  padding: 50px 0 20px 0;
`;

export const TestimonialsHeader = styled.h2`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #7d0669;
  margin: 0 0 50px 0;
`;

export const TestimonialsWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
`;

export const ScrollContent = styled.div`
  display: flex;
  animation: scroll 40s linear infinite;
  text-wrap: wrap;

  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
export const Card = styled.div`
  min-width: 450px;
  margin: 0 10px;
  padding: 20px;
  background-color: #f2c9ef;
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
