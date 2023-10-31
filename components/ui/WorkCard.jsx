const WorkCard = ({ imgURL, label, href }) => {
  return (
    <div className="border rounded-xl">
      <a href={href} target="_blank">
        <div className=" md:w-[22rem] h-[19rem] overflow-y-auto scrollbar-none">
          <img
            src={imgURL}
            alt={label}
            className=" hover:scale-100 hover:opacity-80 transition duration-200 rounded-t-xl shadow-lg "
          />
        </div>
        <h5 className="my-4 text-center text-coral-red font-semibold">
          {label}
        </h5>
      </a>
    </div>
    // <div className="p-8 flex-1 sm:min-w-[20rem] rounded-xl shadow-lg">
    //   <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
    //     <img src={imgURL.src} alt={label} />
    //   </div>
    //   <p className="font-palanquin text-4xl leading-normal">{label}</p>
    // </div>
  );
};

export default WorkCard;
