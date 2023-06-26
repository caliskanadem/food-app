import Nav, { Logo, Menu, MenuLink, NavButton } from "./NavbarStyles";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import shef from "../../assets/shef.png";

const Navbar = ({ themeToogle, theme }) => {
  return (
    <Nav justify="space-between" wrap="warp">
      <Logo to="/">
        <img src={shef} alt="gulhan" width="150px" />
      </Logo>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/register">Register</MenuLink>
        <MenuLink to="/login" onClick={() => sessionStorage.clear()}>
          Logout
        </MenuLink>

        <NavButton onClick={() => themeToogle()}>
          {theme === "light" ? (
            <BsFillSunFill style={{ fontSize: "2.5rem", color: "#FFC9D9" }} />
          ) : (
            <BsFillMoonFill style={{ fontSize: "2.5rem", color: "#eee" }} />
          )}
        </NavButton>
      </Menu>
    </Nav>
  );
};

export default Navbar;
