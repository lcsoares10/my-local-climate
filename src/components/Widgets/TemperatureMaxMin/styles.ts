import styled, { CSSObject } from "styled-components";
import { ArrowUpward } from "@styled-icons/material/ArrowUpward";
import { ArrowDownward } from "@styled-icons/material/ArrowDownward";
import { TTemperatureMaxMin } from "./index";

export const IconArrowMax = styled(ArrowUpward)<TTemperatureMaxMin>`
  color: ${({ colorMax }) => (colorMax ? colorMax : "#F29292")} !important;
`;
export const IconArrowMin = styled(ArrowDownward)<TTemperatureMaxMin>`
  color: ${({ colorMin }) => (colorMin ? colorMin : "#78C2E1")}!important;
`;

type ContainerProps = {
  backgroundColor?: CSSObject;
};
export const Container = styled.div<ContainerProps>`
  display: flex;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "none"};
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
  }
`;

export const Label = styled.label``;

export const Min = styled.div`
  display: flex;
  align-items: center;
`;

export const Max = styled(Min)``;

export const MaxDetail = styled.div`
  display: flex;
  align-items: center;
`;

export const MinDetail = styled(MaxDetail)``;

export const TemperatureMax = styled.span<TTemperatureMaxMin>`
  font-size: 6rem !important;
  font-weight: 900;
  color: ${({ colorMax }) => (colorMax ? colorMax : "#F29292")} !important;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 6rem !important;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 4rem !important;
  }
`;

export const TemperatureMin = styled(TemperatureMax)<TTemperatureMaxMin>`
  color: ${({ colorMin }) => (colorMin ? colorMin : "#78C2E1")}!important;
`;

export const Info = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.secondary};
`;
