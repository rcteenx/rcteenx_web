import { skillBar, contBioHero, statistics } from "@/content/data";
import { rcHero } from "@/public/assets/images";
import SkillBar from "../ui/SkillBar";

const About = () => {
  return (
    <section
      id="hero"
      className="container mx-auto container-p mt-20 lg:my-32 flex flex-col xl:flex-row justify-center space-y-8 xl:space-y-0"
    >
      <div className="xl:w-1/2">
        <p className="mb-8 text-xs md:text-lg font-montserrat text-coral-red">
          {contBioHero.coral1}
          <br />
          {contBioHero.coral2}
        </p>
        <h1 className="font-palanquin text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-50 pr-12">
            {contBioHero.fline}
          </span>
          <br />
          <span className="text-coral-red inline-block xl:my-4">
            {contBioHero.span}
          </span>
          <br />
          {contBioHero.sline}
        </h1>
        <div className="box-shadow max-w-sm bg-white text-grey-700 rounded-2xl mx-auto xl:mx-2">
          <div className="flex flex-col gap-2 p-4">
            {skillBar.map((sb) => (
              <SkillBar key={sb.id} label={sb.label} percent={sb.percent} />
            ))}
          </div>
        </div>
      </div>
      <div className="xl:w-1/2 flex flex-col justify-end items-center border bg-[url('/assets/images/ziyaretci.png')] bg-cover relative rounded-2xl">
        <img
          src={rcHero.src}
          alt="img colletion"
          width={480}
          height={400}
          className="px-4 md:border border-b-0 bg-white/10 border-black/20"
        />
        <p className="px-4 md:px-8 m-0 py-2 mb-10 text-center bg-white/20 w-full border-black border-y">
          {contBioHero.quote}
        </p>
      </div>
    </section>
  );
};

export default About;
