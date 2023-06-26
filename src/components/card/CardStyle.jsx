import styled from "styled-components";
import Flex from "../../styles/Flex";

export const MainContainer = styled(Flex)`
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

export const CardContainer = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.fourth};
  padding: 1rem;
  border-radius: 0.5rem;
  flex-direction: column;
  margin: 1rem;
  width: 300px;
  height: 320px;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.second};
`;
export const CardImage = styled.img`
  width: 150px;
  border-radius: 0.5rem;
`;

export const CardButton = styled.button`
  border: none;
  padding: 0.5rem;
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.second};
  color: ${({ theme }) => theme.colors.fourth};
  &:hover {
    cursor: pointer;
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.second};
    color: ${({ theme }) => theme.colors.second};
  }
`;
