import { contAbout } from "@/content/data/constants";
import { img4, img8 } from "@/public/assets/images";
import Button from "../ui/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className=" padding flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          {contAbout.preSpan}
          <span className="text-coral-red"> {contAbout.span1} </span>
          <span className="text-coral-red">{contAbout.span2} </span>{" "}
          {contAbout.postSpan}
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">{contAbout.desc1}.</p>
        <p className="mt-6 lg:max-w-lg info-text">{contAbout.desc2}. </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={img8.src}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
