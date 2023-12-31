import { contAbout } from "@/content/data";
import { about } from "@/public/assets/images";
import IconDynamic from "@/components/icons/dynamicIcon";

const SuperQuality = () => {
  return (
    <section
      id="super-quality"
      className="container mx-auto container-p pt-16 md:pt-24 flex flex-col lg:flex-row justify-between items-center gap-10"
    >
      <div className="lg:w-1/2 flex flex-col">
        <h2 className="font-palanquin text-4xl font-bold">
          {contAbout.preSpan}
          <span className="text-coral-red"> {contAbout.span1} </span>
          <br />
          <span className="text-coral-red">{contAbout.span2} </span>{" "}
          {contAbout.postSpan}
        </h2>
        <p className="mt-4 info-text">{contAbout.desc1}</p>
        <p className="mt-4 info-text">{contAbout.desc2}</p>
        <a href="#" className="my-4 mr-auto btn-hero bg-coral-red text-white">
          {contAbout.btn}
          <IconDynamic icon="arrow-right" svgClass="h-8 w-8" svgColor="red" />
        </a>
      </div>
      <img
        src={about.src}
        alt="product detail"
        width={570}
        height={522}
        className="object-contain"
      />
    </section>
  );
};

export default SuperQuality;
