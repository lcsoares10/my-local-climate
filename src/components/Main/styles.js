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
  height: calc(100vh - 35px);
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    height: 55vh;
  }
`;

export const Mask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    height: 55vh;
  }
`;
export const Article = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0px;
  width: 100%;
`;
