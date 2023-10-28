import { arrowRight } from "@/public/assets/icons";
import { offer } from "@/public/assets/images";
import Button from "../ui/Button";

const SpecialOffer = () => {
  return (
    <section className="padding flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer.src}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Özel </span>
          Teklif
        </h2>
        <p className="mt-4 info-text">
          Sınırlı bir süre geçerli, çok özel teklifimiz aşağıdadır...
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight.src} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
