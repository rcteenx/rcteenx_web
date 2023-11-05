import { services } from "@/content/data/white-box";
import TempWhiteBox from "../temp/TempWhiteBox";

const WhiteBoxSection = () => {
  return (
    <TempWhiteBox
      sectionId="services"
      title="Kalite Standartları"
      boxes={services}
    />
  );
};

export default WhiteBoxSection;
