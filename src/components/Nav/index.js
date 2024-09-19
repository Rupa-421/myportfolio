import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import { useState } from "react";
import {
  Navbar,
  MenuBars,
  NavMenu,
  NavMenuItems,
  NavBarToggle,
  NavText,
} from "./NavElements";
import { NavbarData } from "./NavbarData";
const Nav = ({ scrollToSection }) => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <style>
   
    </style>
      <IconContext.Provider value={{ color: "#7d0669" }}>
        <Navbar>
          <MenuBars>
            <FaIcons.FaBars onClick={showSidebar} />
          </MenuBars>
        </Navbar>
        <NavMenu sidebar={sidebar}>
          <NavMenuItems onClick={showSidebar}>
            <NavBarToggle>
              <AiIcons.AiOutlineClose />
              <span>Close</span>
            </NavBarToggle>
            {NavbarData.map((item, index) => {
              return (
                <NavText key={index} onClick={() => scrollToSection(item.path)}>
                  {item.icon}
                  <span >{item.title}</span>
                </NavText>
              );
            })}
          </NavMenuItems>
        </NavMenu>
      </IconContext.Provider>
    </>
  );
};

export default Nav;
