import { contReview } from "@/content/data/constants";
import ReviewCard from "../ui/6-ReviewCard";
import { reviews } from "@/content/data/constants";

const Reviews = () => {
  return (
    <section className="bg-pale-blue padding max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        <span className="text-coral-red">{contReview.span1}</span>{" "}
        {contReview.postSpan}
      </h3>
      <p className="m-auto mt-4 max-w-xl  text-center info-text">
        {contReview.desc1}.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
