import { star } from "@/public/assets/icons";

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
        <img
          src={star.src}
          width={24}
          height={24}
          alt="rating yıldız"
          className="inline"
        />
        {` (${rating})`}
      </p>
      <h4 className="font-palanquin text-2xl font-bold">{customerName}</h4>
    </div>
  );
};

export default ReviewCard;
