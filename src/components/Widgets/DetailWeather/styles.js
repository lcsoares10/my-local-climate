import styled from "styled-components";
export const TextLine = styled.div`
  margin: 25px 12px;
  display: flex;
  justify-content: space-between;

  p,
  span {
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;
