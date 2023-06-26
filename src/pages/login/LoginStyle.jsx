import styled from "styled-components";
import Flex from "../../styles/Flex";

export const LoginContainer = styled(Flex)`
  height: 100vh;
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled(Flex)`
  width: 40rem;
  height: 40rem;
  max-width: 50rem;
  background: ${({ theme }) => theme.colors.sixth};
  border-radius: 50%;
  border: 2px solid #e1f1dd;
  padding: 0.5rem;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    max-width: 30rem;
    max-height: 30rem;
  }
  @media (max-width: 482px) {
    max-width: 22rem;
    max-height: 22rem;
  }
`;

export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.first};
  font-size: 3rem;
  @media (max-width: 482px) {
    font-size: 2rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  height: 3rem;
  font-size: 2rem;
  width: 15rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.third};
  border: none;
  color: ${({ theme }) => theme.colors.first};
  margin: 1rem;
  text-indent: 1rem;
  @media (max-width: 482px) {
    font-size: 1.2rem;
    width: 10rem;
    height: 2rem;
    margin: 0.5rem;
  }
`;

export const StyledButton = styled.button`
  font-size: 2rem;
  background: ${({ theme }) => theme.colors.third};
  color: ${({ theme }) => theme.colors.first};
  border: none;
  margin: 1rem;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 482px) {
    font-size: 1.2rem;
    width: 10rem;
    height: 2rem;
    margin: 0.5rem;
  }
`;
