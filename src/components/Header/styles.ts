import styled from "styled-components";

export const Header = styled.header`
  width: 100%;

  min-height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 1px 4px 14px -4px #000000;
  z-index: 3;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.main};
`;
