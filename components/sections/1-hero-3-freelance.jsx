import { contFreelanceHero, statisticsFreelance } from "@/content/data";
import { info, arrowRight } from "@/public/assets/icons";
import { rcHero } from "@/public/assets/images";
import IconDynamic from "@/components/icons/dynamicIcon";

const FreelanceHero = () => {
  return (
    <section
      id="hero"
      className="container mx-auto container-p my-12 md:my-20 lg:mt-32 flex flex-col lg:flex-row justify-center gap-0"
    >
      <div className="xl:w-1/2 xl:pr-2 text-center xl:text-left">
        <p className="mb-8 text-xs text-left md:text-lg font-montserrat text-coral-red">
          {contFreelanceHero.coral1}
          <br />
          {contFreelanceHero.coral2}
        </p>
        <h1 className="font-palanquin text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          <span className="text-coral-red inline-block lg:mb-10">
            {contFreelanceHero.fline}
          </span>
          <br />
          <span className="lg:bg-white lg:whitespace-nowrap relative z-50 xl:pr-12">
            {contFreelanceHero.span}
          </span>
        </h1>
        <p className="text-xs md:text-lg font-montserrat text-slate-gray leading-4 ">
          {contFreelanceHero.quoteEn1} <br />
          {contFreelanceHero.quoteEn2}
        </p>
        <p>{contFreelanceHero.from}</p>
        <div className="flex my-8 flex-row space-x-4 justify-center xl:justify-start">
          <a href="#footer" className="btn-hero bg-coral-red text-white">
            {contFreelanceHero.btn1}
            <IconDynamic icon="arrow-right" svgClass="h-8 w-8" svgColor="red" />
          </a>
          <a href="#" className="btn-hero bg-white text-black">
            {contFreelanceHero.btn2}
            {/* <img
              src={info.src}
              alt="info icon"
              className="ml-2 rounded-full bg-white w-8 h-8"
            /> */}
            <IconDynamic icon="info" svgClass="h-8 w-8" />
          </a>
        </div>
        <p className="text-xs mb-8 font-montserrat text-slate-gray leading-4 ">
          <sup>*</sup> {contFreelanceHero.info}
        </p>

        {/* <div className="flex justify-start items-start flex-wrap w-full my-12 gap-8 md:gap-16">
          {statisticsFreelance.map((stat) => (
            <div key={stat.id}>
              <p className="text-2xl sm:text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>

      {/* hidden lg:flex  bg-hero */}
      <div className="lg:w-1/2 flex flex-col justify-end items-center border bg-[url('/assets/images/ziyaretci.png')] bg-cover relative rounded-2xl">
        <img
          src={rcHero.src}
          alt="img colletion"
          width={480}
          height={400}
          className="px-4 md:border border-b-0 bg-white/10 border-black/20"
        />
        <p className="px-4 md:px-8 m-0 py-2 mb-10 text-center bg-white/20 w-full border-black border-y">
          {contFreelanceHero.quote}
        </p>
      </div>
    </section>
  );
};

export default FreelanceHero;
