import styled from "styled-components";
import Flex from "../../styles/Flex";

export const Title = styled.h1`
  margin-top: 1rem;
  font-size: 2.6rem;
  color: ${({ theme }) => theme.colors.fourth};
`;

export const HeaderContainer = styled(Flex)`
  width: 100%;
  margin: 2rem auto;
  flex-direction: column;
`;

export const HeaderForm = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 80%;
  border: 2px solid ${({ theme }) => theme.colors.fourth};
  border-radius: 0.4rem;
  margin-top: 1rem;
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.fourth};
  border: none;
  border-radius: 0rem 0.2rem 0.2rem 0rem;
  color: ${({ theme }) => theme.colors.second};
  height: 2.5rem;
  font-size: 1.5rem;
  width: 2rem;
  margin: 1rem 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.second};
    color: ${({ theme }) => theme.colors.fourth};
    border: 2px solid ${({ theme }) => theme.colors.fourth};
    transition: all 0.3s ease-in;
    cursor: pointer;
  }
  margin-right: 1rem;
`;

export const HeaderInput = styled.input`
  height: 2.5rem;
  max-width: 15rem;
  border-radius: 0.2rem 0 0 0.2rem;
  border: none;
  color: ${({ theme }) => theme.colors.fourth};
  padding: 0.4rem;
  margin: 1rem 0;
  margin-left: 1rem;
  font-size: 1.2rem;
`;

export const HeaderSelect = styled.select`
  height: 2.5rem;
  border: none;
  border-radius: 0.2rem;
  margin: 1rem 1rem 1rem 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fourth};
  padding: 0.4rem;
  font-size: 1.2rem;
`;
