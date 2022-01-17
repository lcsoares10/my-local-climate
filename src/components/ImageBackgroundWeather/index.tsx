import Image from "next/image";

import { getWeatherImage } from "../../utils/listWeatherConditions";
import { useEffect, useState } from "react";

type Props = {
  id_weather: number;
};

const ImageBackgroundWeather: React.FC<Props> = ({ id_weather }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const ImageBackground = getWeatherImage(id_weather);
    setImage(ImageBackground);
  }, [id_weather]);

  return (
    <Image
    src={
      image
        ? require("../../../public/".concat(image))
        : require("../../../public/rain.gif")
    }
      alt="Picture of the author"
      layout="fill"
      objectFit="cover"
    />
  );
};

export default ImageBackgroundWeather;
