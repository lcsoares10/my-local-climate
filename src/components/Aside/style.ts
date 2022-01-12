import styled from "styled-components";

export const Aside = styled.div`
  flex: 20%;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: -4px 5px 12px -4px #000000;
  z-index: 3;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin-top: -50px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }
`;

export const Section = styled.div`
  padding: 20px;
  h3,
  h2 {
    font-weight: 100;
    margin: 10px 0px;
    color: ${(props) => props.theme.colors.main};
  }
`;

export const Article = styled.div`
  margin: 20px 0px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  padding: 20px 10px;
`;
