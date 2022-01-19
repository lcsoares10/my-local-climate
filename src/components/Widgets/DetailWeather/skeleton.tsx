import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width="100%"
    viewBox="0 0 400 280"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="" y="0" width="100%" height="40" /> 
    <rect x="" y="60" width="100%" height="40" /> 
    <rect x="" y="120" width="100%" height="40" /> 
    <rect x="" y="180" width="100%" height="40" /> 
    <rect x="" y="240" width="100%" height="40" /> 

  </ContentLoader>
)

export default Skeleton
