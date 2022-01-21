import { SkeletonWheaterCard } from "../WeatherCard/skeleton";
import * as S from "./styles";

const SkeletonForecastNextDays = () => (
  <S.WrapperDays data-testid="skeleton-wrapper-days">
    <SkeletonWheaterCard />
    <SkeletonWheaterCard />
    <SkeletonWheaterCard />
    <SkeletonWheaterCard />
  </S.WrapperDays>
);
export default SkeletonForecastNextDays;
