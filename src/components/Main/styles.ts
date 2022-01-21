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

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    height: calc(100vh - 35px);
  }
`;

type TContentProps = {
  srcImg:string
}
export const Content = styled.div<TContentProps>`

  width: 100%;
  background: ${({srcImg})=> ` url(${srcImg})`};
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode:color;
  overflow:auto ;
  z-index: 1;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; 

  

  @media (min-width: ${({ theme }) => theme.media.tablet}) {

    position: absolute;
    
  }

`;
export const Article = styled.div`
  padding: 20px;

  bottom: 0px;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    position: relative; 

  }
`;

export const localeText = styled.p`
  float: right;
  font-size: 2rem;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
`;
