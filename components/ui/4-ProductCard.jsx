import IconDynamic from "@/components/icons/dynamicIcon";

const ProductCard = ({ imgURL, rating, name, price, priceCampaign }) => {
  return (
    <div className="mt-4 sm:min-w-[16rem]">
      <img
        src={imgURL.src}
        alt={name}
        className="mt-2 w-64 rounded-2xl border"
      />
      <div className="flex justify-center items-center gap-1">
        <h3 className="text-xl text-center font-semibold font-palanquin">
          {name}
        </h3>
        <IconDynamic icon="star" svgClass="h-4 w-4" svgFill="#FF6452" />
        {/* <p>
          <IconDynamic icon="cv" svgClass="h-6 w-6" />
        </p> */}
        <p>({rating})</p>
      </div>
      <h4 className="line-through text-coral-red text-2xl font-bold">
        {price}
      </h4>
      <p className="">{priceCampaign}</p>
    </div>
  );
};

export default ProductCard;
