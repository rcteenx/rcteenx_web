import { skillBar, contBioHero, statistics } from "@/content/data";
import { rcHero } from "@/public/assets/images";
import SkillBar from "../ui/SkillBar";

const About = () => {
  return (
    <section
      id="hero"
      className="container mx-auto container-p mt-12 md:mt-20 lg:mt-32 flex flex-col xl:flex-row justify-center gap-0"
    >
      <div className="xl:w-1/2 xl:pr-2 text-center xl:text-left">
        <p className="mb-8 text-xs text-left md:text-lg font-montserrat text-coral-red">
          {contBioHero.coral1}
          <br />
          {contBioHero.coral2}
        </p>
        <h1 className="font-palanquin text-center md:text-left text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold my-4">
          <span className="lg:bg-white lg:whitespace-nowrap relative z-50 lg:pr-12 lg:rounded-lg">
            {contBioHero.fline}
          </span>
          <br />
          <span className="text-coral-red inline-block lg:my-4">
            {contBioHero.span}
          </span>
          <br />
          {contBioHero.sline}
        </h1>
        <div className="box-shadow w-100 lg:max-w-sm bg-white text-grey-700 rounded-2xl mx-auto lg:mx-2">
          <div className="flex flex-col gap-2 p-4">
            <h2 className="mx-3 mt-1 mb-0 text-coral-red">Skill Set</h2>
            {skillBar.map((sb) => (
              <SkillBar key={sb.id} label={sb.label} percent={sb.percent} />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col justify-end items-center border bg-[url('/assets/images/ziyaretci.png')] bg-cover relative rounded-2xl">
        <img
          src={rcHero.src}
          alt="img colletion"
          width={480}
          height={400}
          className="px-4 md:border border-b-0 bg-white/10 border-black/20"
        />
        <div className="px-4 md:px-8 m-0 py-2 mb-10 text-center  bg-white/40 w-full border-y">
          <h3 className="m-0 font-normal">{contBioHero.quoteTitle}</h3>
          <p className="m-0 font-thin">{contBioHero.quote}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
