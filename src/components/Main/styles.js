import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  flex: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Mask = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Aside = styled.div`
  width: 100%;
  max-width: 300px;
  z-index: 1;
  background-color: red;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
`;
