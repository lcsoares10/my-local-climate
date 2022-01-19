import React from "react"
import ContentLoader from "react-content-loader"
import * as S from "./styles";

export const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width="100%"
    viewBox="0 0 400 50"
    backgroundColor="#f3f3f334"
    foregroundColor="#ecebeb55"
    {...props}
  >
    <rect x="" y="0" rx="20" ry="20" width="100%" height="50" /> 


  </ContentLoader>
)

export const SkeletonWheaterCard = (props) => (

    <S.WeatherCard {...props}>
      <S.TemperatureCard {...props}>
       
      </S.TemperatureCard>
      <S.Description {...props}>
        <Skeleton></Skeleton>
      </S.Description>
      <S.Description {...props}>
        <Skeleton></Skeleton>
      </S.Description>
    </S.WeatherCard>

)

