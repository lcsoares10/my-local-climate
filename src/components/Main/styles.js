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
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    height: 55vh;
  }
`;

export const Mask = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    height: 55vh;
  }
`;
