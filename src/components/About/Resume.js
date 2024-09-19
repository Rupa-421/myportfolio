import React from "react";
import styled from "styled-components";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1jmE8qLI40wY2YRdh0TncTizD4KZTG_Xw";
    link.download = "Rupasri_Achanta.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <Resumebutton onClick={handleDownload}>Get Resume</Resumebutton>;
};

export const Resumebutton = styled.button`
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
`;
export default Resume;
