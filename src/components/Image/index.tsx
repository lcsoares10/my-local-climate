import Image from "next/image";
import chuva from "../../../public/chuva.svg";

const MyImage: React.FC = () => {
  return (
    <Image
      src={chuva}
      alt="Picture of the author"
      layout="fill"
      objectFit="cover"
    />
  );
};

export default MyImage;
