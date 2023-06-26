import styled from "styled-components";
import Flex from "../../styles/Flex";

export const DetailContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  height: 110vh;
  justify-content: start;
  background: ${({ theme }) => theme.colors.third};
  color: ${({ theme }) => theme.colors.fourth};
  /* padding: 0.5rem; */
  & > * {
    font-family: "Girassol", cursive;
  }
`;

export const HeaderContainer = styled(Flex)`
  color: ${({ theme }) => theme.colors.first};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    text-align: center;
    flex-direction: column;
    transition: max-height 0.3s ease-in;
    margin: 1rem;
  }
`;

export const DetailTitle = styled.h1`
  font-size: 2.2rem;
`;
export const DetailImg = styled.img`
  margin-left: 1rem;
  width: 250px;
`;

export const DetailMainContainer = styled(Flex)`
  width: 80%;
  height: 2100px;
  background: ${({ theme }) => theme.colors.fifth};
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  justify-content: space-around;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: ${({ theme }) => theme.screens.lg};
    flex-direction: column;
    transition: max-height 0.3s ease-in;
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width: ${({ theme }) => theme.screens.md};
    transition: max-height 0.3s ease-in;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    width: ${({ theme }) => theme.screens.sm};
    transition: max-height 0.3s ease-in;
  }
`;

export const DetailNutsContainer = styled.div`
  width: 400px;
  flex-direction: column;
  text-align: right;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    margin: 1rem;
    width: ${({ theme }) => theme.screens.lg};
    text-align: center;
    width: 80%;
    transition: max-height 0.3s ease-in;
  }
`;

export const DetailImgContainer = styled.img`
  width: 300px;
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

export const DetailMatsContainer = styled.div`
  width: 400px;
  flex-direction: column;
  text-align: left;
  padding: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 880px;
    text-align: center;
    transition: max-height 0.3s ease-in;
    padding: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width: 580px;
    transition: max-height 0.3s ease-in;
    padding: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    transition: max-height 0.3s ease-in;
    width: 380px;
    padding: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.screens.xs}) {
    transition: max-height 0.3s ease-in;
    width: 360px;
    padding: 1rem;
  }
`;

export const DetailInformation = styled(Flex)`
  width: 400px;
  flex-direction: column;
  text-align: left;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: ${({ theme }) => theme.screens.lg};
    text-align: center;
    margin: 1rem;
    transition: max-height 0.3s ease-in;
    width: 80%;
  }
`;
