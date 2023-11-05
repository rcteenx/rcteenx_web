import { digitalSkills } from "@/content/data/white-box";
import TempWhiteBox from "../temp/TempWhiteBox";

const WhiteBoxSection = () => {
  return (
    <TempWhiteBox
      sectionId="digital-skills"
      title="Dijital Yetkinlikler"
      boxes={digitalSkills}
    />
  );
};

export default WhiteBoxSection;
