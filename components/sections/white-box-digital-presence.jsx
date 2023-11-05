import { digitalPresenceAreas } from "@/content/data/white-box";
import TempWhiteBox from "../temp/TempWhiteBox";

const WhiteBoxSection = () => {
  return (
    <TempWhiteBox
      sectionId="digital-presence"
      title="Dijital Varlık Alanları"
      boxes={digitalPresenceAreas}
    />
  );
};

export default WhiteBoxSection;
