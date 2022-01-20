import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    data-testid="skeleton-temp-max-min"
    speed={2}
    width="100%"
    viewBox="0 0 400 280"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="" y="0" width="100%" height="100" />
    <rect x="" y="130" width="100%" height="100" />
  </ContentLoader>
);

export default Skeleton;
