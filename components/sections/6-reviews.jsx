import { contReview } from "@/content/data";
import ReviewCard from "../ui/6-ReviewCard";
import { reviews } from "@/content/data";

const Reviews = () => {
  return (
    <section className="py-16 md:pt-12 mt-24 bg-pale-blue">
      <div className="container mx-auto">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          <span className="text-coral-red">{contReview.span1}</span>{" "}
          {contReview.postSpan}
        </h3>
        <p className="m-auto mt-4 max-w-xl text-center info-text">
          {contReview.desc1}.
        </p>

        <div className="mt-12 flex justify-evenly items-center max-lg:flex-col gap-14">
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
      </div>
    </section>
  );
};

export default Reviews;
