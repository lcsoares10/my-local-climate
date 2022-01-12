import React, { memo } from "react";
import * as S from "./styles";

export type TemperatureMaxMinProps = {
  isLabel?: string;
  label?: string;
  colorMax?: string;
  colorMin?: string;
};

function TemperatureMaxMin({
  isLabel,
  label,
  colorMax,
  colorMin,
  ...props
}: TemperatureMaxMinProps) {
  return (
    <S.Container {...props}>
      {isLabel && <S.Label>{label}</S.Label>}
      <S.Content>
        <S.Min>
          <S.IconArrowMin colorMin={colorMin} size={50} />
          <S.MinDetail>
            <S.TemperatureMin colorMin={colorMin}>24</S.TemperatureMin>
            <S.Info>min</S.Info>
          </S.MinDetail>
        </S.Min>

        <S.Max>
          <S.IconArrowMax colorMax={colorMax} size={50} />
          <S.MaxDetail>
            <S.TemperatureMax colorMax={colorMax}>24</S.TemperatureMax>
            <S.Info>max</S.Info>
          </S.MaxDetail>
        </S.Max>
      </S.Content>
    </S.Container>
  );
}

export default memo(TemperatureMaxMin);
