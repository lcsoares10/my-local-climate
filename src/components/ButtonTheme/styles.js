import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({type,theme}) => type && theme.colors.primary};
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 50px;
  left: 10px;
  z-index: 99;
  cursor: pointer;
  padding: 5px;
`;
