import styled from "styled-components";

export const Aside = styled.div`
  flex: 20%;
  z-index: 1;
  background-color: red;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
`;
