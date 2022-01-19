import React, { memo } from "react";
import * as S from "./styles";
import { TTemp } from "../../../types/wheatherData";
import Skeleton from "./skeleton";

export type TTemperatureMaxMin = {
  isLabel?: string;
  label?: string;
  colorMax?: string;
  colorMin?: string;
};
type TemperatureMaxMinProps = TTemperatureMaxMin & { temp: TTemp };

function TemperatureMaxMin({
  isLabel,
  label,
  colorMax,
  colorMin,
  temp,
  ...props
}: TemperatureMaxMinProps) {
  if (!temp) {
    return (
      <>
        <Skeleton></Skeleton>
      </>
    );
  }

  return (
    <S.Container {...props}>
      {isLabel && <S.Label>{label}</S.Label>}
      <S.Content>
        <S.Max>
          <S.IconArrowMax colorMax={colorMax} size={50} />
          <S.MaxDetail>
            <S.TemperatureMax colorMax={colorMax}>{`${temp?.max?.toFixed(
              0
            )}`}</S.TemperatureMax>
            <S.Info>°C</S.Info>
          </S.MaxDetail>
        </S.Max>
        <S.Min>
          <S.IconArrowMin colorMin={colorMin} size={50} />
          <S.MinDetail>
            <S.TemperatureMin colorMin={colorMin}>{`${temp?.min?.toFixed(
              0
            )}`}</S.TemperatureMin>
            <S.Info>°C</S.Info>
          </S.MinDetail>
        </S.Min>
      </S.Content>
    </S.Container>
  );
}

export default memo(TemperatureMaxMin);
