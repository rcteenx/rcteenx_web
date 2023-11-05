import { contOffer } from "@/content/data";
import { info, arrowRight } from "@/public/assets/icons";
import { discount } from "@/public/assets/images";

const Offer = () => {
  return (
    <section className="container mx-auto container-p pt-16 md:pt-24 flex items-center max-xl:flex-col-reverse gap-10 max-container">
      <img src={discount.src} alt="Img Promotion" width={640} height={480} />
      <div className="flex flex-col justify-center gap-1">
        <h2 className="text-4xl font-palanquin">
          <span className="text-coral-red">{contOffer.span}</span>{" "}
          {contOffer.postSpan}
        </h2>
        <p className="info-text">{contOffer.desc1}</p>
        <p className="info-text">{contOffer.desc2}</p>
        <div className="mt-4 flex flex-row space-x-4">
          {/* <a href="#" className="btn-hero bg-coral-red text-white">
            {contOffer.btn1}
            <img
              src={arrowRight.src}
              alt="arrow right icon"
              className="ml-2 rounded-full bg-white w-8 h-8"
            />
          </a>
          <a href="#" className="btn-hero bg-white text-black">
            {contOffer.btn2}
            <img
              src={info.src}
              alt="arrow right icon"
              className="ml-2 rounded-full bg-white w-8 h-8"
            />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Offer;
