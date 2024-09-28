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
  return <button onClick={handleDownload}>Get Resume</button>;
};

export default Resume;
