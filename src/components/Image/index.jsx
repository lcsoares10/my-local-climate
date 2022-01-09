import Image from "next/image";
import chuva from "../../../public/chuva.svg";

const MyImage = (props) => {
  return (
    <Image
      src={chuva}
      alt="Picture of the author"
      layout="fill"
      objectFit="cover"
      style={{ zIndex: "1" }}
    />
  );
};

export default MyImage;
