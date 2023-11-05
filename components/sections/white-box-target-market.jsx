import { targetMarket } from "@/content/data/white-box";
import TempWhiteBox from "../temp/TempWhiteBox";

const WhiteBoxSection = () => {
  return (
    <TempWhiteBox
      sectionId="services"
      title="Hedef Dönüşüm Aşamaları"
      boxes={targetMarket}
    />
  );
};

export default WhiteBoxSection;
