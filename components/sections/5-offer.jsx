import { contOffer } from "@/content/data/constants";
import { info, arrowRight } from "@/public/assets/icons";
import { offer } from "@/public/assets/images";

const Offer = () => {
  return (
    <section className="container-p pt-16 md:pt-24 flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer.src}
          alt="Img Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">{contOffer.span}</span>{" "}
          {contOffer.postSpan}
        </h2>
        <p className="mt-4 info-text">{contOffer.desc1}</p>
        <p className="mt-6 info-text">{contOffer.desc2}</p>
        <div className="flex flex-row space-x-4">
          <a href="#" className="btn-hero bg-coral-red text-white">
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
          </a>
        </div>

        {/* <div className="mt-11 flex flex-wrap gap-4">
          <Button label={contOffer.btn1} iconURL={arrowRight.src} />
          <Button
            label={contOffer.btn2}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Offer;
