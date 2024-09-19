import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavbarData = [
  {
    title: "Home",
    path: "about",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Experience",
    path: "experience",
    icon: <FaIcons.FaBusinessTime />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "projects",
    icon: <FaIcons.FaFileCode />,
    cName: "nav-text",
  
  },
  {
    title: "Skills",
    path: "skills",
    icon: <FaIcons.FaTools />,
    cName: "nav-text",
  },

  {
    title: "Education",
    path: "education",
    icon: <FaIcons.FaBookReader />,
    cName: "nav-text",
  },
  {
 title: "Testimonials",
 path: "testimonials",
 icon: <IoIcons.IoMdContact />,
 cName: "nav-text",
  },
  {
    title: "Contact",
    path: "contact",
    icon: <IoIcons.IoMdContact />,
    cName: "nav-text",
  },
  
];
