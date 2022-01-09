import styled from "styled-components";

export const Aside = styled.div`
  flex: 20%;
  z-index: 1;
  background-color: red;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: -4px 5px 12px -4px #000000;
  z-index: 3;
  p,
  span {
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

export const TextLine = styled.div`
  margin: 25px 0px;
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.div`
  padding: 20px;
  h3,
  h2 {
    font-weight: 300;
    margin: 10px 0px;
    color: ${(props) => props.theme.colors.color};
  }
`;

export const Article = styled.div`
  margin: 20px 0px;
`;
