import React from "react";
import styled from "styled-components";

const AboutScroller = ({ scrollToSection }) => {
  return <Scrollerbutton onClick={()=>scrollToSection('contact')}>Hire me</Scrollerbutton>;
};

export const Scrollerbutton = styled.button`
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
export default AboutScroller;
