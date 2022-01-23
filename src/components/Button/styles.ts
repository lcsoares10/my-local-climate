import styled from "styled-components";
export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid #7a7a7a;
  padding: 1rem;
  border-radius:10px ;
  cursor: pointer;
  &:hover {
    transition:  0.5s;
    background: rgba(0, 0, 0, 0.5)
  }
`;