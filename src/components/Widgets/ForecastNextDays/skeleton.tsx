import { SkeletonWheaterCard } from "../WeatherCard/skeleton";
import * as S from "./styles";

const SkeletonForecastNextDays = () => (
  <S.WrapperDays>
    <SkeletonWheaterCard />
    <SkeletonWheaterCard />
    <SkeletonWheaterCard />
    <SkeletonWheaterCard />
  </S.WrapperDays>
);
export default SkeletonForecastNextDays;
