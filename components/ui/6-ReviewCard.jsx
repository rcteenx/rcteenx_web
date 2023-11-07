import IconDynamic from "@/components/icons/dynamicIcon";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="text-center">
      <img
        src={imgURL.src}
        alt="customer"
        className="mx-auto rounded-full object-cover w-[120px] h-[120px] p-1 bg-coral-red"
      />
      <p className="mt-2 max-w-sm info-text">{feedback}</p>
      <p className="text-xl font-montserrat text-slate-gray font-semibold">
        <IconDynamic
          icon="star"
          alt="rating yıldız"
          svgClass="h-6 w-6 inline"
        />
        {` (${rating})`}
      </p>
      <h4 className="font-palanquin text-2xl font-bold">{customerName}</h4>
    </div>
  );
};

export default ReviewCard;
