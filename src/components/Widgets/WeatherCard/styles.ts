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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px 30px;
  margin-left: ${({ inline }) => !inline && "2rem"};
  transition: 1s;
  flex-wrap:wrap &:hover {
    transform: ${({ hoverEffect }) => hoverEffect && "scale(1.04)"};
    transition: ${({ hoverEffect }) => hoverEffect && "0.5s"};
    background: ${({ hoverEffect }) => hoverEffect && "rgba(0, 0, 0, 0.5)"};
  }
`;
export const Description = styled.div<WeatherCardProps>`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ inline }) => inline && 600};
  margin-top: -15px;
  order: ${({ inline }) => inline && 2};
  font-size: ${({ inline }) => (inline ? "4rem" : "1rem")};
  text-transform: capitalize;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 3rem !important;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 2rem !important;
  }
`;

export const IconCard = styled.div<WeatherCardProps>`
  width: 100%;
  max-width: ${({ inline }) => (inline ? "200px" : "120px")};
  order: ${({ inline }) => inline && 3};
  min-width: 100px;
`;

export const TemperatureCard = styled.div<WeatherCardProps>`
  font-weight: 300;
  font-size: ${({ inline }) => (inline ? "10rem" : "2rem")};
  color: ${({ theme }) => theme.colors.white};
  order: ${({ inline }) => inline && 1};
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 8rem !important;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 5rem !important;
  }
`;
