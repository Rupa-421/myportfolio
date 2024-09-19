import styled from "styled-components";
import ImgBg from "../../images/cover.jpg";

export const AboutContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AboutHeader = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 64px;
`;

export const AboutContent = styled.p`
  color: white;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const AboutWrapper = styled.div`
  height: 150px;
`;

export const AboutFooter = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;
