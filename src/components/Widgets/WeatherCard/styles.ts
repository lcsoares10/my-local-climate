import styled from "styled-components";
import { WeatherCardProps } from "./index";

export const WeatherCard = styled.div<WeatherCardProps>`

  cursor: ${({ inline }) => !inline && "pointer"};
  display: flex;
  gap: ${({ inline }) => inline && "2rem"};
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
  background: ${({ inline }) => !inline && "rgba(255, 255, 255, 0.08)"};
  border: ${({ inline }) => !inline && "1px solid #7a7a7a"};
  box-shadow: ${({ inline }) => !inline && "0px 4px 4px rgba(0, 0, 0, 0.25)"};
  border-radius: 20px;
  padding: 20px 0px;
  /* margin-left: ${({ inline }) => !inline && "2rem"}; */
  transition: 1s;

  transform: ${({ hoverEffect, selected }) =>
    hoverEffect && selected && "scale(1.04)"};
  transition: ${({ hoverEffect, selected }) =>
    hoverEffect && selected && "0.5s"};
  background: ${({ hoverEffect, selected }) =>
    hoverEffect && selected && "rgba(0, 0, 0, 0.5)"};

  &:hover {
    transform: ${({ hoverEffect }) => hoverEffect && "scale(1.04)"};
    transition: ${({ hoverEffect }) => hoverEffect && "0.5s"};
    background: ${({ hoverEffect }) => hoverEffect && "rgba(0, 0, 0, 0.5)"};
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {

    gap: 0px;
    justify-content: space-between;
  }
`;
export const Description = styled.div<WeatherCardProps>`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ inline }) => inline && 600};
  margin: 5px;
  order: ${({ inline }) => inline && 2};
  font-size: ${({ inline }) => (inline ? "4rem" : "1rem")};
  text-transform: capitalize;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ inline }) => (inline ? "2rem !important" : "1rem !important")};
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 0.8rem !important;
  }
`;

export const IconCard = styled.div<WeatherCardProps>`
  width:50%;
  max-width: ${({ inline }) => (inline ? "200px" : "120px")};
  order: ${({ inline }) => inline && 3};
  min-width: ${({ inline }) => (inline ? "50px" : "120px")};;
  > div{
    min-height: 130px;
  }
`;

export const ContentTemp = styled.div<WeatherCardProps>`
  order: ${({ inline }) => inline && 1};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TemperatureCard = styled.p<WeatherCardProps>`
  font-weight: 300;
  font-size: ${({ inline }) => (inline ? "12rem" : "2rem")};
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ inline }) => (inline ? "6rem !important" : "3rem !important")};
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {

  }
  white-space: nowrap;
  display:flex;
  align-items: center;
`;
  export const CelsiusText = styled.span`

    margin-left:2px;
    margin-right:5px;
    font-size: 1rem;
    font-weight: 100;
    text-align: center;
  `;

export const DateCurrent = styled.p<WeatherCardProps>`
  font-size: 1.2rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 0.8rem !important;
  }
  
`;


