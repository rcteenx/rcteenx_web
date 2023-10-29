"use client";
const ImgCard = ({ imgURL, changeBigImgImage, bigImg }) => {
  const handleClick = () => {
    if (bigImg !== imgURL.bigImg) {
      changeBigImgImage(imgURL.bigImg);
      console.log(12);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigImg === imgURL.bigImg ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail.src}
          alt="img colletion"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ImgCard;
