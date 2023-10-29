import { contOffer } from "@/content/data/constants";
import { arrowRight } from "@/public/assets/icons";
import { offer } from "@/public/assets/images";
import Button from "../ui/Button";

const Offer = () => {
  return (
    <section className="padding flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
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
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label={contOffer.btn1} iconURL={arrowRight.src} />
          <Button
            label={contOffer.btn2}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default Offer;
