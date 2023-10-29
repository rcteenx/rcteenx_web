import { star } from "@/public/assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL.src}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px] p-1 bg-coral-red"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star.src}
          width={24}
          height={24}
          alt="rating star"
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray font-semibold">
          ({rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-2xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
