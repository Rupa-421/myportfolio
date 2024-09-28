import styled from "styled-components";
import { Link } from "react-router-dom";
export const Navbar = styled.div`
  background-color: transparent;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  position: fixed;
  z-index: 999;
`;

export const MenuBars = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
`;

export const NavMenu = styled.nav`
  background-color: black;
  z-index: 999;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  transition: ${(props) => (props.sidebar ? "350ms" : "850ms")};
`;

export const NavMenuItems = styled.ul`
  width: 100%;
  padding: 0;
`;

export const NavBarToggle = styled.button`
  background-color: black;
  width: 95%;
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  padding: 8px 0 8px 16px;
  font-size: 18px;
  border: none;
  color: white;
  background-color: black;
  border-radius:0;
`;

export const NavText = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0 8px 16px;
  height: 60px;
  color: white;
  font-size: 18px;
  width: 95%;
  background-color: transparent;
  cursor: pointer;
  border: none;
  background-color: black;
  border-radius:0;
`;
