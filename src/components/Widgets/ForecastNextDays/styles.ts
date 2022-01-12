import styled from "styled-components";

export const ForecastNextDays = styled.div`
  border-top: 3px solid rgba(255, 255, 255, 0.2);
  padding: 20px;
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const WrapperDays = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px 20px;
  margin-top: 2rem;
`;
