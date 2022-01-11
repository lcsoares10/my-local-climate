import styled from "styled-components";

export const ForecastNextDays = styled.div`
  border-top: 1px solid #cecece;
  padding: 20px;
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;
  }
`;

export const WrapperDays = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px 20px;

  margin-top: 2rem;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: none;
  }
`;
