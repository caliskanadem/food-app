import styled from "styled-components";
import Flex from "../../styles/Flex";
import { NavLink } from "react-router-dom";

const Nav = styled(Flex)`
  padding: 0.4rem 1rem;
  background: ${({ theme }) => theme.colors.fourth};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Logo = styled(NavLink)`
  color: ${({ theme }) => theme.colors.firts};
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
`;
export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    transition: max-height 0.3s ease-in;
  }
`;

export const MenuLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.fifth};
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.third};
    transition: all 0.3s ease-in;
    transform: scale(0.9);
    font-weight: 600;
  }
  text-decoration: none;
  padding: 1rem 0;
  margin: 0 1.2rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.third};
    width: 100%;
    transition: all 0.3s ease-in;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.third};
    width: 100%;
    transition: all 0.3s ease-in;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.third};
    width: 100%;
    transition: all 0.3s ease-in;
  }
`;

export const NavButton = styled.button`
  padding: 1rem;
  border: none;
  background: none;
  cursor: pointer;
`;

export default Nav;
