import styled from "styled-components";

export const ForecastNextDays = styled.div`
  border-top: 3px solid rgba(255, 255, 255, 0.2);
  padding: 20px;


  h4 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;
  }

`;

export const WrapperDays = styled.div`
  display: grid;
  align-items: center;
  /* grid-template-columns: repeat(2,150px); */
  grid-template-columns: repeat(auto-fill,300px);
  grid-gap:  1rem;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    overflow-x: scroll;
    padding: 30px;
  }
`;
