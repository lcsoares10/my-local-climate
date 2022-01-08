import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  max-width: 1400px;
  min-height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.color};
`;
