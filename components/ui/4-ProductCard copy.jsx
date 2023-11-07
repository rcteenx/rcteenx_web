import IconDynamic from "@/components/icons/dynamicIcon";

const ProductCard = ({ imgURL, rating, name, price }) => {
  return (
    <div className="mt-4 sm:min-w-[16rem]">
      <img
        src={imgURL.src}
        alt={name}
        className="mt-2 w-64 rounded-2xl border"
      />
      <h3 className="text-xl text-center font-semibold font-palanquin">
        {name}&nbsp;
        <span className="font-montserrat text-coral-red text-xl leading-normal">
          {price}+
        </span>
      </h3>
      <div className="flex justify-center gap-2">
        <IconDynamic icon="star" svgClass="h-6 w-6" />
        <p className="font-montserrat text-slate-gray">({rating})</p>
      </div>
    </div>
  );
};

export default ProductCard;
